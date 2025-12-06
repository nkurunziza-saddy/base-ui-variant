import fs from "fs";
import path from "path";
import { glob } from "glob";
import { APP_NAME, APP_URL } from "@/lib/configs";

interface RegistryFile {
  path: string;
  type: string;
  target?: string;
  content?: string;
}

interface RegistryItem {
  $schema?: string;
  name: string;
  type: string;
  title?: string;
  description?: string;
  dependencies?: string[];
  devDependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
  tailwind?: {
    config: any;
  };
  cssVars?: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  css?: string;
  docs?: string;
  meta?: Record<string, any>;
  [key: string]: any;
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  items: RegistryItem[];
}

async function buildRegistry() {
  console.log("🔨 Building registry...\n");

  const registryDir = path.join(process.cwd(), "registry/new-york");

  const itemFiles = await glob("**/index.json", {
    cwd: registryDir,
    absolute: true,
    ignore: ["**/node_modules/**"],
  });

  console.log(`📦 Found ${itemFiles.length} component definitions\n`);

  const items: RegistryItem[] = [];
  const errors: string[] = [];

  for (const itemFile of itemFiles) {
    try {
      const content = fs.readFileSync(itemFile, "utf-8");
      const item: RegistryItem = JSON.parse(content);

      if (!item.name) {
        errors.push(`${itemFile}: missing 'name' field`);
        continue;
      }

      if (!item.type) {
        errors.push(`${itemFile}: missing 'type' field`);
        continue;
      }

      if (!item.files || item.files.length === 0) {
        errors.push(`${itemFile}: missing or empty 'files' array`);
        continue;
      }

      for (const file of item.files) {
        const filePath = path.join(process.cwd(), file.path);
        if (!fs.existsSync(filePath)) {
          errors.push(`${item.name}: file not found: ${file.path}`);
        }
      }

      items.push(item);
      console.log(`  ✅ ${item.name} (${item.type})`);

      if (item.registryDependencies && item.registryDependencies.length > 0) {
        console.log(
          `     └─ Depends on: ${item.registryDependencies.join(", ")}`
        );
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : String(error);
      errors.push(`${itemFile}: ${errorMsg}`);
      console.error(`  ❌ Failed to process: ${itemFile}`);
      console.error(`     Error: ${errorMsg}`);
    }
  }

  if (errors.length > 0) {
    console.error(`\n❌ Found ${errors.length} error(s):\n`);
    errors.forEach((err) => console.error(`   - ${err}`));
    process.exit(1);
  }

  items.sort((a, b) => a.name.localeCompare(b.name));

  const registryUrl = process.env.REGISTRY_URL || APP_URL;
  const registry: Registry = {
    $schema: "https://ui.shadcn.com/schema/registry.json",
    name: APP_NAME,
    homepage: APP_URL,
    items: items.map((item) => {
      if (item.registryDependencies) {
        item.registryDependencies = item.registryDependencies.map((dep) => {
          if (dep.startsWith("http") || dep.startsWith("https")) {
            return dep;
          }

          return `${registryUrl}/r/${dep}.json`;
        });
      }
      return item;
    }),
  };

  const outputPath = path.join(process.cwd(), "registry.json");
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));

  console.log(
    `\n✅ Successfully built registry with ${items.length} components`
  );
  console.log(`📝 Output: ${outputPath}`);

  const stats = {
    total: items.length,
    ui: items.filter((i) => i.type === "registry:ui").length,
    blocks: items.filter((i) => i.type === "registry:block").length,
    hooks: items.filter((i) => i.type === "registry:hook").length,
    lib: items.filter((i) => i.type === "registry:lib").length,
  };

  console.log("\n📊 Statistics:");
  console.log(`   - Total: ${stats.total}`);
  console.log(`   - UI Components: ${stats.ui}`);
  console.log(`   - Blocks: ${stats.blocks}`);
  console.log(`   - Hooks: ${stats.hooks}`);
  console.log(`   - Libraries: ${stats.lib}`);

  console.log("\n🔍 Checking dependencies...");
  const allNames = new Set(items.map((i) => i.name));
  const missingDeps: string[] = [];

  for (const item of items) {
    if (item.registryDependencies) {
      for (const dep of item.registryDependencies) {
        let depName = dep;

        if (dep.startsWith("http") || dep.startsWith("https")) {
          const urlParts = dep.split("/");
          const fileName = urlParts[urlParts.length - 1];
          depName = fileName.replace(".json", "");
        }

        if (!allNames.has(depName)) {
          missingDeps.push(`${item.name} depends on missing component: ${dep}`);
        }
      }
    }
  }

  if (missingDeps.length > 0) {
    console.warn("⚠️  Warning: Missing dependencies:");
    missingDeps.forEach((msg) => console.warn(`   - ${msg}`));
  } else {
    console.log("   ✅ All dependencies resolved");
  }

  console.log("\n✨ Done!\n");
}

buildRegistry().catch((error) => {
  console.error("❌ Build failed:", error);
  process.exit(1);
});
