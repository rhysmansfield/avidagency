"use client";

import Link from "next/link";
import { Animation } from "@/components/animation/animation";
import { HeroImage } from "@/components/hero-image/hero-image";
import { Chevron } from "@/components/svg/Chevron";
import { classList } from "@/utils/class-list";

import { HeroProps } from "./hero.type";

import styles from "./hero.module.scss";

export const Hero = ({ title, text, buttons, image }: HeroProps) => {
  return (
    <section className={styles.root}>
      <HeroImage screen="desktop" image={image} />
      <div
        className={styles.content}
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1200" fill="%231a1a1a"><polygon points="0,0 100,0 0,1200"/></svg>')`,
        }}
      >
        <div>
          <div className={styles["text-wrapper"]}>
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
              className={styles.paragraph}
            >
              {text}
            </Animation>
            <div className={styles["button-wrapper"]}>
              <Animation animation="fade-in" delay={1.3}>
                <Link
                  href={buttons[0].url}
                  className={classList(
                    styles.button,
                    styles["button--primary"]
                  )}
                >
                  {buttons[0].label}
                  <Chevron
                    direction="right"
                    className={styles["button--icon"]}
                  />
                </Link>
              </Animation>{" "}
              <Animation animation="fade-in" delay={1.6}>
                <Link
                  href={buttons[1].url}
                  className={classList(
                    styles.button,
                    styles["button--secondary"]
                  )}
                >
                  {buttons[1].label}
                </Link>
              </Animation>
            </div>
          </div>
          <HeroImage screen="mobile" image={image} />
        </div>
      </div>
    </section>
  );
};
