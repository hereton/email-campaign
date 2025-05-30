"use client";

import { useEffect, useRef, useState } from "react";
import {
  $getRoot,
  EditorState,
  LexicalEditor,
  RootNode,
  SerializedLexicalNode,
} from "lexical";
import { useForm, SubmitHandler } from "react-hook-form";

import { EmailCampaignForm } from "@/components/emailCampaignForm/emailCampaignForm.types";

export const useEmailCampaignFormManager = () => {
  const { register, handleSubmit, formState, setError, clearErrors } =
    useForm<EmailCampaignForm>();
  const emailCampaignRichTextRef = useRef<LexicalEditor>(null);

  const onSubmit: SubmitHandler<EmailCampaignForm> = (data) => {
    const editorState = emailCampaignRichTextRef?.current?.getEditorState();
    const isSuccess = handleValidateEmptyRichText(editorState);
    if (!isSuccess) {
      return;
    }
    data.emailContent = JSON.stringify(
      emailCampaignRichTextRef?.current?.getEditorState()
    );
    data.userId = "1";
    console.log(data);
    alert(
      `submit with UserId: ${data.userId} CampaignName: ${data.campaignName}, Subject: ${data.subject} emailContent: ${data.emailContent}`
    );
  };

  const handleValidateEmptyRichText = (editorState?: EditorState) => {
    let isSuccess = false;
    editorState?.read(() => {
      const root = $getRoot();
      if (root.__cachedText?.length === 0) {
        setError("emailContent", {
          type: "required",
          message: "This field is required",
        });
        isSuccess = false;
        return;
      }
      clearErrors("emailContent");
      isSuccess = true;
    });
    return isSuccess;
  };

  useEffect(() => {
    console.log("dsa");
  }, [emailCampaignRichTextRef.current?.getRootElement()]);

  return {
    register,
    handleSubmit,
    onSubmit,
    emailCampaignRichTextRef,
    formState,
    handleValidateEmptyRichText,
    clearErrors,
  };
};
