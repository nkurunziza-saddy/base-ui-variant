import { APP_DESCRIPTION, APP_NAME } from "@/lib/configs";
import { getInstallCommand } from "@/lib/utils/install-command";
import { Editor } from "@/registry/new-york/blocks/editor";
import { FixedBorderSeparator } from "@/registry/new-york/ui/border-separator";
import type { Metadata } from "next";
import { CopyButton } from "../copy-button";

export const metadata: Metadata = {
  title: `Editor Block - ${APP_NAME}`,
  description: APP_DESCRIPTION,
};

export default function Home() {
  const components = [
    {
      id: "editor",
      name: "Editor",
      commands: {
        pnpm: getInstallCommand({
          packageManager: "pnpm",
          component: "editor",
        }),
        yarn: getInstallCommand({
          packageManager: "yarn",
          component: "editor",
        }),
        npm: getInstallCommand({ packageManager: "npm", component: "editor" }),
        bun: getInstallCommand({ packageManager: "bun", component: "editor" }),
      },
      examples: [
        {
          title: "Default Editor",
          description: "A code editor component",
          component: <Editor />,
        },
        {
          title: "With toolbar",
          description: "A code editor component with toolbar",
          component: <Editor showFloatingToolbar showToolbar />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <div className=" grid grid-cols-1 gap-6 py-5">
        {components.map((component) => (
          <div className="flex gap-2 flex-col" key={component.id}>
            <div className="cpx space-y-2 pb-5">
              <h1 className="font-medium font-heading text-2xl">
                {component.name}
              </h1>
              <CopyButton commands={component.commands} />
            </div>

            <FixedBorderSeparator className="" />
            <div className="cpx flex-1">
              {component.examples.map((example) => {
                return (
                  <div className="cpx space-y-2 py-5" key={example.title}>
                    <h3 className="text-lg font-bold">{example.title}</h3>
                    <p className="text-muted-foreground">
                      {example.description}
                    </p>
                    {example.component}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
