import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        primary:
          "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary",
        secondary:
          "bg-secondary/10 text-secondary dark:bg-secondary/20 dark:text-secondary",
        success:
          "bg-success/10 text-success dark:bg-success/20 dark:text-success",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const Alert = ({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
);
Alert.displayName = "Alert";

const AlertTitle = ({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);
AlertTitle.displayName = "AlertTitle";

const AlertDescription = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
);
AlertDescription.displayName = "AlertDescription";

const KAlert = (
  { className, variant, title, description, icon, ...props },
  ref
) => {
  return (
    <Alert ref={ref} className={className} variant={variant} {...props}>
      {icon && (
        <icon
          className="text-muted-foreground group-data-[active=true]/menu-button:text-background"
          size={24}
          aria-hidden="true"
        />
      )}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};

export { KAlert };
