import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { BLOCK_FORMAT_ITEMS } from "../toolbar-items";
import { ToolbarToggleButton } from "./toolbar-button";
import { ToolbarState } from "..";

const LIST_ITEMS = BLOCK_FORMAT_ITEMS.filter(
  (item) => item.command && ["bullet", "number", "check"].includes(item.name)
);

export function ListButtons({ toolbarState }: { toolbarState: ToolbarState }) {
  const [editor] = useLexicalComposerContext();

  return (
    <>
      {LIST_ITEMS.map((item) => {
        return (
          <ToolbarToggleButton
            key={item.name}
            onClick={() => editor.dispatchCommand(item.command!, undefined)}
            isActive={toolbarState.blockType === item.name}
            icon={item.icon}
            title={item.name}
          />
        );
      })}
    </>
  );
}
