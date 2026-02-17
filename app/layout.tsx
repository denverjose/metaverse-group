import "./globals.css";
import { Onest } from "next/font/google";

import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import { homepageMetadata } from "@/lib/metadata";

// import ChatForm from "../components/chat-form/chat-form";

// import { ChatProvider } from "./providers/chat-provider"; // Import the ChatProvider
import { _ThemeProvider } from "./providers/theme-provider";

import type { Metadata } from "next";

const onest = Onest({
  preload: true,
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = homepageMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-background-dark ${onest.className}`}>
        <_ThemeProvider>
          <Navbar />
          {/* <ChatProvider> */}
          <main className={`min-h-fit ${onest.className}`} id="home">
            {/* <ChatForm /> */}
            {children}
          </main>
          {/* </ChatProvider> */}
          <Footer />
        </_ThemeProvider>
      </body>
    </html>
  );
}
