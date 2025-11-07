import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import type { LucideIcon } from "lucide-react";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ToggleProps {
  onClick: () => void;
  isActive: boolean;
  icon: LucideIcon;
  title: string;
}

export function ToolbarToggleButton({
  onClick,
  isActive,
  icon: Icon,
  title,
}: ToggleProps) {
  return (
    <Toggle
      size="sm"
      pressed={isActive}
      onPressedChange={onClick}
      title={title}
      onMouseDown={(e) => e.preventDefault()}
    >
      <Icon className="size-4" />
    </Toggle>
  );
}

interface ToolbarButtonProps
  extends React.ComponentProps<typeof Button>,
    Partial<VariantProps<typeof buttonVariants>> {
  isActive?: boolean;
  icon?: LucideIcon;
  children?: React.ReactNode;
}

export const ToolbarButton = React.forwardRef<
  HTMLButtonElement,
  ToolbarButtonProps
>(
  (
    {
      className,
      isActive = false,
      children,
      icon: Icon,
      variant,
      size = "icon-sm",
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant ?? (isActive ? "secondary" : "ghost")}
        size={size}
        className={cn("h-7 w-7 px-[calc(--spacing(1.5)-1px)]", className)}
        {...props}
      >
        {children}
        {Icon && <Icon className="size-4" />}
      </Button>
    );
  }
);

ToolbarButton.displayName = "ToolbarButton";
