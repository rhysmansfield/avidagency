"use client";

import { TextSlideUp } from "@/components/animation/text-slide-up/text-slide-up";
import { TextFadeIn } from "../animation/text-fade-in/text-fade-in";

import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <div className="wrapper">
        <h1 className={styles.title}>
          <TextSlideUp>Avid</TextSlideUp>
          <TextSlideUp delay={0.3} className={styles.highlight}>
            Media
          </TextSlideUp>
        </h1>

        <TextFadeIn delay={1} className={styles.text}>
          We work with a range of companies to transform their digital identity,
          through <span>best-in-class</span> digital marketing and web
          development.
        </TextFadeIn>
      </div>
    </section>
  );
};
