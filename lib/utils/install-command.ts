import { APP_URL } from "../configs";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

interface InstallCommandOptions {
  packageManager: PackageManager;
  component: string | "all";
  style?: "new-york" | "default";
  baseUrl?: string;
}

export function getInstallCommand({
  packageManager = "npm",
  component,
  style = "new-york",
  baseUrl = APP_URL,
}: InstallCommandOptions): string {
  const pm = packageManager === "npm" ? "npx" : `${packageManager} dlx`;

  if (component === "all") {
    return `${pm} shadcn@latest add ${baseUrl}/r/index.json`;
  }

  return `${pm} shadcn@latest add ${baseUrl}/r/${component}.json`;
}

export function getNamespaceInstallCommand({
  packageManager = "npm",
  component,
}: Omit<InstallCommandOptions, "style" | "baseUrl">): string {
  const pm = packageManager === "npm" ? "npx" : `${packageManager} dlx`;

  if (component === "all") {
    return `${pm} shadcn@latest add uruhuu`;
  }

  return `${pm} shadcn@latest add uruhuu:${component}`;
}
