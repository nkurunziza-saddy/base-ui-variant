import { APP_URL } from "../configs";

type PackageManager = "npm" | "yarn" | "pnpm" | "bun";

interface InstallCommandOptions {
  packageManager: PackageManager;
  component: string | "all";
  baseUrl?: string;
}

export function getInstallCommand({
  packageManager = "npm",
  component,
  baseUrl = APP_URL,
}: InstallCommandOptions): string {
  let command_prefix = "";
  if (packageManager === "npm") {
    command_prefix = "npx";
  } else if (packageManager === "bun") {
    command_prefix = "bunx";
  } else {
    command_prefix = `${packageManager} dlx`;
  }

  if (component === "all") {
    return `${command_prefix} shadcn@latest add ${baseUrl}/r/index.json`;
  }

  return `${command_prefix} shadcn@latest add ${baseUrl}/r/${component}.json`;
}

export function getNamespaceInstallCommand({
  packageManager = "npm",
  component,
}: Omit<InstallCommandOptions, "baseUrl">): string {
  let command_prefix = "";
  if (packageManager === "npm") {
    command_prefix = "npx";
  } else if (packageManager === "bun") {
    command_prefix = "bunx";
  } else {
    command_prefix = `${packageManager} dlx`;
  }

  if (component === "all") {
    return `${command_prefix} shadcn@latest add uruhuu`;
  }

  return `${command_prefix} shadcn@latest add uruhuu:${component}`;
}
