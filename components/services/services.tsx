"use client";

import { Animation } from "@/components/animation/animation";
import { ServicesImage } from "@/components/services-image/services-image";

import { ServicesProps } from "./services.type";

import styles from "./services.module.scss";

export const Services = ({ title, text, image, services }: ServicesProps) => {
  return (
    <section id="services" className={styles.root}>
      <div className="wrapper">
        <div className={styles["text-wrapper"]}>
          <Animation
            element="h2"
            animation="slide-up"
            animateOnScroll
            className={styles.title}
          >
            {title}
          </Animation>
          <Animation
            element="p"
            animation="slide-up"
            animateOnScroll
            className={styles.paragraph}
          >
            {text}
          </Animation>
        </div>

        <div className={styles.services}>
          <ServicesImage image={image} additionalClassName={styles.image} />

          <div className={styles.items}>
            {services.map(({ title: serviceTitle, text: serviceText }) => (
              <Animation
                key={`service-${serviceTitle}`}
                animation="fade-in"
                animateOnScroll
                amount="all"
                className={styles.item}
              >
                <h3 className={styles["item-title"]}>{serviceTitle}</h3>
                <p className={styles["item-paragraph"]}>{serviceText}</p>
              </Animation>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
