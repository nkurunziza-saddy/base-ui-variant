import { getInstallCommand } from "@/lib/utils/install-command";
import { AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york/ui/accordion";
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/registry/new-york/ui/alert";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/registry/new-york/ui/alert-dialog";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";
import { Badge } from "@/registry/new-york/ui/badge";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardPanel,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { Checkbox } from "@/registry/new-york/ui/checkbox";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import {
  Menu,
  MenuCheckboxItem,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuSeparator,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/registry/new-york/ui/menu";
import { Meter } from "@/registry/new-york/ui/meter";
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from "@/registry/new-york/ui/number-field";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@/registry/new-york/ui/preview-card";
import { Progress } from "@/registry/new-york/ui/progress";
import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select";
import { Separator } from "@/registry/new-york/ui/separator";
import {
  Sheet,
  SheetDescription,
  SheetHeader,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "@/registry/new-york/ui/sheet";
import { Skeleton } from "@/registry/new-york/ui/skeleton";
import { Slider } from "@/registry/new-york/ui/slider";
import { Switch } from "@/registry/new-york/ui/switch";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/registry/new-york/ui/tabs";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { Toggle } from "@/registry/new-york/ui/toggle";
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from "@/registry/new-york/ui/tooltip";

export const COMPONENTS = [
  {
    id: "button",
    name: "Button",
    description: "A clickable button element with multiple variants and sizes.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "button" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "button" }),
      npm: getInstallCommand({ packageManager: "npm", component: "button" }),
      bun: getInstallCommand({ packageManager: "bun", component: "button" }),
    },
    dependencies: ["@base-ui-components/react", "class-variance-authority"],
    example: <Button>Click me</Button>,
    code: `import { Button } from "@/registry/new-york/ui/button";

export function Demo() {
  return <Button>Click me</Button>;
}`,
    props: [
      {
        name: "variant",
        type: "'default' | 'outline' | 'ghost' | 'link' | 'destructive'",
        description: "Visual style variant",
      },
      {
        name: "size",
        type: "'default' | 'sm' | 'lg' | 'xs' | 'icon'",
        description: "Button size",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disables button interaction",
      },
      {
        name: "render",
        type: "ReactElement | ((props: ButtonProps) => ReactElement)",
        description:
          "Allows you to replace the component's HTML element with a different tag, or compose it with another component. Accepts a ReactElement or a function that returns the element to render.",
      },
    ],
    tips: [
      "Use `variant='destructive'` for delete/remove actions",
      "Combine with `asChild` to render as a different element (e.g., Link)",
      "Icon-only buttons should use `size='icon'` for proper sizing",
    ],
  },
  {
    id: "input",
    name: "Input",
    description:
      "A text input field with support for different sizes and validation states.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "input" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "input" }),
      npm: getInstallCommand({ packageManager: "npm", component: "input" }),
      bun: getInstallCommand({ packageManager: "bun", component: "input" }),
    },
    dependencies: ["@base-ui-components/react"],
    example: <Input placeholder="Enter text..." />,
    code: `import { Input } from "@/registry/new-york/ui/input";

export function Demo() {
  return <Input placeholder="Enter text..." />;
}`,
    fullWidth: true,
    props: [
      {
        name: "size",
        type: "'default' | 'sm' | 'lg'",
        description: "Input size",
      },
      {
        name: "type",
        type: "string",
        description: "HTML input type (text, email, password, etc.)",
      },
      {
        name: "aria-invalid",
        type: "boolean",
        description: "Shows error state styling",
      },
    ],
    tips: [
      "Wrap with Field component for label and error message support",
      "Use `type='search'` for search inputs with clear button styling",
      "Supports all native input attributes",
    ],
  },
  {
    id: "card",
    name: "Card",
    description:
      "A container component for grouping related content with header, panel, and footer areas.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "card" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "card" }),
      npm: getInstallCommand({ packageManager: "npm", component: "card" }),
      bun: getInstallCommand({ packageManager: "bun", component: "card" }),
    },
    example: (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardPanel>
          <p className="text-sm">Card content goes here.</p>
        </CardPanel>
      </Card>
    ),
    code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardPanel,
} from "@/registry/new-york/ui/card";

export function Demo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardPanel>
        <p className="text-sm">Card content goes here.</p>
      </CardPanel>
    </Card>
  );
}`,
    fullWidth: true,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes",
      },
    ],
    tips: [
      "Use CardHeader for title area with consistent padding",
      "CardPanel provides content area with proper spacing",
      "Combine with CardFooter for action buttons",
    ],
  },
  {
    id: "checkbox",
    name: "Checkbox",
    description:
      "A toggle input that can be checked, unchecked, or indeterminate.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "checkbox",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "checkbox",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "checkbox" }),
      bun: getInstallCommand({ packageManager: "bun", component: "checkbox" }),
    },
    example: <Checkbox />,
    code: `import { Checkbox } from "@/registry/new-york/ui/checkbox";

export function Demo() {
  return <Checkbox />;
}`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "Initial checked state (uncontrolled)",
      },
      {
        name: "indeterminate",
        type: "boolean",
        description: "Shows indeterminate/mixed state",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback when state changes",
      },
    ],
    tips: [
      "Pair with Label for accessible form controls",
      "Use indeterminate state for 'select all' when some items are selected",
      "Supports form validation with aria-invalid",
    ],
  },
  {
    id: "switch",
    name: "Switch",
    description: "A toggle switch for binary on/off settings.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "switch" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "switch" }),
      npm: getInstallCommand({ packageManager: "npm", component: "switch" }),
      bun: getInstallCommand({ packageManager: "bun", component: "switch" }),
    },
    example: <Switch />,
    code: `import { Switch } from "@/registry/new-york/ui/switch";

export function Demo() {
  return <Switch />;
}`,
    props: [
      {
        name: "checked",
        type: "boolean",
        description: "Controlled checked state",
      },
      {
        name: "defaultChecked",
        type: "boolean",
        description: "Initial checked state",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        description: "Callback when toggled",
      },
      {
        name: "disabled",
        type: "boolean",
        description: "Disables interaction",
      },
    ],
    tips: [
      "Best for instant-apply settings (no form submit needed)",
      "Use checkbox for forms that require explicit submit",
      "Accessible by default with proper ARIA attributes",
    ],
  },
  {
    id: "slider",
    name: "Slider",
    description:
      "A range input for selecting numeric values within a defined range.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "slider" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "slider" }),
      npm: getInstallCommand({ packageManager: "npm", component: "slider" }),
      bun: getInstallCommand({ packageManager: "bun", component: "slider" }),
    },
    example: <Slider className="w-32" />,
    code: `import { Slider } from "@/registry/new-york/ui/slider";

export function Demo() {
  return <Slider className="w-32" />;
}`,
    props: [
      {
        name: "value",
        type: "number | number[]",
        description: "Current value(s)",
      },
      {
        name: "defaultValue",
        type: "number | number[]",
        description: "Initial value(s)",
      },
      {
        name: "min",
        type: "number",
        description: "Minimum value (default: 0)",
      },
      {
        name: "max",
        type: "number",
        description: "Maximum value (default: 100)",
      },
      {
        name: "step",
        type: "number",
        description: "Step increment (default: 1)",
      },
    ],
    tips: [
      "Pass an array for range slider with multiple thumbs",
      "Use step={0.1} for decimal values",
      "Combine with number display for precise value feedback",
    ],
  },
  {
    id: "radio-group",
    name: "Radio Group",
    description:
      "A set of mutually exclusive radio buttons for single selection.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "radio-group",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "radio-group",
      }),
      npm: getInstallCommand({
        packageManager: "npm",
        component: "radio-group",
      }),
      bun: getInstallCommand({
        packageManager: "bun",
        component: "radio-group",
      }),
    },
    example: (
      <RadioGroup defaultValue="next">
        <Label>
          <Radio value="next" /> Next.js
        </Label>
        <Label>
          <Radio value="vite" /> Vite
        </Label>
        <Label>
          <Radio value="astro" /> Astro
        </Label>
      </RadioGroup>
    ),
    code: `import { Radio, RadioGroup } from "@/registry/new-york/ui/radio-group";
import { Label } from "@/registry/new-york/ui/label";

export function Demo() {
  return (
    <RadioGroup defaultValue="next">
      <Label><Radio value="next" /> Next.js</Label>
      <Label><Radio value="vite" /> Vite</Label>
      <Label><Radio value="astro" /> Astro</Label>
    </RadioGroup>
  );
}`,
    props: [
      {
        name: "value",
        type: "string",
        description: "Controlled selected value",
      },
      {
        name: "defaultValue",
        type: "string",
        description: "Initial selected value",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback when selection changes",
      },
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        description: "Layout direction",
      },
    ],
    tips: [
      "Wrap each Radio with Label for proper accessibility",
      "Use for single selection from a small set of options (2-5 items)",
      "For larger lists, consider Select or Combobox instead",
    ],
  },
  {
    id: "select",
    name: "Select",
    description: "A dropdown menu for selecting a single option from a list.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "select" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "select" }),
      npm: getInstallCommand({ packageManager: "npm", component: "select" }),
      bun: getInstallCommand({ packageManager: "bun", component: "select" }),
    },
    example: (
      <Select
        items={[
          { label: "Select framework", value: null },
          { label: "Next.js", value: "next" },
          { label: "Vite", value: "vite" },
          { label: "Astro", value: "astro" },
        ]}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectPopup>
          {[
            { label: "Select framework", value: null },
            { label: "Next.js", value: "next" },
            { label: "Vite", value: "vite" },
            { label: "Astro", value: "astro" },
          ].map((item) => (
            <SelectItem key={item.value} value={item}>
              {item.label}
            </SelectItem>
          ))}
        </SelectPopup>
      </Select>
    ),
    code: `import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
} from "@/registry/new-york/ui/select";

const items = [
  { label: "Select framework", value: null },
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
];

export function Demo() {
  return (
    <Select items={items}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectPopup>
        {items.map((item) => (
          <SelectItem key={item.value} value={item}>
            {item.label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}`,
    fullWidth: true,
    props: [
      { name: "value", type: "T", description: "Controlled selected value" },
      {
        name: "defaultValue",
        type: "T",
        description: "Initial selected value",
      },
      {
        name: "onValueChange",
        type: "(value: T) => void",
        description: "Callback when selection changes",
      },
      { name: "items", type: "T[]", description: "Array of selectable items" },
      {
        name: "size",
        type: "'sm' | 'default' | 'lg'",
        description: "Trigger size",
      },
    ],
    tips: [
      "Use items prop for type-safe item handling",
      "SelectValue auto-displays the selected item label",
      "For searchable selection, use Combobox instead",
    ],
  },
  {
    id: "textarea",
    name: "Textarea",
    description: "A multi-line text input with auto-sizing capabilities.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "textarea",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "textarea",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "textarea" }),
      bun: getInstallCommand({ packageManager: "bun", component: "textarea" }),
    },
    example: <Textarea />,
    code: `import { Textarea } from "@/registry/new-york/ui/textarea";

export function Demo() {
  return <Textarea placeholder="Enter your message..." />;
}`,
    fullWidth: true,
    props: [
      {
        name: "size",
        type: "'sm' | 'default' | 'lg' | number",
        description: "Sets min-height",
      },
      { name: "rows", type: "number", description: "Minimum visible rows" },
      { name: "placeholder", type: "string", description: "Placeholder text" },
    ],
    tips: [
      "Uses CSS field-sizing for automatic height adjustment",
      "Wrap with Field for label and validation messages",
      "Set explicit rows for fixed minimum height",
    ],
  },
  {
    id: "badge",
    name: "Badge",
    description: "A small label for status, categories, or counts.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "badge" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "badge" }),
      npm: getInstallCommand({ packageManager: "npm", component: "badge" }),
      bun: getInstallCommand({ packageManager: "bun", component: "badge" }),
    },
    example: (
      <div className="grid grid-cols-3 gap-2">
        <Badge>Badge</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="success">Success</Badge>
      </div>
    ),
    code: `import { Badge } from "@/registry/new-york/ui/badge";

export function Demo() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>
  );
}`,
    props: [
      {
        name: "variant",
        type: "'default' | 'outline' | 'secondary' | 'info' | 'success' | 'warning' | 'error'",
        description: "Visual style",
      },
      {
        name: "size",
        type: "'sm' | 'default' | 'lg'",
        description: "Badge size",
      },
      {
        name: "render",
        type: "ReactElement",
        description: "Render as different element",
      },
    ],
    tips: [
      "Use semantic variants (error, warning, success) for status indicators",
      "Can render as button or link with render prop",
      "Pairs well with icons for enhanced meaning",
    ],
  },
  {
    id: "avatar",
    name: "Avatar",
    description: "A circular user profile image with fallback support.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "avatar" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "avatar" }),
      npm: getInstallCommand({ packageManager: "npm", component: "avatar" }),
      bun: getInstallCommand({ packageManager: "bun", component: "avatar" }),
    },
    example: (
      <Avatar>
        <AvatarImage src="/placeholder-avatar.jpg" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    ),
    code: `import { Avatar, AvatarImage, AvatarFallback } from "@/registry/new-york/ui/avatar";

export function Demo() {
  return (
    <Avatar>
      <AvatarImage src="/avatar.jpg" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Additional CSS classes for sizing",
      },
    ],
    tips: [
      "Always include AvatarFallback for loading/error states",
      "Use initials (2 chars max) for fallback text",
      "Customize size with Tailwind classes (size-8, size-12, etc.)",
    ],
  },
  {
    id: "menu",
    name: "Menu",
    description: "A dropdown menu with items, groups, and submenus.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "menu" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "menu" }),
      npm: getInstallCommand({ packageManager: "npm", component: "menu" }),
      bun: getInstallCommand({ packageManager: "bun", component: "menu" }),
    },
    example: (
      <Menu>
        <MenuTrigger>Open</MenuTrigger>
        <MenuPopup align="start" sideOffset={4}>
          <MenuItem>Profile</MenuItem>
          <MenuSeparator />

          <MenuGroup>
            <MenuGroupLabel>Playback</MenuGroupLabel>
            <MenuItem>Play</MenuItem>
            <MenuItem>Pause</MenuItem>
          </MenuGroup>

          <MenuSeparator />

          <MenuCheckboxItem>Shuffle</MenuCheckboxItem>
          <MenuCheckboxItem>Repeat</MenuCheckboxItem>

          <MenuSeparator />

          <MenuGroup>
            <MenuGroupLabel>Sort by</MenuGroupLabel>
            <MenuRadioGroup>
              <MenuRadioItem value="artist">Artist</MenuRadioItem>
              <MenuRadioItem value="album">Album</MenuRadioItem>
              <MenuRadioItem value="title">Title</MenuRadioItem>
            </MenuRadioGroup>
          </MenuGroup>

          <MenuSeparator />

          <MenuSub>
            <MenuSubTrigger>Add to playlist</MenuSubTrigger>
            <MenuSubPopup>
              <MenuItem>Jazz</MenuItem>
              <MenuItem>Rock</MenuItem>
            </MenuSubPopup>
          </MenuSub>
        </MenuPopup>
      </Menu>
    ),
    code: `import {
  Menu,
  MenuTrigger,
  MenuPopup,
  MenuItem,
  MenuSeparator,
} from "@/registry/new-york/ui/menu";

export function Demo() {
  return (
    <Menu>
      <MenuTrigger>Open Menu</MenuTrigger>
      <MenuPopup>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuSeparator />
        <MenuItem>Logout</MenuItem>
      </MenuPopup>
    </Menu>
  );
}`,
    props: [
      {
        name: "align",
        type: "'start' | 'center' | 'end'",
        description: "Popup alignment",
      },
      {
        name: "sideOffset",
        type: "number",
        description: "Gap between trigger and popup",
      },
    ],
    tips: [
      "Use MenuGroup + MenuGroupLabel for organized sections",
      "MenuCheckboxItem maintains checked state automatically",
      "MenuSub enables nested submenus for complex hierarchies",
    ],
  },
  {
    id: "alert",
    name: "Alert",
    description: "A prominent message box for important notifications.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "alert" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "alert" }),
      npm: getInstallCommand({ packageManager: "npm", component: "alert" }),
      bun: getInstallCommand({ packageManager: "bun", component: "alert" }),
    },
    example: (
      <div className="flex flex-col gap-0.5 w-full">
        <Alert>
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>An alert message.</AlertDescription>
        </Alert>
        <Alert variant="info">
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>An informational message.</AlertDescription>
        </Alert>
        <Alert variant="error">
          <AlertCircle className="size-3.5" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
      </div>
    ),
    code: `import { Alert, AlertTitle, AlertDescription } from "@/registry/new-york/ui/alert";

export function Demo() {
  return (
    <Alert variant="info">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>This is an alert message.</AlertDescription>
    </Alert>
  );
}`,
    fullWidth: true,
    props: [
      {
        name: "variant",
        type: "'default' | 'info' | 'success' | 'warning' | 'error'",
        description: "Visual style",
      },
    ],
    tips: [
      "Add an icon as first child for visual emphasis",
      "Use AlertTitle and AlertDescription for structured content",
      "Semantic variants auto-apply appropriate colors",
    ],
  },
  {
    id: "tabs",
    name: "Tabs",
    description: "A tabbed interface for switching between content panels.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "tabs" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "tabs" }),
      npm: getInstallCommand({ packageManager: "npm", component: "tabs" }),
      bun: getInstallCommand({ packageManager: "bun", component: "tabs" }),
    },
    example: (
      <Tabs className="w-full" defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview content</TabsContent>
        <TabsContent value="features">Features content</TabsContent>
      </Tabs>
    ),
    code: `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/registry/new-york/ui/tabs";

export function Demo() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}`,
    fullWidth: true,
    props: [
      {
        name: "defaultValue",
        type: "string",
        description: "Initial active tab",
      },
      { name: "value", type: "string", description: "Controlled active tab" },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        description: "Callback when tab changes",
      },
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        description: "Tab layout direction",
      },
    ],
    tips: [
      "Use TabsList variant='underline' for minimal style",
      "TabsContent lazy-loads by default, only mounting when active",
      "Keyboard navigation built-in with arrow keys",
    ],
  },
  {
    id: "accordion",
    name: "Accordion",
    description: "Collapsible content sections for FAQ-style layouts.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "accordion",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "accordion",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "accordion" }),
      bun: getInstallCommand({ packageManager: "bun", component: "accordion" }),
    },
    example: (
      <Accordion className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What is Base UI?</AccordionTrigger>
          <AccordionContent>
            Base UI is a library of high-quality unstyled React components for
            design systems and web apps.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Can I use it for my project?</AccordionTrigger>
          <AccordionContent>
            Yes, you can use Base UI for your project. It is designed to be
            flexible and customizable.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
    code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/registry/new-york/ui/accordion";

export function Demo() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    fullWidth: true,
    props: [
      {
        name: "value",
        type: "string | string[]",
        description: "Controlled open panels",
      },
      {
        name: "defaultValue",
        type: "string | string[]",
        description: "Initially open panels",
      },
      {
        name: "multiple",
        type: "boolean",
        description: "Allow multiple panels open",
      },
    ],
    tips: [
      "Each AccordionItem needs a unique value prop",
      "Use multiple={true} to allow several open at once",
      "Content animates height automatically",
    ],
  },
  {
    id: "separator",
    name: "Separator",
    description: "A visual divider between content sections.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "separator",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "separator",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "separator" }),
      bun: getInstallCommand({ packageManager: "bun", component: "separator" }),
    },
    example: <Separator />,
    code: `import { Separator } from "@/registry/new-york/ui/separator";

export function Demo() {
  return <Separator />;
}`,
    fullWidth: true,
    props: [
      {
        name: "orientation",
        type: "'horizontal' | 'vertical'",
        description: "Divider direction",
      },
    ],
    tips: [
      "Use within flex containers for proper sizing",
      "Vertical separators need explicit height",
    ],
  },
  {
    id: "sheet",
    name: "Sheet",
    description: "A slide-out panel from screen edges for secondary content.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "sheet" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "sheet" }),
      npm: getInstallCommand({ packageManager: "npm", component: "sheet" }),
      bun: getInstallCommand({ packageManager: "bun", component: "sheet" }),
    },
    example: (
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetPopup>
          <SheetHeader>
            <SheetTitle>Sheet title</SheetTitle>
            <SheetDescription>Sheet description</SheetDescription>
          </SheetHeader>
          <div className="px-3">Content goes here</div>
        </SheetPopup>
      </Sheet>
    ),
    code: `import {
  Sheet,
  SheetTrigger,
  SheetPopup,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/registry/new-york/ui/sheet";

export function Demo() {
  return (
    <Sheet>
      <SheetTrigger>Open Sheet</SheetTrigger>
      <SheetPopup>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>Sheet description</SheetDescription>
        </SheetHeader>
        <div className="p-4">Content</div>
      </SheetPopup>
    </Sheet>
  );
}`,
    props: [
      {
        name: "side",
        type: "'top' | 'right' | 'bottom' | 'left'",
        description: "Edge to slide from",
      },
      {
        name: "showCloseButton",
        type: "boolean",
        description: "Show X close button",
      },
    ],
    tips: [
      "Default side is 'right', use 'left' for mobile nav patterns",
      "Bottom sheets work great for mobile action menus",
      "Use SheetHeader/SheetFooter for consistent layout",
    ],
  },
  {
    id: "progress",
    name: "Progress",
    description: "A horizontal bar showing completion percentage.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "progress",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "progress",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "progress" }),
      bun: getInstallCommand({ packageManager: "bun", component: "progress" }),
    },
    example: <Progress value={33} />,
    code: `import { Progress } from "@/registry/new-york/ui/progress";

export function Demo() {
  return <Progress value={33} />;
}`,
    fullWidth: true,
    props: [
      {
        name: "value",
        type: "number",
        description: "Completion percentage (0-100)",
      },
      {
        name: "max",
        type: "number",
        description: "Maximum value (default: 100)",
      },
    ],
    tips: [
      "Use for file uploads, form progress, or loading states",
      "Combine with text label showing percentage",
      "Indeterminate state available when value is undefined",
    ],
  },
  {
    id: "skeleton",
    name: "Skeleton",
    description: "A placeholder animation while content loads.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "skeleton",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "skeleton",
      }),
      npm: getInstallCommand({ packageManager: "npm", component: "skeleton" }),
      bun: getInstallCommand({ packageManager: "bun", component: "skeleton" }),
    },
    example: <Skeleton className="w-32 h-4" />,
    code: `import { Skeleton } from "@/registry/new-york/ui/skeleton";

export function Demo() {
  return <Skeleton className="w-32 h-4" />;
}`,
    props: [
      {
        name: "className",
        type: "string",
        description: "Width and height classes",
      },
    ],
    tips: [
      "Match skeleton dimensions to expected content size",
      "Use rounded-full for avatar placeholders",
      "Group multiple skeletons for complex layouts",
    ],
  },
  {
    id: "number-field",
    name: "Number field",
    description: "A numeric input with increment/decrement buttons.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "number-field",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "number-field",
      }),
      npm: getInstallCommand({
        packageManager: "npm",
        component: "number-field",
      }),
      bun: getInstallCommand({
        packageManager: "bun",
        component: "number-field",
      }),
    },
    example: (
      <NumberField>
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </NumberField>
    ),
    code: `import {
  NumberField,
  NumberFieldGroup,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
} from "@/registry/new-york/ui/number-field";

export function Demo() {
  return (
    <NumberField>
      <NumberFieldGroup>
        <NumberFieldDecrement />
        <NumberFieldInput />
        <NumberFieldIncrement />
      </NumberFieldGroup>
    </NumberField>
  );
}`,
    props: [
      { name: "value", type: "number", description: "Controlled value" },
      { name: "defaultValue", type: "number", description: "Initial value" },
      { name: "min", type: "number", description: "Minimum allowed value" },
      { name: "max", type: "number", description: "Maximum allowed value" },
      { name: "step", type: "number", description: "Increment amount" },
      {
        name: "size",
        type: "'sm' | 'default' | 'lg'",
        description: "Field size",
      },
    ],
    tips: [
      "Supports keyboard increment with arrow keys",
      "Use NumberFieldScrubArea for drag-to-adjust",
      "Validates input to only allow numeric values",
    ],
  },
  {
    id: "preview-card",
    name: "Preview card",
    description: "A hover-triggered card showing preview content for links.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "preview-card",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "preview-card",
      }),
      npm: getInstallCommand({
        packageManager: "npm",
        component: "preview-card",
      }),
      bun: getInstallCommand({
        packageManager: "bun",
        component: "preview-card",
      }),
    },
    example: (
      <PreviewCard>
        <PreviewCardTrigger>Hover me</PreviewCardTrigger>
        <PreviewCardPopup>
          This is a preview card popup with additional information.
        </PreviewCardPopup>
      </PreviewCard>
    ),
    code: `import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPopup,
} from "@/registry/new-york/ui/preview-card";

export function Demo() {
  return (
    <PreviewCard>
      <PreviewCardTrigger>Hover me</PreviewCardTrigger>
      <PreviewCardPopup>Preview content</PreviewCardPopup>
    </PreviewCard>
  );
}`,
    props: [
      {
        name: "delay",
        type: "number",
        description: "Hover delay in ms (default: 600)",
      },
    ],
    tips: [
      "Great for link previews like Wikipedia-style hover cards",
      "Trigger content is rendered as a link by default",
      "Use for progressive disclosure of additional info",
    ],
  },
  {
    id: "popover",
    name: "Popover",
    description: "A floating panel triggered by click with any content.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "popover" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "popover" }),
      npm: getInstallCommand({ packageManager: "npm", component: "popover" }),
      bun: getInstallCommand({ packageManager: "bun", component: "popover" }),
    },
    example: (
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverPopup>
          <PopoverTitle>Title</PopoverTitle>
          <PopoverDescription>Description here</PopoverDescription>
        </PopoverPopup>
      </Popover>
    ),
    code: `import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
} from "@/registry/new-york/ui/popover";

export function Demo() {
  return (
    <Popover>
      <PopoverTrigger>Open Popover</PopoverTrigger>
      <PopoverPopup>
        <PopoverTitle>Popover Title</PopoverTitle>
        <PopoverDescription>Popover content</PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}`,
    props: [
      { name: "sideOffset", type: "number", description: "Gap from trigger" },
      {
        name: "align",
        type: "'start' | 'center' | 'end'",
        description: "Alignment",
      },
    ],
    tips: [
      "Use for forms, filters, or detailed information",
      "Closes on outside click by default",
      "Different from Tooltip: click-triggered, richer content",
    ],
  },
  {
    id: "dialog",
    name: "Dialog",
    description: "A modal overlay for focused user interactions.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "dialog" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "dialog" }),
      npm: getInstallCommand({ packageManager: "npm", component: "dialog" }),
      bun: getInstallCommand({ packageManager: "bun", component: "dialog" }),
    },
    example: (
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogPopup>
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog description</DialogDescription>
          </DialogHeader>
          <div className="p-4">Dialog content</div>
          <DialogFooter>Footer content</DialogFooter>
        </DialogPopup>
      </Dialog>
    ),
    code: `import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/registry/new-york/ui/dialog";

export function Demo() {
  return (
    <Dialog>
      <DialogTrigger>Open Dialog</DialogTrigger>
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
        </DialogHeader>
        <div className="p-4">Content</div>
        <DialogFooter>Footer</DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}`,
    props: [
      {
        name: "showCloseButton",
        type: "boolean",
        description: "Show X close button",
      },
      { name: "open", type: "boolean", description: "Controlled open state" },
      {
        name: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Open state callback",
      },
    ],
    tips: [
      "Use DialogHeader/Footer for consistent layout",
      "Focus is trapped inside the dialog automatically",
      "Supports nested dialogs with visual stacking",
    ],
  },
  {
    id: "alert-dialog",
    name: "Alert dialog",
    description: "A confirmation modal requiring explicit user action.",
    commands: {
      pnpm: getInstallCommand({
        packageManager: "pnpm",
        component: "alert-dialog",
      }),
      yarn: getInstallCommand({
        packageManager: "yarn",
        component: "alert-dialog",
      }),
      npm: getInstallCommand({
        packageManager: "npm",
        component: "alert-dialog",
      }),
      bun: getInstallCommand({
        packageManager: "bun",
        component: "alert-dialog",
      }),
    },
    example: (
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogClose>Cancel</AlertDialogClose>
            <AlertDialogClose>Confirm</AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    ),
    code: `import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogClose,
} from "@/registry/new-york/ui/alert-dialog";

export function Demo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>Delete</AlertDialogTrigger>
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogClose>Cancel</AlertDialogClose>
          <AlertDialogClose>Confirm</AlertDialogClose>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}`,
    props: [
      { name: "open", type: "boolean", description: "Controlled open state" },
    ],
    tips: [
      "Cannot be dismissed by clicking outside (unlike Dialog)",
      "Use for destructive actions requiring confirmation",
      "AlertDialogClose auto-closes the dialog on click",
    ],
  },
  {
    id: "tooltip",
    name: "Tooltip",
    description: "A brief hover-triggered hint with minimal content.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "tooltip" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "tooltip" }),
      npm: getInstallCommand({ packageManager: "npm", component: "tooltip" }),
      bun: getInstallCommand({ packageManager: "bun", component: "tooltip" }),
    },
    example: (
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipPopup>Helpful tip text</TooltipPopup>
      </Tooltip>
    ),
    code: `import {
  Tooltip,
  TooltipTrigger,
  TooltipPopup,
} from "@/registry/new-york/ui/tooltip";

export function Demo() {
  return (
    <Tooltip>
      <TooltipTrigger>Hover me</TooltipTrigger>
      <TooltipPopup>Tooltip content</TooltipPopup>
    </Tooltip>
  );
}`,
    props: [
      { name: "delay", type: "number", description: "Show delay in ms" },
      {
        name: "side",
        type: "'top' | 'right' | 'bottom' | 'left'",
        description: "Popup position",
      },
    ],
    tips: [
      "Keep content short (1-2 lines max)",
      "For icons, provides essential context",
      "Don't put interactive elements inside tooltips",
    ],
  },
  {
    id: "toggle",
    name: "Toggle",
    description: "A pressed/unpressed button for binary states.",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "toggle" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "toggle" }),
      npm: getInstallCommand({ packageManager: "npm", component: "toggle" }),
      bun: getInstallCommand({ packageManager: "bun", component: "toggle" }),
    },
    example: <Toggle>B</Toggle>,
    code: `import { Toggle } from "@/registry/new-york/ui/toggle";

export function Demo() {
  return <Toggle>B</Toggle>;
}`,
    props: [
      {
        name: "pressed",
        type: "boolean",
        description: "Controlled pressed state",
      },
      {
        name: "defaultPressed",
        type: "boolean",
        description: "Initial pressed state",
      },
      {
        name: "variant",
        type: "'default' | 'outline'",
        description: "Visual style",
      },
      {
        name: "size",
        type: "'sm' | 'default' | 'lg' | 'icon'",
        description: "Button size",
      },
    ],
    tips: [
      "Great for text formatting (bold, italic, etc.)",
      "Use Toggle.Group for exclusive selection",
      "Visual feedback on pressed state is automatic",
    ],
  },
  {
    id: "meter",
    name: "Meter",
    description:
      "A gauge showing a value within a known range (e.g., disk usage).",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "meter" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "meter" }),
      npm: getInstallCommand({ packageManager: "npm", component: "meter" }),
      bun: getInstallCommand({ packageManager: "bun", component: "meter" }),
    },
    example: <Meter value={30} />,
    code: `import { Meter } from "@/registry/new-york/ui/meter";

export function Demo() {
  return <Meter value={30} />;
}`,
    fullWidth: true,
    props: [
      { name: "value", type: "number", description: "Current value" },
      {
        name: "min",
        type: "number",
        description: "Minimum value (default: 0)",
      },
      {
        name: "max",
        type: "number",
        description: "Maximum value (default: 100)",
      },
      { name: "low", type: "number", description: "Low range threshold" },
      { name: "high", type: "number", description: "High range threshold" },
      { name: "optimum", type: "number", description: "Optimal value" },
    ],
    tips: [
      "Different from Progress: shows static measurement, not completion",
      "Use for disk space, battery level, ratings",
      "Color changes based on low/high/optimum thresholds",
    ],
  },
];
