import { MobileSidebar } from "@/components/mobile-sidebar";
import Sidebar from "@/components/sidebar";
import { MobileTableOfContents } from "@/components/mobile-toc";
import { DesktopTableOfContents } from "@/components/desktop-toc";

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
      <main className="flex-1 no-scrollbar overflow-auto">
        <div className="md:hidden sticky top-0 z-40 bg-background/95 backdrop-blur border-b border-dashed">
          <div className="flex items-center justify-between px-4 py-3">
            <MobileSidebar />
          </div>
          <div className="px-4 pb-3 border-t border-dashed pt-2">
            <MobileTableOfContents />
          </div>
        </div>

        <div className="flex">
          <div className="max-w-3xl flex-1 p-4 md:p-8">{children}</div>
          <div className="hidden lg:block border-l border-dashed w-44">
            <DesktopTableOfContents />
          </div>
        </div>
      </main>
    </div>
  );
}
