import { MobileSidebar } from "@/components/mobile-sidebar";
import Sidebar from "@/components/sidebar";
import { MobileTableOfContents } from "@/components/mobile-toc";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-3.5rem-1px)]">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <main className="flex-1 overflow-auto">
        <div className="md:hidden sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-dashed">
          <div className="flex items-center justify-between px-4 py-3">
            <MobileSidebar />
          </div>
          <div className="px-4 pb-3 border-t border-dashed pt-2">
            <MobileTableOfContents />
          </div>
        </div>

        <div className="p-4 md:p-8 max-w-3xl">{children}</div>
      </main>
    </div>
  );
}
