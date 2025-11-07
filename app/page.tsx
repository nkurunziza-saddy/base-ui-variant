"use client";

import { BorderSeparator } from "@/components/ui/border-separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardPanel,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { RadioGroup, Radio } from "@/components/ui/radio-group";
import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";
import { ComponentCard } from "./component-card";
import { Label } from "@/components/ui/label";
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
} from "@/components/ui/menu";

export default function Home() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  const handleSliderChange = (value: number | readonly number[]) => {
    setSliderValue(Array.isArray(value) ? value : [value]);
  };

  const components = [
    {
      id: "button",
      name: "Button",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/button",
        yarn: "yarn dlx shadcn@latest add @coss/button",
        npm: "npx shadcn@latest add @coss/button",
        bun: "bun dlx shadcn@latest add @coss/button",
      },
      example: <Button>Click me</Button>,
    },
    {
      id: "input",
      name: "Input",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/input",
        yarn: "yarn dlx shadcn@latest add @coss/input",
        npm: "npx shadcn@latest add @coss/input",
        bun: "bun dlx shadcn@latest add @coss/input",
      },
      example: <Input placeholder="Enter text..." />,
    },
    {
      id: "card",
      name: "Card",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/card",
        yarn: "yarn dlx shadcn@latest add @coss/card",
        npm: "npx shadcn@latest add @coss/card",
        bun: "bun dlx shadcn@latest add @coss/card",
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
    },
    {
      id: "checkbox",
      name: "Checkbox",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/checkbox",
        yarn: "yarn dlx shadcn@latest add @coss/checkbox",
        npm: "npx shadcn@latest add @coss/checkbox",
        bun: "bun dlx shadcn@latest add @coss/checkbox",
      },
      example: (
        <Checkbox checked={checkboxValue} onCheckedChange={setCheckboxValue} />
      ),
    },
    {
      id: "switch",
      name: "Switch",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/switch",
        yarn: "yarn dlx shadcn@latest add @coss/switch",
        npm: "npx shadcn@latest add @coss/switch",
        bun: "bun dlx shadcn@latest add @coss/switch",
      },
      example: (
        <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
      ),
    },
    {
      id: "slider",
      name: "Slider",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/slider",
        yarn: "yarn dlx shadcn@latest add @coss/slider",
        npm: "npx shadcn@latest add @coss/slider",
        bun: "bun dlx shadcn@latest add @coss/slider",
      },
      example: (
        <Slider
          value={sliderValue}
          onValueChange={handleSliderChange}
          className="w-32"
        />
      ),
    },
    {
      id: "radio-group",
      name: "Radio Group",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/radio-group",
        yarn: "yarn dlx shadcn@latest add @coss/radio-group",
        npm: "npx shadcn@latest add @coss/radio-group",
        bun: "bun dlx shadcn@latest add @cos/radio-group",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/select",
        yarn: "yarn dlx shadcn@latest add @coss/select",
        npm: "npx shadcn@latest add @coss/select",
        bun: "bun dlx shadcn@latest add @coss/select",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/textarea",
        yarn: "yarn dlx shadcn@latest add @coss/textarea",
        npm: "npx shadcn@latest add @coss/textarea",
        bun: "bun dlx shadcn@latest add @coss/textarea",
      },
      example: <Textarea />,
    },
    {
      id: "badge",
      name: "Badge",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/badge",
        yarn: "yarn dlx shadcn@latest add @coss/badge",
        npm: "npx shadcn@latest add @coss/badge",
        bun: "bun dlx shadcn@latest add @coss/badge",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/avatar",
        yarn: "yarn dlx shadcn@latest add @coss/avatar",
        npm: "npx shadcn@latest add @coss/avatar",
        bun: "bun dlx shadcn@latest add @coss/avatar",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/menu",
        yarn: "yarn dlx shadcn@latest add @coss/menu",
        npm: "npx shadcn@latest add @coss/menu",
        bun: "bun dlx shadcn@latest add @coss/menu",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/alert",
        yarn: "yarn dlx shadcn@latest add @coss/alert",
        npm: "npx shadcn@latest add @coss/alert",
        bun: "bun dlx shadcn@latest add @coss/alert",
      },
      example: (
        <Alert>
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>An alert message.</AlertDescription>
        </Alert>
      ),
    },
    {
      id: "tabs",
      name: "Tabs",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/tabs",
        yarn: "yarn dlx shadcn@latest add @coss/tabs",
        npm: "npx shadcn@latest add @coss/tabs",
        bun: "bun dlx shadcn@latest add @coss/tabs",
      },
      example: (
        <Tabs defaultValue="overview" className={"w-full"}>
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
        pnpm: "pnpm dlx shadcn@latest add @coss/accordion",
        yarn: "yarn dlx shadcn@latest add @coss/accordion",
        npm: "npx shadcn@latest add @coss/accordion",
        bun: "bun dlx shadcn@latest add @coss/accordion",
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
        pnpm: "pnpm dlx shadcn@latest add @coss/separator",
        yarn: "yarn dlx shadcn@latest add @coss/separator",
        npm: "npx shadcn@latest add @coss/separator",
        bun: "bun dlx shadcn@latest add @coss/separator",
      },
      example: <Separator />,
    },
    {
      id: "progress",
      name: "Progress",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/progress",
        yarn: "yarn dlx shadcn@latest add @coss/progress",
        npm: "npx shadcn@latest add @coss/progress",
        bun: "bun dlx shadcn@latest add @coss/progress",
      },
      example: <Progress value={33} />,
    },
    {
      id: "skeleton",
      name: "Skeleton",
      commands: {
        pnpm: "pnpm dlx shadcn@latest add @coss/skeleton",
        yarn: "yarn dlx shadcn@latest add @coss/skeleton",
        npm: "npx shadcn@latest add @coss/skeleton",
        bun: "bun dlx shadcn@latest add @coss/skeleton",
      },
      example: <Skeleton className="w-32 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="cpx space-y-2 py-5">
        <h1 className="font-bold font-heading text-4xl">
          Minimalist Components
        </h1>
        <p className="text-muted-foreground text-sm">
          Clean, minimalist UI components built with Base UI and styled with
          Tailwind CSS.
        </p>
      </div>
      <BorderSeparator />
      <div className="cpx grid grid-cols-1 gap-6 items-start py-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            name={component.name}
            commands={component.commands}
            example={component.example}
          />
        ))}
      </div>
      <BorderSeparator />
    </div>
  );
}
