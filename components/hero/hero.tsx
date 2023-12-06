"use client";

import { TextSlideUp } from "@/components/animation/text-slide-up/text-slide-up";
import { TextFadeIn } from "../animation/text-fade-in/text-fade-in";

import styles from "./hero.module.scss";

type HeroProps = {
  title: [string, string];
  text: JSX.Element;
};

export const Hero = ({ title, text }: HeroProps) => {
  return (
    <section className={styles.root}>
      <div className="wrapper">
        <h1 className={styles.title}>
          <TextSlideUp>{title[0]}</TextSlideUp>
          <TextSlideUp delay={0.3} className={styles.highlight}>
            {title[1]}
          </TextSlideUp>
        </h1>

        <TextFadeIn delay={1} className={styles.text}>
          {text}
        </TextFadeIn>
      </div>
    </section>
  );
};
