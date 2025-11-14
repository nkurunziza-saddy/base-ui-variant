import { getInstallCommand } from "@/lib/utils/install-command";
import Link from "next/link";
import { Editor } from "@/registry/new-york/blocks/editor";
import {
  BorderSeparator,
  FixedBorderSeparator,
} from "@/registry/new-york/ui/border-separator";
import { CopyButton } from "./copy-button";

export default function Home() {
  const components = [
    {
      id: "editor",
      name: "Editor",
      commands: {
        pnpm: getInstallCommand({ packageManager: "pnpm", component: "editor" }),
        yarn: getInstallCommand({ packageManager: "yarn", component: "editor" }),
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
      <div className="cpx space-y-2 py-5">
        <h1 className="font-bold font-heading text-4xl">Blocks</h1>
        <p className="text-muted-foreground text-sm">
          Compiled blocks for your design system.
        </p>
      </div>
      <BorderSeparator />
      <div className="cpx space-y-2 py-5">
        <div className="flex flex-wrap gap-5">
          <Link href={"/"}>Featured</Link>
          <Link href={"/editor"}>Text editor</Link>
          <Link href={"/forms"}>Forms</Link>
        </div>
      </div>
      <BorderSeparator />

      <div className=" grid grid-cols-1 gap-6 py-5">
        {components.map((component) => (
          <div className="flex gap-2 flex-col" key={component.id}>
            <div className="cpx space-y-3 pb-4">
              <h2 className="text-xl font-bold">{component.name}</h2>
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
