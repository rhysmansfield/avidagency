import { motion } from "framer-motion";
import { FadeIn } from "./fade-in/fade-in";
import { SlideUp } from "./slide-up/slide-up";

import { AnimationComponentProps, AnimationProps } from "./animation.type";

export const Animation = ({
  animation,
  children,
  element,
  delay,
  duration,
  animateOnScroll,
  ...props
}: AnimationProps) => {
  const getMotionElement = () => {
    switch (element) {
      case "div":
        return motion.div;
      case "p":
        return motion.p;
      case "h2":
        return motion.h2;
      default:
        return undefined;
    }
  };

  const motionElement = getMotionElement();
  const componentProps: Omit<AnimationComponentProps, "children"> = {
    ...props,
    element: motionElement,
    delay: delay,
    duration: duration,
    animateOnScroll,
  };

  switch (animation) {
    case "fade-in":
      return <FadeIn {...componentProps}>{children}</FadeIn>;
    case "slide-up":
      return <SlideUp {...componentProps}>{children}</SlideUp>;
    default:
      return null;
  }
};
