"use client";

import { EmailCampaignRichText } from "@/components/emailCampaignRichText/emailCampaignRichText";
import { useGetBasePath } from "../hooks/useGetBasePath";

export default function Home() {
  const basePath = useGetBasePath();

  const getData = () => {
    console.log("clicked");
    console.log(basePath);
  };

  return (
    <div className="flex-col flex  items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>You are logged in with user id : 1</div>
      <div className="flex flex-col gap-8">
        <div className="text-4xl font-bold">Email marketing campaign form</div>
        <div>
          <div></div>
        </div>
        <EmailCampaignRichText />
        <button className="hover:cursor-pointer " onClick={getData}>
          click
        </button>
      </div>
    </div>
  );
}
