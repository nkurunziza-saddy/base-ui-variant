import { BorderSeparator } from "@/registry/new-york/ui/border-separator";
import Link from "next/link";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/configs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Blocks - ${APP_NAME}`,
  description: APP_DESCRIPTION,
};

export default function BlocksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <div className="btnb space-y-2 py-5">
        <h1 className="font-bold font-heading text-4xl">Blocks</h1>
        <p className="text-muted-foreground text-sm">
          Compiled blocks for your design system.
        </p>
      </div>
      <BorderSeparator />
      <div className="btnb space-y-2 py-5">
        <div className="flex flex-wrap gap-5">
          <Link href={"/blocks"}>Featured</Link>
          <Link href={"/blocks/editor"}>Text editor</Link>
        </div>
      </div>
      <BorderSeparator />
      {children}
    </div>
  );
}
