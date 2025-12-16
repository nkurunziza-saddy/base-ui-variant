"use client";

import { COMPONENTS } from "@/lib/constants/components";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet";
import { Menu } from "lucide-react";
import NavItem from "./nav-item";
import { useState } from "react";

type NavItemType =
  | { type: "page"; id: string; name: string }
  | { type: "component"; id: string; name: string };

const NAV_ITEMS: NavItemType[] = [
  { type: "page", id: "introduction", name: "Introduction" },
  { type: "page", id: "quick-start", name: "Quick Start" },
  { type: "page", id: "theming", name: "Theming" },
  ...COMPONENTS.map((c) => ({
    type: "component" as const,
    id: c.id,
    name: c.name,
  })),
];

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center gap-2 text-sm font-medium">
        <Menu className="size-5" />
        <span>Open menu</span>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-72 bg-background border-r border-dashed"
      >
        <SheetHeader>
          <SheetTitle>Uruhuu</SheetTitle>
        </SheetHeader>
        <div
          className="flex-1 overflow-y-auto py-4 px-3"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="mb-6">
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
              Getting Started
            </h3>
            <nav className="space-y-0.5">
              {NAV_ITEMS.filter((item) => item.type === "page").map((item) => (
                <div key={item.id} onClick={() => setOpen(false)}>
                  <NavItem item={item} />
                </div>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
              Components
            </h3>
            <nav className="space-y-0.5">
              {NAV_ITEMS.filter((item) => item.type === "component").map(
                (item) => (
                  <div key={item.id} onClick={() => setOpen(false)}>
                    <NavItem item={item} />
                  </div>
                )
              )}
            </nav>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
