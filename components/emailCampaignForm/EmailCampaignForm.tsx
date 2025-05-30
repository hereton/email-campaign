"use client";

import { useRef } from "react";
import { useEmailCampaignFormManager } from "@/hooks/useEmailCampaignFormMananger";
import { EmailCampaignRichText } from "../emailCampaignRichText/EmailCampaignRichText";

const mockContent = `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Hello world","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"    tab. tab.","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""},{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"Bye bye","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}`;

export const EmailCampaignForm = () => {
  const {
    handleSubmit,
    onSubmit,
    register,
    emailCampaignRichTextRef,
    formState: { errors },
    clearErrors,
  } = useEmailCampaignFormManager();

  const resetEmailContentErrorBeforeSubmit = () => {
    if (errors.emailContent) {
      clearErrors("emailContent");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <div>
          <div>Campaign Name</div>
          <div className="w-full h-[30px]">
            <input
              className="bg-white rounded-[8px] w-full h-[30px] text-black px-[16px] placeholder:text-amber-700"
              {...register("campaignName", { required: true, minLength: 3 })}
              placeholder="input Campaign name..."
            />
          </div>
          {errors.campaignName && (
            <div className="text-red-500 py-1">
              This field is required and must be more than 3 character
            </div>
          )}
        </div>
        <div>
          <div>Subject</div>
          <div className="w-full h-[30px]">
            <input
              className="bg-white rounded-[8px] w-full h-[30px] text-black px-[16px] placeholder:text-amber-700"
              {...register("subject", { required: true, minLength: 3 })}
              placeholder="input subject..."
            />
          </div>
          {errors.subject && (
            <div className="text-red-500 py-1">
              This field is required and must be more than 3 character
            </div>
          )}
        </div>
        <div>
          <EmailCampaignRichText
            editorState={mockContent}
            ref={emailCampaignRichTextRef}
          />
          {errors.emailContent && (
            <div className="text-red-500 py-1">This field is required</div>
          )}
        </div>
        <button
          className="cursor-pointer"
          type="submit"
          onClick={resetEmailContentErrorBeforeSubmit}
        >
          submit
        </button>
      </div>
    </form>
  );
};
