import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { INSERT_HORIZONTAL_RULE_COMMAND } from "@lexical/react/LexicalHorizontalRuleNode";
import { Minus, Plus, Table, ImageIcon } from "lucide-react";
import { Menu, MenuPopup, MenuItem, MenuTrigger } from "@/components/ui/menu";
import { ToolbarButton } from "@/components/blocks/editor/plugins/toolbar/extensions/toolbar-button";

export function InsertDropDown({
  setShowTableDialog,
  setShowImageDialog,
}: {
  setShowTableDialog: (show: boolean) => void;
  setShowImageDialog: (show: boolean) => void;
}) {
  const [editor] = useLexicalComposerContext();

  return (
    <Menu>
      <MenuTrigger render={<ToolbarButton title="Insert" icon={Plus} />} />
      <MenuPopup
        align="start"
        className="animate-in slide-in-from-top-2 duration-200"
      >
        <MenuItem
          onClick={() =>
            editor.dispatchCommand(INSERT_HORIZONTAL_RULE_COMMAND, undefined)
          }
          className="hover:bg-accent/80 transition-colors"
        >
          <Minus className="mr-2 size-4" />
          Divider
        </MenuItem>
        <MenuItem
          onClick={() => setShowTableDialog(true)}
          className="hover:bg-accent/80 transition-colors"
        >
          <Table className="mr-2 size-4" />
          Table
        </MenuItem>
        <MenuItem
          onClick={() => setShowImageDialog(true)}
          className="hover:bg-accent/80 transition-colors"
        >
          <ImageIcon className="mr-2 size-4" />
          Image
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
