import React from "react";
import { MotionProps, TargetAndTransition, motion } from "framer-motion";

import { AnimationComponentProps, MotionElementProps } from "../animation.type";

import styles from "./slide-up.module.scss";
import { classList } from "@/utils/class-list";

export const SlideUp = ({
  element = motion.div,
  children,
  delay,
  duration = 0.6,
  animateOnScroll,
  ...props
}: AnimationComponentProps) => {
  const animation: TargetAndTransition = {
    y: "0",
  };

  const elementProps: MotionElementProps = {
    ...props,
    className: undefined,
    initial: {
      y: "100%",
    },
    whileInView: animateOnScroll ? animation : {},
    animate: animateOnScroll ? {} : animation,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  };

  return (
    <div className={classList(styles.root, props?.className)}>
      {React.createElement(element, elementProps, children)}
    </div>
  );
};
