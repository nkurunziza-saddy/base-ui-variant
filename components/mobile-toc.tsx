"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

interface TocItem {
  id: string;
  title: string;
}

const PAGE_TOC: Record<string, TocItem[]> = {
  introduction: [
    { id: "what-is-this", title: "What is this?" },
    { id: "why-base-ui", title: "Why Base UI?" },
    { id: "credits", title: "Credits" },
  ],
  "quick-start": [
    { id: "prerequisites", title: "Prerequisites" },
    { id: "installation", title: "Installation" },
    { id: "usage", title: "Usage" },
  ],
  theming: [
    { id: "css-variables", title: "CSS Variables" },
    { id: "customization", title: "Customization" },
  ],
};

const COMPONENT_TOC: TocItem[] = [
  { id: "preview", title: "Preview" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "key-props", title: "Key Props" },
  { id: "tips", title: "Tips" },
];

export function MobileTableOfContents() {
  const pathname = usePathname();

  const tocItems = useMemo(() => {
    const pageId = pathname?.split("/").pop() || "";
    return PAGE_TOC[pageId] || COMPONENT_TOC;
  }, [pathname]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="flex items-center gap-3 overflow-x-auto py-1 no-scrollbar">
      <span className="text-xs text-muted-foreground shrink-0">
        On this page:
      </span>
      <div className="flex items-center gap-2">
        {tocItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors shrink-0 px-2 py-1 rounded-md hover:bg-muted"
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
