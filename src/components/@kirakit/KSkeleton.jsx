import { cn } from "@/lib/utils";

function KSkeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { KSkeleton };
