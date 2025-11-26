"use client";
import {
  Menu,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuTrigger,
} from "@/registry/new-york/ui/menu";
import { useState } from "react";

export const CopyButton = ({
  commands,
}: {
  commands: { pnpm: string; yarn: string; npm: string; bun: string };
}) => {
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
    <div className="">
      <Menu>
        <MenuTrigger
          render={
            <div
              className=" flex items-center gap-3 text-muted-foreground border border-dashed w-fit px-1.5 py-0.5 cursor-pointer select-none"
              aria-label="Copy install command"
            />
          }
        >
          <p className="text-muted-foreground text-sm">{commands.pnpm}</p>
          {copied ? (
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Copied</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Copy command</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </MenuTrigger>
        <MenuPopup align="start" sideOffset={4}>
          <MenuGroup>
            <MenuGroupLabel>Commands</MenuGroupLabel>
            <MenuItem onClick={() => copyCommand(commands.pnpm)}>
              Copy PNPM Command
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.yarn)}>
              Copy Yarn Command
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.npm)}>
              Copy NPM Command
            </MenuItem>
            <MenuItem onClick={() => copyCommand(commands.bun)}>
              Copy Bun Command
            </MenuItem>
          </MenuGroup>
        </MenuPopup>
      </Menu>
    </div>
  );
};
