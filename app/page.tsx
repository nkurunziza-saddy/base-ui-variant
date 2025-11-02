"use client";

import { BorderSeparator } from "@/components/ui/border-separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
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
  SelectContent,
  SelectItem,
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

export default function Home() {
  const [sliderValue, setSliderValue] = useState([50]);
  const [radioValue, setRadioValue] = useState("option1");
  const [selectValue, setSelectValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);

  const handleSliderChange = (value: number | readonly number[]) => {
    setSliderValue(Array.isArray(value) ? value : [value]);
  };

  const handleRadioChange = (value: unknown) => {
    setRadioValue(value as string);
  };

  const components = [
    {
      id: "button",
      name: "Button",
      command: "pnpm dlx shadcn@latest add @coss/button",
      example: <Button>Click me</Button>,
    },
    {
      id: "input",
      name: "Input",
      command: "pnpm dlx shadcn@latest add @coss/input",
      example: <Input placeholder="Enter text..." />,
    },
    {
      id: "card",
      name: "Card",
      command: "pnpm dlx shadcn@latest add @coss/card",
      example: (
        <Card className="w-48">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">Card content goes here.</p>
          </CardContent>
        </Card>
      ),
    },
    {
      id: "checkbox",
      name: "Checkbox",
      command: "pnpm dlx shadcn@latest add @coss/checkbox",
      example: (
        <Checkbox checked={checkboxValue} onCheckedChange={setCheckboxValue} />
      ),
    },
    {
      id: "switch",
      name: "Switch",
      command: "pnpm dlx shadcn@latest add @coss/switch",
      example: (
        <Switch checked={switchValue} onCheckedChange={setSwitchValue} />
      ),
    },
    {
      id: "slider",
      name: "Slider",
      command: "pnpm dlx shadcn@latest add @coss/slider",
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
      command: "pnpm dlx shadcn@latest add @coss/radio-group",
      example: (
        <RadioGroup value={radioValue} onValueChange={handleRadioChange}>
          <div className="flex items-center space-x-2">
            <Radio value="option1" id="r1" />
            <label htmlFor="r1">Option 1</label>
          </div>
        </RadioGroup>
      ),
    },
    {
      id: "select",
      name: "Select",
      command: "pnpm dlx shadcn@latest add @coss/select",
      example: (
        <Select value={selectValue} onValueChange={setSelectValue}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      ),
    },
    {
      id: "textarea",
      name: "Textarea",
      command: "pnpm dlx shadcn@latest add @coss/textarea",
      example: <Textarea className="w-32 h-20" />,
    },
    {
      id: "badge",
      name: "Badge",
      command: "pnpm dlx shadcn@latest add @coss/badge",
      example: <Badge>Badge</Badge>,
    },
    {
      id: "avatar",
      name: "Avatar",
      command: "pnpm dlx shadcn@latest add @coss/avatar",
      example: (
        <Avatar>
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      ),
    },
    {
      id: "alert",
      name: "Alert",
      command: "pnpm dlx shadcn@latest add @coss/alert",
      example: (
        <Alert className="w-48">
          <AlertTitle>Alert</AlertTitle>
          <AlertDescription>This is an alert message.</AlertDescription>
        </Alert>
      ),
    },
    {
      id: "tabs",
      name: "Tabs",
      command: "pnpm dlx shadcn@latest add @coss/tabs",
      example: (
        <Tabs defaultValue="tab1" className="w-48">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">Content 1</TabsContent>
          <TabsContent value="tab2">Content 2</TabsContent>
        </Tabs>
      ),
    },
    {
      id: "accordion",
      name: "Accordion",
      command: "pnpm dlx shadcn@latest add @coss/accordion",
      example: (
        <Accordion className="w-48">
          <AccordionItem value="item-1">
            <AccordionTrigger>Item 1</AccordionTrigger>
            <AccordionContent>Content 1</AccordionContent>
          </AccordionItem>
        </Accordion>
      ),
    },
    {
      id: "separator",
      name: "Separator",
      command: "pnpm dlx shadcn@latest add @coss/separator",
      example: <Separator className="w-32" />,
    },
    {
      id: "progress",
      name: "Progress",
      command: "pnpm dlx shadcn@latest add @coss/progress",
      example: <Progress value={33} className="w-32" />,
    },
    {
      id: "skeleton",
      name: "Skeleton",
      command: "pnpm dlx shadcn@latest add @coss/skeleton",
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
      <div className="cpx grid grid-cols-1 gap-6 py-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {components.map((component) => (
          <ComponentCard
            key={component.id}
            name={component.name}
            command={component.command}
            example={component.example}
          />
        ))}
      </div>
      <BorderSeparator />
    </div>
  );
}

function ComponentCard({
  name,
  command,
  example,
}: {
  name: string;
  command: string;
  example: React.ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  const copyCommand = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy command:", err);
    }
  };

  return (
    <div className="relative flex flex-col gap-3 rounded border border-border bg-background p-4 transition-colors duration-150 hover:border-ring">
      <div className="flex items-center justify-between mb-1">
        <span className="truncate text-sm font-medium">{name}</span>
        <button
          type="button"
          onClick={copyCommand}
          className="ml-2 rounded p-1 hover:bg-muted focus-visible:ring-1 focus-visible:ring-ring transition"
          aria-label="Copy install command"
        >
          {copied ? (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Copied</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Copy command</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="rounded bg-muted/30 border p-4 flex items-center justify-center min-h-[80px]">
        {example}
      </div>
      <div>
        <span className="mb-1 block text-xs text-muted-foreground">
          Install:
        </span>
        <code className="block w-full rounded bg-muted border px-2 py-1 font-mono text-xs text-muted-foreground break-all">
          {command}
        </code>
      </div>
    </div>
  );
}
