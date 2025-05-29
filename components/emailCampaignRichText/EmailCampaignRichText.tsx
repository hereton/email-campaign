"use client";
import React, { forwardRef, useEffect } from "react";
import {
  $getRoot,
  $getSelection,
  createEditor,
  EditorState,
  LexicalEditor,
  StateConfig,
} from "lexical";

import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { EmailCampaignRichTextProps } from "./emailCampaignRichText.props";

const EditorCapturePlugin = forwardRef<LexicalEditor>(
  (props: any, ref: any) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
      if (editor) {
        ref.current = editor;
      }
      return () => {
        if (ref) {
          ref.current = null;
        }
      };
    }, [editor, ref]);

    return null;
  }
);

export const EmailCampaignRichText = forwardRef<
  LexicalEditor,
  EmailCampaignRichTextProps
>((props: EmailCampaignRichTextProps, ref) => {
  const editor = createEditor();

  const PLACEHOLDER = "Example of using lexical as richtext";
  const theme = {};
  const onError = (error: Error) => {
    console.error(error);
  };
  const initialConfig: InitialConfigType = {
    namespace: "emailCampaignRichText",
    theme,
    onError,
    editorState: props.editorState || "",
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
                <div className="absolute top-[10px] left-[15px] text-amber-700">
                  {PLACEHOLDER}
                </div>
              }
            />
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <AutoFocusPlugin />
        <EditorCapturePlugin ref={ref} />
      </div>
    </LexicalComposer>
  );
});
