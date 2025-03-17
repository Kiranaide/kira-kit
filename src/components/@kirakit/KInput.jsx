import * as React from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { cn } from "@/lib/utils";
import { Label } from "../ui/Label";

const Input = ({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full border rounded-md bg-transparent py-2 px-4 text-base md:text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 shadow-xs transition-[color,box-shadow]",
        "focus-visible:border-ring/60 focus-visible:ring-ring/50 focus-visible:ring-[2px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = "Input";

const KInput = ({
  label,
  className,
  placeholder,
  type,
  startInline,
  endInline,
  ...props
}) => {
  return (
    <div className={cn(label && "flex flex-col w-full gap-1")}>
      {label && <Label className="text-base">{label}</Label>}
      <div className="relative w-full">
        <Input
          className={cn(
            "w-full",
            className,
            startInline && "peer ps-16",
            endInline && "peer pe-16"
          )}
          placeholder={placeholder}
          type={type}
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
      </div>
    </div>
  );
};

export { KInput };
