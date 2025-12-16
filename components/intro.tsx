export function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-3">Introduction</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          A collection of beautifully designed, accessible components built with{" "}
          <a
            href="https://base-ui.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Base UI
          </a>{" "}
          and styled with Tailwind CSS.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="what-is-this" className="text-xl font-semibold">
          What is this?
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          This is a <strong className="text-foreground">Base UI variant</strong>{" "}
          of the popular shadcn/ui component library. While shadcn/ui uses Radix
          UI primitives, this library uses{" "}
          <a
            href="https://base-ui.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Base UI
          </a>{" "}
          (from the creators of MUI) as the foundation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 id="why-base-ui" className="text-xl font-semibold">
          Why Base UI?
        </h2>
        <ul className="space-y-3 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong className="text-foreground">Unstyled & Accessible</strong>{" "}
              — Base UI provides unstyled, accessible primitives that you can
              customize freely.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong className="text-foreground">Performance</strong> —
              Lightweight bundle size with tree-shaking support.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong className="text-foreground">Modern API</strong> — Clean,
              composable API design with excellent TypeScript support.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary mt-1">•</span>
            <span>
              <strong className="text-foreground">Copy & Paste</strong> —
              Components are designed to be copied into your project and
              customized.
            </span>
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 id="credits" className="text-xl font-semibold">
          Credits
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Inspired by{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            shadcn/ui
          </a>
          . Built with components from{" "}
          <a
            href="https://base-ui.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4"
          >
            Base UI
          </a>
          .
        </p>
      </div>
    </div>
  );
}
