import React, { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/Label";
import { useCharacterLimit } from "../../hooks/useCharacterLimit";
import { CircleX, EyeIcon, EyeOffIcon } from "lucide-react";

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full border rounded-md bg-transparent py-2 px-4 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 shadow-xs transition-[color,box-shadow]",
        "focus-visible:border-ring/60 focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        type === "search" &&
          "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
        type === "file" &&
          "py-2 pl-1 text-muted-foreground/70 file:me-3 file:h-full file:border-0 file:border-r file:border-solid file:border-input file:bg-transparent file:px-3 file:not-italic file:text-foreground",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

const KInput = forwardRef(
  (
    {
      label,
      className,
      placeholder,
      type,
      startInline,
      endInline,
      maxLength,
      counter,
      onChange,
      value,
      clearable,
      required,
      numberOnly,
      textOnly,
      hint,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible((prevState) => !prevState);
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

    const handleInputChange = (event) => {
      if (numberOnly) {
        handleNumberOnly(event);
      } else if (textOnly) {
        handleTextOnly(event);
      } else {
        handleChange(event);
      }
    };

    const handleClearInput = () => {
      handleChange({ target: { value: "" } });
      if (onChange) {
        onChange({ target: { value: "" } });
      }
    };

    const handleNumberOnly = (event) => {
      const newValue = event.target.value;
      if (newValue.match(/^[0-9]*$/)) {
        handleChange(event);
      }
    };

    const handleTextOnly = (event) => {
      const newValue = event.target.value;
      if (newValue.match(/^[A-Za-z\s]*$/)) {
        handleChange(event);
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
          <Input
            className={cn(
              "w-full",
              className,
              startInline && "peer ps-16",
              endInline && "peer pe-16"
            )}
            placeholder={placeholder}
            type={type === "password" && isVisible ? "text" : type}
            ref={ref}
            value={inputValue}
            onChange={handleInputChange}
            {...props}
          />
          {startInline && (
            <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-4 text-sm text-muted-foreground peer-disabled:opacity-50">
              {startInline}
            </span>
          )}
          {endInline && (
            <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm text-muted-foreground peer-disabled:opacity-50">
              {endInline}
            </span>
          )}
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
          {type === "password" && (
            <button
              className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
              aria-pressed={isVisible}
              aria-controls="password"
            >
              {isVisible ? (
                <EyeOffIcon size={16} aria-hidden="true" />
              ) : (
                <EyeIcon size={16} aria-hidden="true" />
              )}
            </button>
          )}
        </div>
      </div>
    );
  }
);

export { KInput };
