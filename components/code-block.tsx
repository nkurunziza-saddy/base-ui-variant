import { codeToHtml } from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export async function highlightCode(
  code: string,
  language: string = "tsx"
): Promise<string> {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark-default",
  });
  return html;
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
  return (
    <pre className="overflow-x-auto rounded-lg p-4 text-sm">
      <code className="font-mono">{code}</code>
    </pre>
  );
}
