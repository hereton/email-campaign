"use client";

import { useRef } from "react";
import { useEmailCampaignFormManager } from "@/hooks/useEmailCampaignFormMananger";
import { EmailCampaignRichText } from "../emailCampaignRichText/EmailCampaignRichText";
import { LexicalEditor } from "lexical";

export const EmailCampaignForm = () => {
  const { handleSubmit, onSubmit, register, emailCampaignRichTextRef } =
    useEmailCampaignFormManager();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <div>
          <div>Campaign Name</div>
          <div className="w-full h-[30px]">
            <input
              className="bg-white rounded-[8px] w-full h-[30px] text-black px-[16px] placeholder:text-amber-700"
              {...register("campaignName")}
              placeholder="input Campaign name..."
            />
          </div>
        </div>
        <div>
          <div>Subject</div>
          <div className="w-full h-[30px]">
            <input
              className="bg-white rounded-[8px] w-full h-[30px] text-black px-[16px] placeholder:text-amber-700"
              {...register("subject")}
              placeholder="input subject..."
            />
          </div>
        </div>
        <div></div>
        <EmailCampaignRichText ref={emailCampaignRichTextRef} />
        <button>submit</button>
      </div>
    </form>
  );
};
