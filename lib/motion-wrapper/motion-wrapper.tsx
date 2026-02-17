"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapper {
  children: ReactNode;
  className?: string;
  viewport?: boolean;
  id?: string;
}

export const MotionWrapper = ({
  children,
  className = "",
  viewport = true,
  id = "",
}: MotionWrapper) => (
  <motion.div
    id={id}
    className={className}
    initial={{ opacity: 0 }}
    transition={{
      opacity: { delay: 0.4, duration: 1.5 },
    }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: viewport ? true : false }}
  >
    {children}
  </motion.div>
);

export const MotionWrapperDelay = ({
  children,
  className = "",
}: MotionWrapper) => (
  <motion.div
    className={className}
    initial={{ y: "40%", opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      y: { delay: 1, duration: 0.8 },
      opacity: { delay: 1 },
    }}
    viewport={{ once: true }}
  >
    {children}
  </motion.div>
);

interface PricingCardMotionWrapper {
  children: React.ReactNode;
  className?: string;
  index: number;
}
export const PricingCardMotionWrapper = ({
  children,
  className = "",
  index,
}: PricingCardMotionWrapper) => (
  <motion.div
    initial={{ opacity: 0, y: "20%" }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index / 3 }}
    viewport={{ once: true }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ButtonMotionWrapper = ({
  children,
  className = "",
}: MotionWrapper) => (
  <motion.div
    initial={{ "--x": "100%", scale: 1 }}
    animate={{ "--x": "-100%" }}
    whileTap={{ scale: 0.97 }}
    transition={{
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 1,
      type: "spring",
      stiffness: 20,
      damping: 15,
      mass: 2,
      scale: {
        type: "spring",
        stiffness: 10,
        damping: 5,
        mass: 0.1,
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
export const SliderMotionWrapper = ({
  children,
  className = "",
}: MotionWrapper) => (
  <motion.div
    className={className}
    animate={{
      x: ["0%", "-100%"],
      transition: {
        ease: "linear",
        duration: 15,
        repeat: Infinity,
      },
    }}
  >
    {children}
  </motion.div>
);
