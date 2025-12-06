"use client";
import { TRANSFORMERS } from "@lexical/markdown";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HorizontalRulePlugin } from "@lexical/react/LexicalHorizontalRulePlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { TablePlugin } from "@lexical/react/LexicalTablePlugin";
import type { EditorState, LexicalEditor } from "lexical";
import type React from "react";
import { useCallback, useState } from "react";
import { EDITOR_CONFIG } from "./lib/configs";
import type { EditorProps } from "./lib/types/editor";
import { FloatingToolbar } from "./plugins/floating-toolbar";
import SlashCommandPlugin from "./plugins/slash-command";
import TableHoverActionsPlugin from "./plugins/table-hover-actions";
import { Toolbar } from "./plugins/toolbar";

function EditorContent({
  placeholder = "Start writing ...",
  className = "",
  minHeight = "400px",
  maxHeight,
  readOnly = false,
}: Pick<
  EditorProps,
  "placeholder" | "className" | "minHeight" | "maxHeight" | "readOnly"
>) {
  const editorStyle = {
    minHeight,
    maxHeight,
    caretColor: "hsl(var(--editor-primary))",
    lineHeight: "1.7",
  };

  return (
    <div className="relative">
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className={`
              p-6 md:p-8 
              outline-none 
              max-w-none 
              transition-all duration-300
              ${className}
            `}
            readOnly={readOnly}
            style={editorStyle}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
        placeholder={
          <div className="absolute top-6 md:top-8 left-6 md:left-8 text-muted-foreground/60 pointer-events-none select-none text-base md:text-lg">
            {placeholder}
          </div>
        }
      />
    </div>
  );
}

function EditorPlugins({
  showFloatingToolbar = true,
  customPlugins = [],
  onChange = () => {},
}: {
  showFloatingToolbar?: boolean;
  customPlugins?: React.ComponentType[];
  onChange: (
    editorState: EditorState,
    editor: LexicalEditor,
    tags: Set<string>
  ) => void;
}) {
  return (
    <>
      <HistoryPlugin />
      <AutoFocusPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <LinkPlugin />

      <HorizontalRulePlugin />
      {/* table plugins - order matters */}
      <TablePlugin
        hasCellBackgroundColor={true}
        hasCellMerge={true}
        hasTabHandler={true}
      />
      <TableHoverActionsPlugin />
      <SlashCommandPlugin />
      <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      <OnChangePlugin onChange={onChange} />
      {showFloatingToolbar && <FloatingToolbar />}
      {customPlugins.map((Plugin, index) => (
        <Plugin key={index} />
      ))}
    </>
  );
}

export function Editor({
  initialValue = "",
  placeholder = 'Start writing or use "/" for quick commands',
  className = "",
  minHeight = "400px",
  maxHeight,
  showToolbar = false,
  showFloatingToolbar = true,
  readOnly = false,
  onChange,
  plugins = [],
}: EditorProps) {
  const [, setEditorState] = useState<string>(initialValue);

  const initialConfig = {
    ...EDITOR_CONFIG,
    editorState: initialValue ? initialValue : null,
    editable: !readOnly,
  };

  const handleEditorChange = useCallback(
    (editorState: EditorState) => {
      const jsonState = editorState.toJSON();
      const jsonString = JSON.stringify(jsonState);

      setEditorState(jsonString);
      onChange?.(jsonString);
    },
    [onChange]
  );

  return (
    <div className={`w-full ${className}`}>
      <LexicalComposer initialConfig={initialConfig}>
        <div className=" relative overflow-hidden">
          {showToolbar && <Toolbar />}

          <EditorContent
            maxHeight={maxHeight}
            minHeight={minHeight}
            placeholder={placeholder}
            readOnly={readOnly}
          />

          <EditorPlugins
            customPlugins={plugins}
            onChange={handleEditorChange}
            showFloatingToolbar={showFloatingToolbar}
          />
        </div>
      </LexicalComposer>
    </div>
  );
}
