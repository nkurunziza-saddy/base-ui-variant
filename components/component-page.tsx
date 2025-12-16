import { PreviewCard } from "./preview-card";
import { InstallTabs } from "./install-tabs";
import { COMPONENTS } from "@/lib/constants/components";
import { codeToHtml } from "shiki";
import { HighlightCodeBlock, HighlightCodeText } from "./code-block";

export async function ComponentPage({
  component,
}: {
  component: (typeof COMPONENTS)[number];
}) {
  const highlightedCode = component.code
    ? await codeToHtml(component.code, {
        lang: "tsx",
        theme: "vitesse-dark",
      })
    : undefined;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">{component.name}</h1>
        <p className="text-muted-foreground">
          {component.description ||
            `A ${component.name.toLowerCase()} component built with Base UI.`}
        </p>
      </div>

      <section>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
          Preview
        </h2>
        <PreviewCard
          fullWidth={component.fullWidth}
          code={component.code}
          highlightedCode={highlightedCode}
        >
          {component.example}
        </PreviewCard>
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
          Installation
        </h2>
        <InstallTabs
          commands={component.commands}
          componentId={component.id}
          dependencies={component.dependencies}
        />
      </section>

      <section>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
          Usage
        </h2>
        <HighlightCodeBlock
          code={`import { ${component.name.replace(
            /\s+/g,
            ""
          )} } from "@/components/ui/${
            component.id
          }";\n\n<${component.name.replace(/\s+/g, "")} />`}
          language="tsx"
        />
      </section>

      {component.props && component.props.length > 0 && (
        <section>
          <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
            Key Props
          </h2>
          <div className="rounded-lg border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left px-4 py-2 font-medium">Prop</th>
                  <th className="text-left px-4 py-2 font-medium">Type</th>
                  <th className="text-left px-4 py-2 font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {component.props.map(async (prop) => (
                  <tr key={prop.name}>
                    <td className="px-4 py-2 font-mono text-xs text-primary">
                      {prop.name}
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                      <HighlightCodeText code={prop.type} language="ts" />
                    </td>

                    <td className="px-4 py-2 text-muted-foreground">
                      {prop.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      <section className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-4">
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
          Tips
        </h2>
        <ul className="text-sm text-muted-foreground space-y-2">
          {component.tips && component.tips.length > 0 ? (
            component.tips.map((tip, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>{tip}</span>
              </li>
            ))
          ) : (
            <>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  Built with Base UI — fully accessible and keyboard navigable.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  Customize styles by modifying the component file directly.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">•</span>
                <span>
                  Check the component source for all available props and
                  variants.
                </span>
              </li>
            </>
          )}
        </ul>
      </section>
    </div>
  );
}
