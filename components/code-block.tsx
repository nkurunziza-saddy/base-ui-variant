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
    theme: "vitesse-dark",
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

export async function HighlightCodeBlock({
  code,
  language = "tsx",
}: CodeBlockProps) {
  return (
    <div
      className="rounded-lg border overflow-hidden [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:bg-transparent! [&_code]:font-mono"
      dangerouslySetInnerHTML={{
        __html: await codeToHtml(code, {
          lang: language,
          theme: "vitesse-dark",
        }),
      }}
    />
  );
}

export async function HighlightCodeText({
  code,
  language = "tsx",
}: CodeBlockProps) {
  return (
    <p
      className="overflow-hidden [&_pre]:p-0 [&_pre]:text-inherit [&_pre]:leading-relaxed [&_pre]:bg-transparent! [&_code]:font-mono"
      dangerouslySetInnerHTML={{
        __html: await codeToHtml(code, {
          lang: language,
          theme: "vitesse-dark",
        }),
      }}
    />
  );
}
