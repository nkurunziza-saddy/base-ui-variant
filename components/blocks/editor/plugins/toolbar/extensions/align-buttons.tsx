import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { FORMAT_ELEMENT_COMMAND } from "lexical";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu, MenuPopup, MenuItem, MenuTrigger } from "@/components/ui/menu";
import { ToolbarButton } from "@/components/blocks/editor/plugins/toolbar/extensions/toolbar-button";

export function AlignButtons() {
  const [editor] = useLexicalComposerContext();

  const formatElement = (format: "left" | "center" | "right" | "justify") => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, format);
  };

  return (
    <Menu>
      <MenuTrigger
        render={<ToolbarButton title="Text Alignment" icon={AlignLeft} />}
      />

      <MenuPopup
        align="start"
        className="animate-in slide-in-from-top-2 duration-200"
      >
        <MenuItem
          onClick={() => formatElement("left")}
          className="hover:bg-accent/80 transition-colors"
        >
          <AlignLeft className="mr-2 size-4" />
          Left
        </MenuItem>
        <MenuItem
          onClick={() => formatElement("center")}
          className="hover:bg-accent/80 transition-colors"
        >
          <AlignCenter className="mr-2 size-4" />
          Center
        </MenuItem>
        <MenuItem
          onClick={() => formatElement("right")}
          className="hover:bg-accent/80 transition-colors"
        >
          <AlignRight className="mr-2 size-4" />
          Right
        </MenuItem>
        <MenuItem
          onClick={() => formatElement("justify")}
          className="hover:bg-accent/80 transition-colors"
        >
          <AlignJustify className="mr-2 size-4" />
          Justify
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
