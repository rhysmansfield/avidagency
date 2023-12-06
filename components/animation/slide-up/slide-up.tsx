import React from "react";
import { motion } from "framer-motion";

import { AnimationComponentProps, MotionElementProps } from "../animation.type";

import styles from "./slide-up.module.scss";

export const SlideUp = ({
  element = motion.div,
  children,
  delay,
  duration = 0.6,
  ...props
}: AnimationComponentProps) => {
  const elementProps: MotionElementProps = {
    ...props,
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
    },
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  };

  return (
    <div className={styles.root}>
      {React.createElement(element, elementProps, children)}
    </div>
  );
};
