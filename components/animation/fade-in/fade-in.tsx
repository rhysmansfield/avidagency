import React from "react";
import {
  AnimationControls,
  MotionProps,
  TargetAndTransition,
  VariantLabels,
  motion,
} from "framer-motion";

import { AnimationComponentProps, MotionElementProps } from "../animation.type";

export const FadeIn = ({
  element = motion.div,
  children,
  delay,
  duration = 0.6,
  animateOnScroll,
  ...props
}: AnimationComponentProps) => {
  const animation: TargetAndTransition = {
    opacity: 1,
  };

  const elementProps: MotionElementProps = {
    ...props,
    initial: {
      opacity: 0,
    },
    whileInView: animateOnScroll ? animation : {},
    animate: animateOnScroll ? {} : animation,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  };

  return React.createElement(element, elementProps, children);
};
