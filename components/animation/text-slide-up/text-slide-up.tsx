import { motion, HTMLMotionProps } from "framer-motion";

import styles from "./text-slide-up.module.scss";

type TextSlideUpProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
};

export const TextSlideUp = ({
  children,
  delay,
  ...props
}: TextSlideUpProps) => {
  const elementProps: HTMLMotionProps<"div"> = {
    ...props,
    initial: {
      y: "100%",
    },
    animate: {
      y: "0",
    },
    transition: {
      delay,
      duration: 0.6,
      ease: "easeOut",
    },
  };

  return (
    <div className={styles.root}>
      <motion.div {...elementProps}>{children}</motion.div>
    </div>
  );
};
