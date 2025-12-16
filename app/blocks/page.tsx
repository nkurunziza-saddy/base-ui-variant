import { APP_DESCRIPTION, APP_NAME } from "@/lib/configs";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Blocks - ${APP_NAME}`,
  description: APP_DESCRIPTION,
};

const blocks = [
  {
    id: "editor",
    name: "Editor",
    description:
      "A feature-rich Lexical-based text editor with toolbar, floating toolbar, slash commands, tables, images, and speech-to-text support.",
    href: "/blocks/editor",
  },
];

export default function BlocksPage() {
  return (
    <div className="min-h-screen">
      <div className="btnb py-8">
        <div className="max-w-3xl mb-8">
          <p className="text-lg text-muted-foreground">Current blocks</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blocks.map((block) => (
            <Link
              key={block.id}
              href={block.href}
              className="block p-4 border rounded-lg"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-medium">{block.name}</h2>
              </div>
              <p className="text-muted-foreground mb-3">{block.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
