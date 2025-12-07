"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, Copy, Eye, Code } from "lucide-react";

export function PreviewCard({
  children,
  code,
  fullWidth = false,
  className,
}: {
  children: React.ReactNode;
  code?: string;
  fullWidth?: boolean;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl border bg-background shadow-sm",
        className
      )}
    >
      <div className="flex items-center justify-between border-b bg-muted/30 px-4">
        <div className="flex">
          <button
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors",
              activeTab === "preview"
                ? "border-b-2 border-primary text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="size-4" />
            Preview
          </button>
          {code && (
            <button
              onClick={() => setActiveTab("code")}
              className={cn(
                "flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors",
                activeTab === "code"
                  ? "border-b-2 border-primary text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Code className="size-4" />
              Code
            </button>
          )}
        </div>

        {code && activeTab === "code" && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copied ? (
              <>
                <Check className="size-3.5 text-green-500" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {activeTab === "preview" ? (
        <div
          className={cn(
            "flex min-h-[300px] w-full items-center justify-center bg-muted/10 p-10",
            fullWidth ? "[&>div]:w-full" : ""
          )}
        >
          <div className={cn("relative z-10", fullWidth ? "w-full" : "w-auto")}>
            {children}
          </div>
        </div>
      ) : (
        <div className="relative">
          <pre className="max-h-[400px] overflow-auto bg-muted/40 p-4">
            <code className="text-sm font-mono text-foreground whitespace-pre">
              {code}
            </code>
          </pre>
        </div>
      )}
    </div>
  );
}
