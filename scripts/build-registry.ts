import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

interface RegistryItem {
  $schema?: string;
  name: string;
  type: string;
  description?: string;
  dependencies?: string[];
    extends?: "none"
  registryDependencies?: string[];
  files: Array<{
    path: string;
    type: string;
    target?: string;
    content?: string;
  }>;
  [key: string]: any;
}

interface Registry {
  $schema: string;
  name: string;
  homepage: string;
  extends: "none"
  items: RegistryItem[];
}

async function buildRegistry() {
  const registryDir = path.join(process.cwd(), 'registry/new-york');
  
  // Find all index.json files (component metadata)
  const itemFiles = await glob('**/index.json', {
    cwd: registryDir,
    absolute: true,
    ignore: ['**/node_modules/**'],
  });

  console.log(`Found ${itemFiles.length} component definitions...`);

  const items: RegistryItem[] = [];

  for (const itemFile of itemFiles) {
    try {
      const content = fs.readFileSync(itemFile, 'utf-8');
      const item: RegistryItem = JSON.parse(content);
      
      // Validate required fields
      if (!item.name || !item.type) {
        console.warn(`⚠ Skipping ${itemFile}: missing name or type`);
        continue;
      }

      items.push(item);
      console.log(`  ✓ Added: ${item.name}`);
    } catch (error) {
      console.error(`❌ Error processing ${itemFile}:`, error);
    }
  }

  // Sort items alphabetically by name
  items.sort((a, b) => a.name.localeCompare(b.name));

  // Build the main registry
  const registry: Registry = {
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: 'Uruhuu',
    homepage: 'https://uruhuu.vercel.app/',
      extends: "none",
    items,
  };

  // Write to registry.json
  const outputPath = path.join(process.cwd(), 'registry.json');
  fs.writeFileSync(outputPath, JSON.stringify(registry, null, 2));

  console.log(`\n✓ Built registry with ${items.length} components`);
  console.log(`  Output: ${outputPath}`);
}

buildRegistry().catch(console.error);