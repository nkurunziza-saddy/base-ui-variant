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
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "button" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "button" }),
      npm: getInstallCommand({ packageManager: "npm", component: "button" }),
      bun: getInstallCommand({ packageManager: "bun", component: "button" }),
    },
    example: <Button>Click me</Button>,
  },
  {
    id: "input",
    name: "Input",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "input" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "input" }),
      npm: getInstallCommand({ packageManager: "npm", component: "input" }),
      bun: getInstallCommand({ packageManager: "bun", component: "input" }),
    },
    example: <Input placeholder="Enter text..." />,
  },
  {
    id: "card",
    name: "Card",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "card" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "card" }),
      npm: getInstallCommand({ packageManager: "npm", component: "card" }),
      bun: getInstallCommand({ packageManager: "bun", component: "card" }),
    },
    example: (
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardPanel>
            <p className="text-sm">Card content goes here.</p>
          </CardPanel>
        </Card>
      </div>
    ),
  },
  {
    id: "checkbox",
    name: "Checkbox",
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
  },
  {
    id: "switch",
    name: "Switch",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "switch" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "switch" }),
      npm: getInstallCommand({ packageManager: "npm", component: "switch" }),
      bun: getInstallCommand({ packageManager: "bun", component: "switch" }),
    },
    example: <Switch />,
  },
  {
    id: "slider",
    name: "Slider",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "slider" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "slider" }),
      npm: getInstallCommand({ packageManager: "npm", component: "slider" }),
      bun: getInstallCommand({ packageManager: "bun", component: "slider" }),
    },
    example: <Slider className="w-32" />,
  },
  {
    id: "radio-group",
    name: "Radio Group",
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
  },
  {
    id: "select",
    name: "Select",
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
  },
  {
    id: "textarea",
    name: "Textarea",
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
  },
  {
    id: "badge",
    name: "Badge",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "badge" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "badge" }),
      npm: getInstallCommand({ packageManager: "npm", component: "badge" }),
      bun: getInstallCommand({ packageManager: "bun", component: "badge" }),
    },
    example: (
      <div className="grid grid-cols-3 gap-2">
        <Badge>Badge</Badge>
        <Badge variant={"warning"}>Warning</Badge>
        <Badge variant={"error"}>Error</Badge>
        <Badge variant={"info"}>Info</Badge>
        <Badge variant={"secondary"}>Secondary</Badge>
        <Badge variant={"success"}>Success</Badge>
      </div>
    ),
  },
  {
    id: "avatar",
    name: "Avatar",
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
  },
  {
    id: "menu",
    name: "Menu",
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
              <MenuRadioItem value={"artist"}>Artist</MenuRadioItem>
              <MenuRadioItem value={"album"}>Album</MenuRadioItem>
              <MenuRadioItem value={"title"}>Title</MenuRadioItem>
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
  },
  {
    id: "alert",
    name: "Alert",
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
        <Alert variant={"info"}>
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>An alert message.</AlertDescription>
        </Alert>
        <Alert variant={"error"}>
          <AlertCircle className="size-3.5" />
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>An alert message.</AlertDescription>
        </Alert>
      </div>
    ),
  },
  {
    id: "tabs",
    name: "Tabs",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "tabs" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "tabs" }),
      npm: getInstallCommand({ packageManager: "npm", component: "tabs" }),
      bun: getInstallCommand({ packageManager: "bun", component: "tabs" }),
    },
    example: (
      <Tabs className={"w-full"} defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="features">Features</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">Overview content</TabsContent>
        <TabsContent value="features">Features content</TabsContent>
      </Tabs>
    ),
  },
  {
    id: "accordion",
    name: "Accordion",
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
      <Accordion className={"w-full"}>
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
  },
  {
    id: "separator",
    name: "Separator",
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
  },
  {
    id: "sheet",
    name: "Sheet",
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
            <SheetDescription>Sheet title</SheetDescription>
          </SheetHeader>
          <div className="px-3">Some content</div>
        </SheetPopup>
      </Sheet>
    ),
  },
  {
    id: "progress",
    name: "Progress",
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
  },
  {
    id: "skeleton",
    name: "Skeleton",
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
  },
  {
    id: "number-field",
    name: "Number field",
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
  },
  {
    id: "preview-card",
    name: "Preview card",
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
        <PreviewCardTrigger>Open</PreviewCardTrigger>
        <PreviewCardPopup>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. A molestiae
          alias blanditiis perspiciatis saepe non vel voluptas fuga.
        </PreviewCardPopup>
      </PreviewCard>
    ),
  },
  {
    id: "popover",
    name: "Popover",
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
          <PopoverDescription>Description</PopoverDescription>
          Lorem, ipsum dolor sit amet.
        </PopoverPopup>
      </Popover>
    ),
  },
  {
    id: "dialog",
    name: "Dialog",
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
            <DialogTitle>Title</DialogTitle>
            <DialogDescription>Description</DialogDescription>
          </DialogHeader>
          Lorem, ipsum dolor sit amet.
          <DialogFooter>This is footer</DialogFooter>
        </DialogPopup>
      </Dialog>
    ),
  },
  {
    id: "alert-dialog",
    name: "Alert dialog",
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
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogPopup>
          <AlertDialogHeader>
            <AlertDialogTitle>Title</AlertDialogTitle>
            <AlertDialogDescription>Description</AlertDialogDescription>
          </AlertDialogHeader>
          Lorem, ipsum dolor sit amet.
          <AlertDialogFooter>
            <AlertDialogClose>Action</AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialog>
    ),
  },
  {
    id: "tooltip",
    name: "Tooltip",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "tooltip" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "tooltip" }),
      npm: getInstallCommand({ packageManager: "npm", component: "tooltip" }),
      bun: getInstallCommand({ packageManager: "bun", component: "tooltip" }),
    },
    example: (
      <Tooltip>
        <TooltipTrigger>Open</TooltipTrigger>
        <TooltipPopup>Tooltip</TooltipPopup>
      </Tooltip>
    ),
  },
  {
    id: "toggle",
    name: "Toggle",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "toggle" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "toggle" }),
      npm: getInstallCommand({ packageManager: "npm", component: "toggle" }),
      bun: getInstallCommand({ packageManager: "bun", component: "toggle" }),
    },
    example: <Toggle>B</Toggle>,
  },
  {
    id: "meter",
    name: "Meter",
    commands: {
      pnpm: getInstallCommand({ packageManager: "pnpm", component: "meter" }),
      yarn: getInstallCommand({ packageManager: "yarn", component: "meter" }),
      npm: getInstallCommand({ packageManager: "npm", component: "meter" }),
      bun: getInstallCommand({ packageManager: "bun", component: "meter" }),
    },
    example: <Meter value={30} />,
  },
];
