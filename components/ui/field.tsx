"use client";

import { Field as FieldPrimitive } from "@base-ui-components/react/field";

import { cn } from "@/lib/utils";

function Field({ className, ...props }: FieldPrimitive.Root.Props) {
  return (
    <FieldPrimitive.Root
      data-slot="field"
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
}

function FieldLabel({ className, ...props }: FieldPrimitive.Label.Props) {
  return (
    <FieldPrimitive.Label
      data-slot="field-label"
      className={cn("inline-flex items-center gap-2 text-sm/4", className)}
      {...props}
    />
  );
}

function FieldControl({
  className,
  size = "default",
  ...props
}: Omit<FieldPrimitive.Control.Props, "size"> & {
  size?: "sm" | "default" | "lg" | number;
}) {
  if (props.render) {
    return <FieldPrimitive.Control data-slot="field-control" {...props} />;
  }

  return (
    <span
      data-slot="field-control"
      className={cn(
        "relative inline-flex w-full rounded border border-input bg-background text-sm has-focus-visible:border-ring has-focus-visible:ring-2 has-focus-visible:ring-ring/50 has-disabled:opacity-64 has-aria-invalid:border-destructive/36 has-focus-visible:has-aria-invalid:border-destructive/64 has-focus-visible:has-aria-invalid:ring-destructive/16",
        className
      )}
    >
      <FieldPrimitive.Control
        data-slot="field-control"
        className={cn(
          "w-full min-w-0 rounded-[inherit] px-3 py-1.5 outline-none placeholder:text-muted-foreground/64",
          size === "sm" && "px-2.5 py-1",
          size === "lg" && "py-2",
          props.type === "search" &&
            "[&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none [&::-webkit-search-results-button]:appearance-none [&::-webkit-search-results-decoration]:appearance-none",
          props.type === "file" &&
            "text-muted-foreground file:me-3 file:bg-transparent file:text-sm file:font-medium file:text-foreground"
        )}
        {...props}
      />
    </span>
  );
}

function FieldDescription({
  className,
  ...props
}: FieldPrimitive.Description.Props) {
  return (
    <FieldPrimitive.Description
      data-slot="field-description"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function FieldError({ className, ...props }: FieldPrimitive.Error.Props) {
  return (
    <FieldPrimitive.Error
      data-slot="field-error"
      className={cn("text-xs text-destructive-foreground", className)}
      {...props}
    />
  );
}

const FieldValidity = FieldPrimitive.Validity;

export {
  Field,
  FieldLabel,
  FieldControl,
  FieldDescription,
  FieldError,
  FieldValidity,
};
