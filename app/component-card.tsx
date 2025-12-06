"use client";

import { useState } from "react";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/new-york/ui/menu";

export function ComponentCard({
  name,
  commands,
  example,
}: {
  name: string;
  commands: { pnpm: string; yarn: string; npm: string; bun: string };
  example: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async (item: string) => {
    try {
      await navigator.clipboard.writeText(item);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command:", err);
    }
  };

  return (
    <div className="relative flex flex-col gap-3 rounded border border-border bg-background p-4 transition-colors duration-150 hover:border-input/80">
      <div className="flex items-center justify-between mb-1">
        <span className="truncate text-sm font-medium">{name}</span>

        <Menu>
          <MenuTrigger
            render={
              <button
                aria-label="Copy install command"
                className="ml-2 rounded p-1 hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring transition"
                type="button"
              />
            }
          >
            {copied ? (
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Copied</title>
                <path
                  d="M5 13l4 4L19 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            ) : (
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Copy command</title>
                <path
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                />
              </svg>
            )}
          </MenuTrigger>
          <MenuPopup align="start" sideOffset={4}>
            <MenuGroup>
              <MenuGroupLabel>Commands</MenuGroupLabel>
              <MenuItem onClick={() => copyCommand(commands.pnpm)}>
                pnpm
              </MenuItem>
              <MenuItem onClick={() => copyCommand(commands.yarn)}>
                yarn
              </MenuItem>
              <MenuItem onClick={() => copyCommand(commands.npm)}>npm</MenuItem>
              <MenuItem onClick={() => copyCommand(commands.bun)}>bun</MenuItem>
            </MenuGroup>
          </MenuPopup>
        </Menu>
      </div>
      <div className="rounded bg-muted/30 border p-4 flex items-center justify-center min-h-20">
        {example}
      </div>
    </div>
  );
}
