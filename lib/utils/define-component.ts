import type { ReactNode } from "react";
import type {
  ComponentDoc,
  ComponentProp,
} from "@/lib/types/component-docs.type";
import { getInstallCommand } from "./install-command";

interface DefineComponentOptions {
  id: string;
  name: string;
  description: string;
  dependencies: string[];
  example: ReactNode;
  code: string;
  props: ComponentProp[];
  tips: string[];
  fullWidth?: boolean;
  related?: string[];
}

export function defineComponent(
  options: DefineComponentOptions
): ComponentDoc & {
  commands: { pnpm: string; npm: string; yarn: string; bun: string };
} {
  return {
    ...options,
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: options.id,
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: options.id,
      }),
      npm: getInstallCommand({ packageManager: "npm", component: options.id }),
      bun: getInstallCommand({ packageManager: "bun", component: options.id }),
    },
  };
}
