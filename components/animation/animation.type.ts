import {
  ForwardRefComponent,
  HTMLMotionProps,
  MotionAdvancedProps,
} from "framer-motion";

type AnimationType = "slide-up" | "fade-in";

type AnimationElement = "div" | "p" | "h2";

export type MotionElementProps = HTMLMotionProps<AnimationElement>;

export type AnimationProps = MotionElementProps & {
  animation: AnimationType;
  children: React.ReactNode;
  amount?: "some" | "all" | number;
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
  amount?: "some" | "all" | number;
  animateOnScroll?: boolean;
  delay?: number;
  duration?: number;
};
