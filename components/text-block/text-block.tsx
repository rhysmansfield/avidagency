"use client";

import { useRef } from "react";
import { Animation } from "@/components/animation/animation";
import { Button } from "@/components/button/button";

import { TextBlockProps } from "./text-block.type";

import styles from "./text-block.module.scss";

export const TextBlock = ({ id, title, text, cta }: TextBlockProps) => {
  return (
    <section id={id} className={styles.root}>
      <div className="wrapper">
        <Animation
          element="h2"
          animation="slide-up"
          animateOnScroll
          className={styles.title}
        >
          {title}
        </Animation>
        <Animation animation="slide-up" animateOnScroll className={styles.text}>
          {text}
        </Animation>
        {cta && (
          <Animation animation="slide-up" animateOnScroll>
            <Button
              url={cta.url}
              label={cta.label}
              additionalClassName={styles.cta}
            />
          </Animation>
        )}
      </div>
    </section>
  );
};
