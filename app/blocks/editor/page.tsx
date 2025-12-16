import { APP_DESCRIPTION, APP_NAME } from "@/lib/configs";
import { getInstallCommand } from "@/lib/utils/install-command";
import { Editor } from "@/registry/new-york/blocks/editor";
import { FixedBorderSeparator } from "@/registry/new-york/ui/border-separator";
import type { Metadata } from "next";
import { CopyButton } from "../copy-button";
import { HighlightCodeBlock, HighlightCodeText } from "@/components/code-block";

export const metadata: Metadata = {
  title: `Editor Block - ${APP_NAME}`,
  description: APP_DESCRIPTION,
};

export default function EditorPage() {
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
          title: "Preview",
          description: "A rich text editor with toolbar and speech-to-text",
          component: (
            <Editor showFloatingToolbar showToolbar enableSpeechToText />
          ),
        },
      ],
    },
  ];

  return (
    <div className="h-full no-scrollbar">
      <div className="grid grid-cols-1 gap-6 py-5">
        {components.map((component) => (
          <div className="flex gap-2 flex-col" key={component.id}>
            <div className="cpx space-y-2 pb-5">
              <h1 className="font-medium font-heading text-2xl">
                {component.name}
              </h1>
              <CopyButton commands={component.commands} />
            </div>

            <FixedBorderSeparator />
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

            <FixedBorderSeparator />
            <div className="cpx py-8 space-y-8">
              <section>
                <h2 className="text-xl font-bold mb-4">Usage</h2>
                <HighlightCodeBlock
                  code={`import { Editor } from "@/registry/new-york/blocks/editor";

// Basic usage
<Editor />

// With all features enabled
<Editor
  showToolbar
  showFloatingToolbar
  enableSpeechToText
  placeholder="Start writing..."
  onChange={(value) => console.log(value)}
/>`}
                  language="tsx"
                />
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Props</h2>
                <div className="rounded-lg border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-muted/50">
                      <tr>
                        <th className="text-left py-2 px-4 font-medium">
                          Prop
                        </th>
                        <th className="text-left py-2 px-4 font-medium">
                          Type
                        </th>
                        <th className="text-left py-2 px-4 font-medium">
                          Default
                        </th>
                        <th className="text-left py-2 px-4 font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          initialValue
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"string"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"undefined"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Initial editor state as JSON string
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          placeholder
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"string"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          &quot;Start writing...&quot;
                        </td>
                        <td className="py-2 px-4">
                          Placeholder text when editor is empty
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          showToolbar
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"boolean"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"false"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Show the top toolbar with formatting options
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          showFloatingToolbar
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"boolean"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"true"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Show floating toolbar when text is selected
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          enableSpeechToText
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"boolean"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"false"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Enable speech-to-text dictation feature
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          readOnly
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"boolean"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"false"} language="ts" />
                        </td>
                        <td className="py-2 px-4">Make the editor read-only</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          autoFocus
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"boolean"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"false"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Auto-focus the editor on mount
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          minHeight
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"string"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"undefined"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Minimum height of the editor (e.g., &quot;200px&quot;)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          maxHeight
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText code={"string"} language="ts" />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"undefined"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Maximum height of the editor (e.g., &quot;500px&quot;)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          onChange
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText
                            code={"(value: string) => void"}
                            language="ts"
                          />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          {" "}
                          <HighlightCodeText code={"undefined"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Callback when editor content changes (JSON string)
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 font-mono text-primary">
                          plugins
                        </td>
                        <td className="py-2 px-4 font-mono text-muted-foreground">
                          <HighlightCodeText
                            code={"React.ComponentType[]"}
                            language="ts"
                          />
                        </td>
                        <td className="py-2 px-4 font-mono">
                          <HighlightCodeText code={"[]"} language="ts" />
                        </td>
                        <td className="py-2 px-4">
                          Custom plugins to extend functionality
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Features</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Rich Text Editing</h3>
                    <p className="text-sm text-muted-foreground">
                      Full support for headings, lists, quotes, code blocks,
                      links, tables, and images.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Slash Commands</h3>
                    <p className="text-sm text-muted-foreground">
                      Type <code className="bg-muted px-1 rounded">/</code> to
                      open quick command menu for inserting blocks.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Speech to Text</h3>
                    <p className="text-sm text-muted-foreground">
                      Dictate text with voice commands. Say
                      &quot;undo&quot;/&quot;redo&quot; and punctuation
                      commands.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Tables</h3>
                    <p className="text-sm text-muted-foreground">
                      Create and edit tables with hover actions for row/column
                      management.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Import/Export</h3>
                    <p className="text-sm text-muted-foreground">
                      Export as HTML, Markdown, or plain text. Import from
                      Markdown files.
                    </p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-semibold mb-2">Markdown Shortcuts</h3>
                    <p className="text-sm text-muted-foreground">
                      Use markdown syntax like{" "}
                      <code className="bg-muted px-1 rounded">#</code> for
                      headings,{" "}
                      <code className="bg-muted px-1 rounded">**bold**</code>,{" "}
                      <code className="bg-muted px-1 rounded">*italic*</code>.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">
                  Speech-to-Text Commands
                </h2>
                <p className="text-muted-foreground mb-4">
                  When speech-to-text is enabled, you can use these voice
                  commands:
                </p>
                <div className="grid gap-2 md:grid-cols-3">
                  {[
                    { command: '"new line"', result: "Insert line break" },
                    { command: '"new paragraph"', result: "Insert paragraph" },
                    { command: '"period" / "full stop"', result: "Insert ." },
                    { command: '"comma"', result: "Insert ," },
                    { command: '"question mark"', result: "Insert ?" },
                    { command: '"exclamation mark"', result: "Insert !" },
                    { command: '"undo"', result: "Undo last action" },
                    { command: '"redo"', result: "Redo last action" },
                  ].map((item) => (
                    <div
                      key={item.command}
                      className="flex items-center gap-2 p-2 bg-muted/50 rounded text-sm"
                    >
                      <code className="text-primary">{item.command}</code>
                      <span className="text-muted-foreground">→</span>
                      <span>{item.result}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Keyboard Shortcuts</h2>
                <div className="grid gap-2 md:grid-cols-2">
                  {[
                    { keys: "Ctrl/Cmd + B", action: "Bold" },
                    { keys: "Ctrl/Cmd + I", action: "Italic" },
                    { keys: "Ctrl/Cmd + U", action: "Underline" },
                    { keys: "Ctrl/Cmd + Z", action: "Undo" },
                    { keys: "Ctrl/Cmd + Shift + Z", action: "Redo" },
                    { keys: "Ctrl/Cmd + K", action: "Insert Link" },
                    { keys: "Tab (in table)", action: "Next cell" },
                    { keys: "Shift + Tab (in table)", action: "Previous cell" },
                  ].map((item) => (
                    <div
                      key={item.keys}
                      className="flex items-center justify-between p-2 bg-muted/50 rounded text-sm"
                    >
                      <kbd className="px-2 py-1 bg-background border rounded text-xs font-mono">
                        {item.keys}
                      </kbd>
                      <span className="text-muted-foreground">
                        {item.action}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold mb-4">Tips</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>
                    Since the editor is built around Lexical, you can use any
                    Lexical plugin or extension with it.
                  </li>
                  <li>
                    Use <code className="bg-muted px-1 rounded">/</code> to
                    quickly insert any block type without leaving the keyboard
                  </li>
                  <li>
                    Select text to show the floating toolbar for quick
                    formatting
                  </li>
                  <li>
                    Hover over table cells to reveal row/column action buttons
                  </li>
                  <li>
                    The editor state is serialized as JSON - store it in your
                    database for persistence
                  </li>
                  <li>
                    Use <code className="bg-muted px-1 rounded">readOnly</code>{" "}
                    prop to display content without editing
                  </li>
                  <li>
                    Speech-to-text auto-capitalizes sentences and adds spacing
                    automatically
                  </li>
                </ul>
              </section>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
