"use client";
import { $getRoot, $getSelection, EditorState } from "lexical";
import { useEffect, useState } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function MyOnChangePlugin({
  onChange,
}: {
  onChange: (editorState: EditorState) => void;
}) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

export const EmailCampaignRichText = () => {
  const PLACEHOLDER = "Example of using lexical as richtext";
  const theme = {};

  const [editorState, setEditorState] = useState<string>("");
  const onChange = (editorState: EditorState) => {
    const editorStateJSON = editorState.toJSON();
    const temp = JSON.stringify(editorStateJSON);
    console.log(temp);
    setEditorState(temp);
  };
  const onError = (error: Error) => {
    console.error(error);
  };
  const initialConfig = {
    namespace: "emailCampaignRichText",
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="relative">
        <RichTextPlugin
          contentEditable={
            <ContentEditable
              className="bg-white rounded-[8px] text-black min-h-[300px] h-auto px-[16px] pt-[8px] w-full "
              aria-placeholder={PLACEHOLDER}
              placeholder={
                <div className="absolute top-[10px] text-black left-[15px]">
                  {PLACEHOLDER}
                </div>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <MyOnChangePlugin onChange={onChange} />
      </div>
    </LexicalComposer>
  );
};
