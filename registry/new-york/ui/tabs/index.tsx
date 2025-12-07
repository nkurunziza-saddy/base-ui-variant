"use client";

import { Tabs as TabsPrimitive } from "@base-ui-components/react/tabs";

import { cn } from "@/lib/utils";

type TabsVariant = "default" | "underline";

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn(
        "flex flex-col gap-2 data-[orientation=vertical]:flex-row",
        className
      )}
      {...props}
    />
  );
}

function TabsList({
  variant = "default",
  className,
  children,
  ...props
}: TabsPrimitive.List.Props & {
  variant?: TabsVariant;
}) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        "data-[orientation=vertical]:h-auto data-[orientation=vertical]:flex-col",
        variant === "underline" &&
          "h-auto rounded-none bg-transparent shadow-[inset_0_-1px] shadow-border p-0 px-1",
        className
      )}
      {...props}
    >
      {children}
      {variant === "underline" && (
        <TabsPrimitive.Indicator
          data-slot="tab-indicator"
          className="absolute bottom-0 left-0 z-10 h-0.5 w-(--active-tab-width) translate-x-(--active-tab-left) bg-primary transition-all duration-200 ease-in-out"
        />
      )}
    </TabsPrimitive.List>
  );
}

function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap select-none",

        "transition-[color,box-shadow]",

        "text-foreground dark:text-muted-foreground",

        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1",

        "data-disabled:pointer-events-none data-disabled:opacity-50",

        "data-active:bg-background data-active:shadow-sm",
        "dark:data-active:text-foreground dark:data-active:border-input/30 dark:data-active:bg-input/30",

        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",

        "data-[orientation=vertical]:w-full data-[orientation=vertical]:justify-start",
        className
      )}
      {...props}
    />
  );
}

function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        "flex-1 outline-none",
        "focus-visible:ring-ring/50 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:outline-1 focus-visible:rounded-md",
        className
      )}
      {...props}
    />
  );
}

export {
  Tabs,
  TabsList,
  TabsTab,
  TabsTab as TabsTrigger,
  TabsPanel,
  TabsPanel as TabsContent,
};
