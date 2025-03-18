import { cn } from "@/lib/utils";
import { Label } from "../ui/Label";
import { useCharacterLimit } from "../../hooks/useCharacterLimit";
import { CircleX } from "lucide-react";

const Textarea = ({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full border rounded-md bg-transparent py-2 px-4 text-base md:text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 shadow-xs transition-[color,box-shadow]",
        "focus-visible:border-ring/60 focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

Textarea.displayName = "Textarea";

const KTextArea = (
  {
    label,
    counter,
    maxLength,
    clearable,
    hint,
    className,
    placeholder,
    onChange,
    value,
    required,
    ...props
  },
  ref
) => {
  const id = useId();
  const {
    value: inputValue,
    characterCount,
    handleChange,
    maxLength: limit,
  } = useCharacterLimit({
    maxLength,
    initialValue: value || "",
    onChange,
    value,
  });

  const handleClearInput = () => {
    handleChange({ target: { value: "" } });
    if (onChange) {
      onChange({ target: { value: "" } });
    }
  };

  return (
    <div className={cn(label && "flex flex-col w-full gap-1")}>
      <div className="relative w-full">
        {label && (
          <Label className="text-base">
            {label}
            {required && <span className="text-destructive"> * </span>}
          </Label>
        )}
        {counter && (
          <div
            id={`${id}-description`}
            className={cn(
              "pointer-events-none absolute inset-y-0 end-0 flex items-end justify-center pe-2 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50 transition-all duration-300",
              characterCount
                ? "opacity-100 animate-fade-in"
                : "opacity-0 animate-fade-out"
            )}
            aria-live="polite"
            role="status"
          >
            {characterCount}
            {maxLength && ` / ${limit}`}
          </div>
        )}
        {hint && (
          <div
            id={`${id}-description`}
            className={cn(
              "pointer-events-none absolute inset-y-0 end-0 flex items-end justify-center pe-2 text-xs tabular-nums text-muted-foreground peer-disabled:opacity-50 transition-all duration-300"
            )}
            aria-live="polite"
            role="status"
          >
            {hint}
          </div>
        )}
      </div>
      <div className="relative w-full">
        <Textarea
          className={className}
          ref={ref}
          placeholder={placeholder}
          onChange={handleChange}
          value={inputValue}
          {...props}
        />
        {clearable && (
          <button
            className={cn(
              "absolute inset-y-0 end-0 flex h-full w-9 py-2 justify-center rounded-e-lg text-muted-foreground/80 outline-offset-2 transition-all duration-300 hover:text-foreground focus:z-10 focus-visible:outline-2 focus-visible:outline-ring/70 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
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
  );
};

export { KTextArea };
