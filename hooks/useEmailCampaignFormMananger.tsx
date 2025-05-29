"use client";

import { useRef } from "react";
import { LexicalEditor } from "lexical";
import { useForm, SubmitHandler } from "react-hook-form";

import { EmailCampaignForm } from "@/components/emailCampaignForm/emailCampaignForm.types";

export const useEmailCampaignFormManager = () => {
  const { register, handleSubmit } = useForm<EmailCampaignForm>();
  const emailCampaignRichTextRef = useRef<LexicalEditor>(null);

  const onSubmit: SubmitHandler<EmailCampaignForm> = (data) => {
    data.emailContent = JSON.stringify(
      emailCampaignRichTextRef?.current?.getEditorState()
    );
    console.log(data);
  };

  return { register, handleSubmit, onSubmit, emailCampaignRichTextRef };
};
