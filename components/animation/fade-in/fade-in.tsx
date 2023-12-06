import React from "react";
import { motion } from "framer-motion";

import { AnimationComponentProps, MotionElementProps } from "../animation.type";

export const FadeIn = ({
  element = motion.p,
  children,
  delay,
  duration = 0.6,
  ...props
}: AnimationComponentProps) => {
  const elementProps: MotionElementProps = {
    ...props,
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  };

  return React.createElement(element, elementProps, children);
};
