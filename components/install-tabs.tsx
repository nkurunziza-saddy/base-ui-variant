"use client";

import { cn } from "@/lib/utils";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york/ui/alert";
import { Button } from "@/registry/new-york/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs";
import { Check, Copy } from "lucide-react";
import { useState, useEffect } from "react";

interface InstallTabsProps {
  commands: { pnpm: string; npm: string; yarn: string; bun: string };
  componentId: string;
  dependencies?: string[];
}

export function InstallTabs({
  commands,
  componentId,
  dependencies,
}: InstallTabsProps) {
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);
  const [sourceCode, setSourceCode] = useState<string>("");
  const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [activeMode, setActiveMode] = useState<"cli" | "manual">("cli");

  useEffect(() => {
    if (activeMode === "manual" && !sourceCode) {
      setLoading(true);
      fetch(`/api/component-source?id=${componentId}`)
        .then((res) => res.json())
        .then((data) => {
          setSourceCode(data.source);
          setHighlightedCode(data.highlighted);
          setLoading(false);
        })
        .catch(() => {
          setSourceCode("// Failed to load component source");
          setLoading(false);
        });
    }
  }, [activeMode, componentId, sourceCode]);

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCommand(type);
      setTimeout(() => setCopiedCommand(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-4 mt-2 border-b">
        <button
          onClick={() => setActiveMode("cli")}
          className={cn(
            "pb-1",
            activeMode === "cli"
              ? "border-b-2 border-b-primary"
              : "border-b-2 border-b-transparent"
          )}
        >
          CLI
        </button>
        <button
          onClick={() => setActiveMode("manual")}
          className={cn(
            "pb-1",
            activeMode === "manual"
              ? "border-b-2 border-b-primary"
              : "border-b-2 border-b-transparent"
          )}
        >
          Manual
        </button>
      </div>

      {activeMode === "cli" && (
        <Tabs defaultValue="pnpm" className="w-full">
          <TabsList className="w-fit">
            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
            <TabsTrigger value="npm">npm</TabsTrigger>
            <TabsTrigger value="yarn">yarn</TabsTrigger>
            <TabsTrigger value="bun">bun</TabsTrigger>
          </TabsList>
          {(["pnpm", "npm", "yarn", "bun"] as const).map((pm) => (
            <TabsContent key={pm} value={pm}>
              <div className="flex items-center gap-2 rounded-lg border bg-muted/40 px-4 py-3 mt-2">
                <code className="flex-1 text-sm font-mono">{commands[pm]}</code>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={() => copyToClipboard(commands[pm], pm)}
                  className="h-7 w-7 shrink-0"
                >
                  {copiedCommand === pm ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      )}

      {activeMode === "manual" && (
        <div className="space-y-4">
          {dependencies && dependencies.length > 0 && (
            <Alert variant="warning">
              <AlertTitle>Prerequisites</AlertTitle>
              <AlertDescription>
                Install the required dependencies:
              </AlertDescription>
              <div className="flex items-center bg-muted/90 border border-input/80 py-1 px-2 rounded-sm gap-2 mt-2">
                <code className="flex-1 text-sm font-mono">
                  pnpm add {dependencies.join(" ")}
                </code>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  onClick={() =>
                    copyToClipboard(
                      `pnpm add ${dependencies.join(" ")}`,
                      "deps"
                    )
                  }
                >
                  {copiedCommand === "deps" ? (
                    <Check className="h-3.5 w-3.5" />
                  ) : (
                    <Copy className="h-3.5 w-3.5" />
                  )}
                </Button>
              </div>
            </Alert>
          )}

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Copy and paste into{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 text-xs">
                @/components/ui/{componentId}.tsx
              </code>
            </p>
            <Button
              size="xs"
              variant="ghost"
              onClick={() => copyToClipboard(sourceCode, "source")}
              className="gap-1.5"
            >
              {copiedCommand === "source" ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy code
                </>
              )}
            </Button>
          </div>

          <div className="relative rounded-lg border overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
              </div>
            ) : highlightedCode ? (
              <div
                className="[&_pre]:max-h-[500px] [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:bg-transparent! [&_code]:font-mono"
                dangerouslySetInnerHTML={{ __html: highlightedCode }}
              />
            ) : (
              <pre className="max-h-[500px] overflow-auto p-4">
                <code className="text-sm font-mono text-foreground whitespace-pre">
                  {sourceCode}
                </code>
              </pre>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
