"use client";
import { Animation } from "@/components/animation/animation";

import { HeroProps } from "./hero.type";

import styles from "./hero.module.scss";

export const Hero = ({ title, text }: HeroProps) => (
  <section className={styles.root}>
    <div className="wrapper">
      <h1 className={styles.title}>
        <Animation animation="slide-up">{title[0]}</Animation>
        <Animation
          animation="slide-up"
          delay={0.3}
          className={styles.highlight}
        >
          {title[1]}
        </Animation>
      </h1>

      <Animation
        element="p"
        animation="fade-in"
        delay={1}
        className={styles.text}
      >
        {text}
      </Animation>
    </div>
  </section>
);
