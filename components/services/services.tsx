"use client";

import { Animation } from "@/components/animation/animation";
import { ServicesImage } from "@/components/services-image/services-image";

import { ServicesProps } from "./services.type";

import styles from "./services.module.scss";

export const Services = ({ title, text, image, services }: ServicesProps) => {
  return (
    <section className={styles.root}>
      <div className="wrapper">
        <div className={styles["text-wrapper"]}>
          <Animation
            element="h2"
            animation="slide-up"
            className={styles.title}
            animateOnScroll
          >
            {title}
          </Animation>
          <Animation
            element="p"
            animation="slide-up"
            className={styles.paragraph}
            animateOnScroll
          >
            {text}
          </Animation>
        </div>

        <div className={styles.services}>
          <ServicesImage image={image} additionalClassName={styles.image} />

          <div>
            <div>Item 1</div>
            <div>Item 1</div>
            <div>Item 1</div>
            <div>Item 1</div>
            <div>Item 1</div>
          </div>
        </div>
      </div>
    </section>
  );
};
