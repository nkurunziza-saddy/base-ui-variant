import type { ReactNode } from "react";

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  default?: string;
}

export interface ComponentDoc {
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

export type ComponentsRegistry = ComponentDoc[];
