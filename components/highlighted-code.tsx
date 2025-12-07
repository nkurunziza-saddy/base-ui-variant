import { codeToHtml } from "shiki";

interface HighlightedCodeProps {
  code: string;
  language?: string;
}

export async function HighlightedCode({
  code,
  language = "tsx",
}: HighlightedCodeProps) {
  const html = await codeToHtml(code, {
    lang: language,
    theme: "github-dark-default",
  });

  return (
    <div
      className="[&_pre]:max-h-[400px] [&_pre]:overflow-auto [&_pre]:p-4 [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:bg-transparent! [&_code]:font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
