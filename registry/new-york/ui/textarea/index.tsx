import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"textarea"> & {
  size?: "sm" | "default" | "lg" | number;
}) {
  return (
    <span
      data-slot="textarea-control"
      className={cn(
        "relative inline-flex w-full rounded-sm border border-input bg-background text-sm has-focus-visible:border-ring has-focus-visible:ring-2 has-focus-visible:ring-ring/50 has-disabled:opacity-64 has-aria-invalid:border-destructive/36 has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16",
        className
      )}
    >
      <textarea
        data-slot="textarea"
        className={cn(
          "field-sizing-content min-h-17.5 w-full rounded-[inherit] px-2.5 py-1.5 outline-none max-sm:min-h-20.5",
          size === "sm" && "min-h-16.5 px-2.5 py-1 max-sm:min-h-19.5",
          size === "lg" && "min-h-18.5 py-2 max-sm:min-h-21.5"
        )}
        {...props}
      />
    </span>
  );
}

export { Textarea };
