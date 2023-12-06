"use client";

import { useRef } from "react";
import { Animation } from "@/components/animation/animation";
import { Button } from "@/components/button/button";

import { TextBlockProps } from "./text-block.type";

import styles from "./text-block.module.scss";

export const TextBlock = ({ id, title, text, cta }: TextBlockProps) => {
  const ref = useRef(null);

  return (
    <section className={styles.root}>
      <div ref={ref} className="wrapper">
        <Animation
          element="h2"
          animation="slide-up"
          animateOnScroll
          scrollRef={ref}
          className={styles.title}
        >
          {title}
        </Animation>
        <Animation
          animation="slide-up"
          animateOnScroll
          scrollRef={ref}
          className={styles.text}
        >
          {text}
        </Animation>
        {cta && (
          <Button
            url={cta.url}
            label={cta.label}
            additionalClassName={styles.cta}
          />
        )}
      </div>
    </section>
  );
};
