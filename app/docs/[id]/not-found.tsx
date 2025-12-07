import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-muted-foreground">
        The page you're looking for doesn't exist.
      </p>
      <Link
        href="/docs/introduction"
        className="inline-block text-sm text-primary underline underline-offset-4"
      >
        Go to Introduction
      </Link>
    </div>
  );
}
