"use client";

import styles from "./hero.module.scss";

import { Animation } from "@/components/animation/animation";

type HeroProps = {
  title: [string, string];
  text: JSX.Element;
};

export const Hero = ({ title, text }: HeroProps) => {
  return (
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

        <Animation animation="fade-in" delay={1} className={styles.text}>
          {text}
        </Animation>
      </div>
    </section>
  );
};
