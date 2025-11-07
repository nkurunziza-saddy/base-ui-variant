import {
  BorderSeparator,
  FixedBorderSeparator,
} from "@/components/ui/border-separator";
import { Editor } from "@/components/blocks/editor";
import { CopyButton } from "./copy-button";

export default function Home() {
  const components = [
    {
      id: "editor",
      name: "Editor",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/editor",
        yarn: "yarn dlx shadcn@latest add @coss/editor",
        npm: "npx shadcn@latest add @coss/editor",
        bun: "bun dlx shadcn@latest add @coss/editor",
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
          component: <Editor showToolbar showFloatingToolbar />,
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
                  <div key={example.title} className="cpx space-y-2 py-5">
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
