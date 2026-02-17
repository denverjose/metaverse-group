/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  className?: string;
  parentClassname?: string;
  onClick?: () => void;
  /** how long the shine waits before repeating (seconds) */
  shineDelay?: number;
  /** how long the shine travels across (seconds) */
  shineDuration?: number;
}

function ShinyButton({
  children,
  className = "",
  parentClassname = "",
  onClick,
  shineDelay = 1,
  shineDuration = 1,
}: ShinyButtonProps) {
  return (
    <div className={`${parentClassname} shadow-dark-boxShadow`}>
      <motion.button
        initial={{ "--x": "100%" } as any}
        animate={{ "--x": "-100%" } as any}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: shineDuration,
          repeatDelay: shineDelay,
          ease: "linear",
        }}
        className={`transition flex items-center justify-center  linear-mask  ${className}`}
        onClick={onClick}
      >
        {children}
      </motion.button>
    </div>
  );
}

export default ShinyButton;
