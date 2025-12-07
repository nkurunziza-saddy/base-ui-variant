"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavItem({
  item,
}: {
  item: { id: string; name: string };
}) {
  const pathname = usePathname();
  const isActive = pathname === `/docs/${item.id}`;

  return (
    <Link href={`/docs/${item.id}`}>
      <button
        key={item.id}
        type="button"
        className={cn(
          "w-full text-left relative px-2 py-1.5 text-sm rounded-md transition-colors",
          isActive
            ? "bg-accent text-accent-foreground font-medium"
            : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
        )}
      >
        {item.name}
      </button>
    </Link>
  );
}
