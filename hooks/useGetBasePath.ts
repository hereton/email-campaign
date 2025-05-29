"use client";

export const useGetBasePath = () => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/email-campaign" : "";
  return basePath;
};
