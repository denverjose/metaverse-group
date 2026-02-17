// metadata.tsx
import { Metadata } from "next";

export const homepageMetadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_BUSINESS_NAME} - Driving Growth Through FinTech Innovation`,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  description: `${process.env.NEXT_PUBLIC_BUSINESS_NAME} is a B2B FinTech SaaS company delivering cutting-edge software and solutions for businesses. We help enterprises streamline financial operations, scale efficiently, and unlock new growth opportunities through next-generation technology.`,
  openGraph: {
    title: `${process.env.NEXT_PUBLIC_BUSINESS_NAME} - Driving Growth Through FinTech Innovation`,
    description: `${process.env.NEXT_PUBLIC_BUSINESS_NAME} is a B2B FinTech SaaS company delivering cutting-edge software and solutions for businesses. We help enterprises streamline financial operations, scale efficiently, and unlock new growth opportunities through next-generation technology.`,
  },
  keywords: [
    "fintech",
    "financial technology",
    "software solutions",
    "business software",
    "digital payments",
    "financial software",
    "b2b fintech",
    "software development",
    "web development",
    "business automation",
    "digital transformation",
    "business growth",
  ],
  robots: "index, follow",
};

export const termsAndConditionsMetadata: Metadata = {
  title: "Mobile Terms & Conditions - Guidelines for Messaging Services",
  description:
    "Review the Mobile Terms & Conditions for our messaging services. Understand the guidelines for receiving updates, offers, and important information.",
  openGraph: {
    title:
      "Mobile Terms & Conditions - Guidelines for Client Messaging Services",
    description:
      "Review the Mobile Terms & Conditions for our messaging services. Understand the guidelines for receiving updates, offers, and important information.",
  },
  robots: "index, follow",
};

export const privacyPolicyMetadata: Metadata = {
  title: "Privacy Policy - How We Collect and Protect Your Data",
  description:
    "Our Privacy Policy outlines the data we collect, how we use it, and the measures we take to protect your information and maintain your privacy rights.",
  openGraph: {
    title: "Privacy Policy - How We Collect and Protect Your Data",
    description:
      "Our Privacy Policy outlines the data we collect, how we use it, and the measures we take to protect your information and maintain your privacy rights.",
  },
  robots: "index, follow",
};
