import { ForwardRefComponent, HTMLMotionProps } from "framer-motion";
import { RefObject } from "react";

type AnimationType = "slide-up" | "fade-in";

type AnimationElement = "div" | "p" | "h2";

export type MotionElementProps = HTMLMotionProps<AnimationElement>;

export type AnimationProps = MotionElementProps & {
  animation: AnimationType;
  children: React.ReactNode;
  animateOnScroll?: boolean;
  element?: AnimationElement;
  delay?: number;
  duration?: number;
};

export type AnimationComponentProps = MotionElementProps & {
  children: React.ReactNode;
  element?: ForwardRefComponent<
    HTMLDivElement | HTMLParagraphElement,
    MotionElementProps
  >;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
};
