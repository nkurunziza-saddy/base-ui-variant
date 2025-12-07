import { ComponentPage } from "@/components/component-page";
import { IntroductionPage } from "@/components/intro";
import { QuickStartPage } from "@/components/quickstart";
import { ThemingPage } from "@/components/theming";
import { APP_NAME } from "@/lib/configs";
import { COMPONENTS } from "@/lib/constants/components";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const GS_PAGES = [
  { id: "introduction", title: "Introduction" },
  { id: "quick-start", title: "Quick Start" },
  { id: "theming", title: "Theming" },
] as const;

export function generateStaticParams() {
  const componentParams = COMPONENTS.map((c) => ({ id: c.id }));
  const staticParams = GS_PAGES.map((p) => ({ id: p.id }));
  return [...staticParams, ...componentParams];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;

  const staticPage = GS_PAGES.find((p) => p.id === id);
  if (staticPage) {
    return {
      title: `${staticPage.title} - ${APP_NAME}`,
    };
  }

  const component = COMPONENTS.find((c) => c.id === id);
  if (component) {
    return {
      title: `${component.name} - ${APP_NAME}`,
      description: component.description,
    };
  }

  return {
    title: `Not Found - ${APP_NAME}`,
  };
}

export default async function page({ params }: PageProps) {
  const { id } = await params;

  if (id === "introduction") return <IntroductionPage />;
  if (id === "quick-start") return <QuickStartPage />;
  if (id === "theming") return <ThemingPage />;
  const selectedComponent = COMPONENTS.find((c) => c.id === id);
  if (selectedComponent) {
    return <ComponentPage component={selectedComponent} />;
  }

  notFound();
}
