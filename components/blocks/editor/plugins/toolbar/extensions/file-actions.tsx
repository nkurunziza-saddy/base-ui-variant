import { useRef } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { FileDown, FileUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu, MenuPopup, MenuItem, MenuTrigger } from "@/components/ui/menu";
import {
  exportAsHTML,
  exportAsMarkdown,
  copyAsPlainText,
  importMarkdown,
} from "../../../lib/utils";
import { ToolbarButton } from "@/components/blocks/editor/plugins/toolbar/extensions/toolbar-button";

export function FileActions() {
  const [editor] = useLexicalComposerContext();
  const importInputRef = useRef<HTMLInputElement>(null);

  const handleImport = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      importMarkdown(editor, file);
    }
  };

  return (
    <>
      <Menu>
        <MenuTrigger
          render={
            <ToolbarButton
              variant="ghost"
              title="Export"
              className="hover:bg-accent/80 transition-colors"
              icon={FileDown}
            />
          }
        />
        <MenuPopup
          align="start"
          className="animate-in slide-in-from-top-2 duration-200"
        >
          <MenuItem
            onClick={() => exportAsHTML(editor)}
            className="hover:bg-accent/80 transition-colors"
          >
            Save as HTML
          </MenuItem>
          <MenuItem
            onClick={() => exportAsMarkdown(editor)}
            className="hover:bg-accent/80 transition-colors"
          >
            Save as Markdown
          </MenuItem>
          <MenuItem
            onClick={() => copyAsPlainText(editor)}
            className="hover:bg-accent/80 transition-colors"
          >
            Copy as Plain Text
          </MenuItem>
        </MenuPopup>
      </Menu>

      <input
        type="file"
        accept=".md,.markdown"
        ref={importInputRef}
        onChange={handleImport}
        className="hidden"
      />
      <ToolbarButton
        title="Import"
        onClick={() => importInputRef.current?.click()}
        icon={FileUp}
      />
    </>
  );
}
