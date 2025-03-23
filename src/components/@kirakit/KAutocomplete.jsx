import { Command as CommandPrimitive } from "cmdk";
import { Check, CircleX } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useCallback, useRef, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "../ui/Label";

const Command = ({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className
    )}
    {...props}
  />
);
Command.displayName = CommandPrimitive.displayName;

const CommandDialog = ({ children, ...props }) => {
  return (
    <Dialog {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = ({ className, ...props }, ref) => (
  <div
    className={cn("flex items-center border border-input rounded-md")}
    cmdk-input-wrapper=""
  >
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex w-full rounded-md bg-transparent py-2 px-4 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 shadow-xs transition-[color,box-shadow]",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  </div>
);

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = ({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[200px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
);

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = (props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="py-6 text-center text-sm"
    {...props}
  />
);

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = ({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    )}
    {...props}
  />
);

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = ({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn("-mx-1 h-px bg-border", className)}
    {...props}
  />
);
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = ({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default gap-2 select-none items-center rounded-sm px-4 py-2 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-primary data-[selected=true]:text-primary-foreground data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
);

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({ className, ...props }) => {
  return (
    <span
      className={cn(
        "ml-auto text-xs tracking-widest text-muted-foreground",
        className
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

const KAutocomplete = ({
  options = [],
  placeholder,
  emptyMessage = "No Results...",
  value = [],
  onValueChange,
  disabled,
  isLoading = false,
  label = "",
  required,
  clearable,
  className,
}) => {
  const inputRef = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);
  const [inputValue, setInputValue] = useState(value.label || "");

  const handleKeyDown = useCallback(
    (event) => {
      const input = inputRef.current;
      if (!input) return;
      if (!isOpen) setOpen(true);
      if ((event.key === "Enter", input.value !== "")) {
        const optionToSelect = options.find(
          (option) => option.label === input.value
        );
        if (optionToSelect) {
          setSelected(optionToSelect);
          onValueChange?.(optionToSelect);
        }
      }
      if (event.key === "Escape") input.blur();
    },
    [isOpen, options, onValueChange]
  );

  const handleBlur = useCallback(() => {
    setOpen(false);
    if (selected) {
      setInputValue(selected.label);
    }
  }, [selected]);

  const handleSelectOption = useCallback(
    (selectedOption) => {
      setInputValue(selectedOption.label);
      setSelected(selectedOption);
      onValueChange?.(selectedOption);
      setTimeout(() => inputRef?.current?.blur(), 0);
    },
    [onValueChange]
  );

  const handleClearInput = () => {
    setInputValue("");
    setSelected(null);
  };

  return (
    <CommandPrimitive onKeyDown={handleKeyDown}>
      <div className={cn(label && "flex flex-col w-full gap-1")}>
        {label && (
          <Label className="text-base">
            {label}
            {required && <span className="text-destructive"> * </span>}
          </Label>
        )}
        <div className="relative w-full">
          <CommandInput
            ref={inputRef}
            value={inputValue}
            onValueChange={isLoading ? undefined : setInputValue}
            onBlur={handleBlur}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            disabled={disabled}
            className={className}
          />
          {clearable && (
            <button
              className={cn(
                "absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-all duration-300 hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                inputValue && clearable
                  ? "opacity-100 animate-fade-in"
                  : "opacity-0 animate-fade-out pointer-events-none"
              )}
              aria-label="Clear input"
              onClick={handleClearInput}
            >
              <CircleX size={16} strokeWidth={2} aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
      <div className="relative">
        <div
          className={cn(
            "animate-in fade-in-0 zoom-in-95 absolute top-2 z-10 w-full rounded-md bg-background outline-none",
            isOpen ? "block" : "hidden"
          )}
        >
          <CommandList className="rounded-md ring-1 ring-border">
            {isLoading && (
              <CommandPrimitive.Loading>
                <div className="p-1">
                  <Skeleton className="h-8 w-full" />
                </div>
              </CommandPrimitive.Loading>
            )}
            {options.length > 0 && !isLoading && (
              <CommandGroup>
                {options.map((option) => {
                  const isSelected = selected?.value === option.value;
                  return (
                    <CommandItem
                      key={option.value}
                      value={option.label}
                      onMouseDown={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                      }}
                      onSelect={() => handleSelectOption(option)}
                      className={cn(
                        "flex w-full items-center justify-between gap-2",
                        isSelected && "bg-primary text-primary-foreground"
                      )}
                    >
                      {option.label}
                      {isSelected && <Check className="size-4" />}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
            {!isLoading && (
              <CommandPrimitive.Empty className="select-none rounded-sm px-2 py-3 text-center text-sm">
                {emptyMessage}
              </CommandPrimitive.Empty>
            )}
          </CommandList>
        </div>
      </div>
    </CommandPrimitive>
  );
};

export { KAutocomplete };
