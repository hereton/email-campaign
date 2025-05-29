"use client";

export type EmailCampaignForm = {
  campaignName: string;
  sendToEmails: string[];
  subject: string;
  emailContent: string;
};
