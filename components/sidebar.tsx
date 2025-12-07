"use client";

import { COMPONENTS } from "@/lib/constants/components";
import NavItem from "./nav-item";

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

export default function Sidebar() {
  return (
    <aside className="w-52 shrink-0 border-r border-dashed overflow-hidden">
      <div
        className="h-full overflow-y-auto py-4 px-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="mb-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2 px-2">
            Getting Started
          </h3>
          <nav className="space-y-0.5">
            {NAV_ITEMS.filter((item) => item.type === "page").map((item) => (
              <NavItem key={item.id} item={item} />
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
                <NavItem key={item.id} item={item} />
              )
            )}
          </nav>
        </div>
      </div>
    </aside>
  );
}
