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

export function DesktopTableOfContents() {
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
    <aside className="w-full shrink-0 py-8 px-4">
      <div className="sticky top-8">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          On this page
        </h4>
        <nav className="space-y-1">
          {tocItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
            >
              {item.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
