"use client";
import { $getRoot, $getSelection } from "lexical";
import { useEffect, useState } from "react";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

function MyOnChangePlugin({ onChange }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [editor, onChange]);
  return null;
}

export const EmailCampaignRichText = () => {
  const PLACEHOLDER = "Enter some text...";
  const theme = {};

  const [editorState, setEditorState] = useState<string>("");
  const onChange = (editorState) => {
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
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="bg-white rounded-[8px] text-black h-[300px] px-[16px] pt-[8px] w-[400px]"
            aria-placeholder={PLACEHOLDER}
            placeholder={<div>{PLACEHOLDER}</div>}
          />
        }
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <AutoFocusPlugin />
      <MyOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};
