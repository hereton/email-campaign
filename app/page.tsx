"use client";

import { useGetBasePath } from "../hooks/useGetBasePath";
import { EmailCampaignForm } from "@/components/emailCampaignForm/EmailCampaignForm";

export default function Home() {
  const basePath = useGetBasePath();

  return (
    <div className="flex-col flex  items-center justify-items-center min-h-screen p-8 pb-20 gap-5 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Assume You are logged in with user id : 1</div>
      <div className="flex flex-col gap-8">
        <div className="text-4xl font-bold">Email marketing campaign form</div>
        <EmailCampaignForm />
      </div>
    </div>
  );
}
