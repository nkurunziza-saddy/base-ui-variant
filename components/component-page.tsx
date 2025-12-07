import { PreviewCard } from "./preview-card";
import { InstallTabs } from "./install-tabs";
import { COMPONENTS } from "@/lib/constants/components";

export function ComponentPage({
  component,
}: {
  component: (typeof COMPONENTS)[number];
}) {
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
        <PreviewCard fullWidth={component.fullWidth} code={component.code}>
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
        <div className="rounded-lg border bg-muted/40 p-4">
          <pre className="text-sm font-mono overflow-x-auto">
            <code>{`import { ${component.name.replace(
              /\s+/g,
              ""
            )} } from "@/registry/new-york/ui/${component.id}";

<${component.name.replace(/\s+/g, "")} />`}</code>
          </pre>
        </div>
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
                {component.props.map((prop) => (
                  <tr key={prop.name}>
                    <td className="px-4 py-2 font-mono text-xs text-primary">
                      {prop.name}
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-muted-foreground">
                      {prop.type}
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

      <section>
        <h2 className="text-sm font-semibold mb-3 text-muted-foreground tracking-wide">
          Tips
        </h2>
        <ul className="text-sm text-muted-foreground space-y-2.5">
          {component.tips && component.tips.length > 0 ? (
            component.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-primary mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))
          ) : (
            <>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  Built with Base UI — fully accessible and keyboard navigable.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-0.5">•</span>
                <span>
                  Customize styles by modifying the component file directly.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-primary mt-0.5">•</span>
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
