import { motion, HTMLMotionProps } from "framer-motion";

type TextFadeInProps = HTMLMotionProps<"p"> & {
  children: React.ReactNode;
  delay?: number;
};

export const TextFadeIn = ({ children, delay, ...props }: TextFadeInProps) => {
  const elementProps: HTMLMotionProps<"p"> = {
    ...props,
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  };

  return <motion.p {...elementProps}>{children}</motion.p>;
};
