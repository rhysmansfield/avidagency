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
  element = motion.p,
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
    animate: animation,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  };

  if (animateOnScroll) {
    elementProps.whileInView = animation;
    elementProps.viewport = { once: true };
    delete elementProps.animate;
  }

  return React.createElement(element, elementProps, children);
};
