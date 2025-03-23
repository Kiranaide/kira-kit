import { cn } from "@/lib/utils";

const KTable = ({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom", className)}
      {...props}
    />
  </div>
);
KTable.displayName = "KTable";

const KTableHeader = ({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn(
      "[&_tr]:border-b text-primary-foreground bg-primary",
      className
    )}
    {...props}
  />
);
KTableHeader.displayName = "KTableHeader";

const KTableBody = ({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
);
KTableBody.displayName = "KTableBody";

const KTableFooter = ({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-semibold [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
);
KTableFooter.displayName = "KTableFooter";

const KTableRow = ({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors in-[tbody]:hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
);
KTableRow.displayName = "KTableRow";

const KTableHead = ({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "last:rounded-tr-md first:rounded-tl-md px-4 py-3 text-left align-middle font-semibold bg-primary [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    )}
    {...props}
  />
);
KTableHead.displayName = "KTableHead";

const KTableCell = ({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn(
      "p-4 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] text-foreground",
      className
    )}
    {...props}
  />
);
KTableCell.displayName = "KTableCell";

const KTableCaption = ({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-muted-foreground", className)}
    {...props}
  />
);
KTableCaption.displayName = "KTableCaption";

export {
  KTable,
  KTableHeader,
  KTableBody,
  KTableFooter,
  KTableHead,
  KTableRow,
  KTableCell,
  KTableCaption,
};
