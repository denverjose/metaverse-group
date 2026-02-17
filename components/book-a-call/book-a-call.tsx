"use client";
import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";

import { MotionWrapper } from "@/lib/motion-wrapper/motion-wrapper";

import ShinyButton from "../shiny-button/shiny-button";

export default function BookACallButton({
  shineDelay,
  className,
}: {
  shineDelay?: number;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Ensure we only access `document` on the client
    setRootElement(document.body);
  }, []);

  return (
    <>
      {process.env.NEXT_PUBLIC_CALENDLY_URL && (
        <MotionWrapper className={`mx-auto w-max ${className}`}>
          <ShinyButton
            shineDelay={shineDelay}
            parentClassname="rounded-full bg-book-a-call-slider hover:bg-book-a-call-slider-hover w-max"
            className="rounded-full py-2 px-4 relative bg-background-book-a-call hover:bg-background-book-a-call-hover text-book-a-call-text hover:text-book-a-call-text-hover"
            onClick={() => setIsOpen(true)}
          >
            <div className="flex items-center gap-2">
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M152 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H64C28.7 64 0 92.7 0 128v16 48V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192 144 128c0-35.3-28.7-64-64-64H344V24c0-13.3-10.7-24-24-24s-24 10.7-24 24V64H152V24zM48 192h80v56H48V192zm0 104h80v64H48V296zm128 0h96v64H176V296zm144 0h80v64H320V296zm80-48H320V192h80v56zm0 160v40c0 8.8-7.2 16-16 16H320V408h80zm-128 0v56H176V408h96zm-144 0v56H64c-8.8 0-16-7.2-16-16V408h80zM272 248H176V192h96v56z"
                />
              </svg>
              <div className="flex flex-col h-full w-full relative items-center">
                <span className="font-bold text-md">Contact Us</span>
                <span className="italic text-[10px] ">Powered by Calendly</span>
              </div>
            </div>
          </ShinyButton>
          {rootElement && (
            <PopupModal
              url={process.env.NEXT_PUBLIC_CALENDLY_URL!}
              onModalClose={() => setIsOpen(false)}
              open={isOpen}
              rootElement={rootElement}
            />
          )}
        </MotionWrapper>
      )}
    </>
  );
}
