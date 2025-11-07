import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { UNDO_COMMAND, REDO_COMMAND } from "lexical";
import { Undo, Redo } from "lucide-react";
import { ToolbarButton } from "@/components/blocks/editor/plugins/toolbar/extensions/toolbar-button";

export function HistoryButtons({
  canUndo,
  canRedo,
}: {
  canUndo: boolean;
  canRedo: boolean;
}) {
  const [editor] = useLexicalComposerContext();

  return (
    <>
      <div>
        <ToolbarButton
          disabled={!canUndo}
          onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
          title="Undo"
          icon={Undo}
        />
      </div>
      <div>
        <ToolbarButton
          disabled={!canRedo}
          onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
          title="Redo"
          icon={Redo}
        />
      </div>
    </>
  );
}
