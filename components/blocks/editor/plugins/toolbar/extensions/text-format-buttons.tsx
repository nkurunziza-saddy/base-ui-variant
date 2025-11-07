import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { TEXT_FORMAT_ITEMS } from "../toolbar-items";
import { ToolbarToggleButton } from "./toolbar-button";
import { ToolbarState } from "..";
import { LexicalCommand } from "lexical";

export function TextFormatButtons({
  toolbarState,
}: {
  toolbarState: ToolbarState;
}) {
  const [editor] = useLexicalComposerContext();

  const handleClick = (command: LexicalCommand<string>, payload?: string) => {
    if (!payload) return;
    editor.dispatchCommand(command, payload);
  };

  return (
    <>
      {TEXT_FORMAT_ITEMS.map((item) => (
        <ToolbarToggleButton
          key={item.name}
          onClick={() => handleClick(item.command, item.payload)}
          isActive={
            !!toolbarState[
              `is${
                item.name.charAt(0).toUpperCase() + item.name.slice(1)
              }` as keyof ToolbarState
            ]
          }
          icon={item.icon}
          title={item.name}
        />
      ))}
    </>
  );
}
