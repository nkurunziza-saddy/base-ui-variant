import { NextRequest, NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";
import { codeToHtml } from "shiki";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const componentId = searchParams.get("id");

  if (!componentId) {
    return NextResponse.json(
      { error: "Missing component id" },
      { status: 400 }
    );
  }

  const sanitizedId = componentId.replace(/[^a-zA-Z0-9-]/g, "");

  try {
    const filePath = path.join(
      process.cwd(),
      "registry",
      "new-york",
      "ui",
      sanitizedId,
      "index.tsx"
    );

    const source = await readFile(filePath, "utf-8");
    const highlighted = await codeToHtml(source, {
      lang: "tsx",
      theme: "github-dark-default",
    });

    return NextResponse.json({
      source,
      highlighted,
    });
  } catch (error) {
    return NextResponse.json({ error: "Component not found" }, { status: 404 });
  }
}
