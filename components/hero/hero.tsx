"use client";

import { Animation } from "@/components/animation/animation";
import { HeroImage } from "@/components/hero-image/hero-image";

import styles from "./hero.module.scss";
import { classList } from "@/utils/class-list";
import Link from "next/link";
import { Chevron } from "@/components/svg/Chevron";

export const Hero = () => {
  return (
    <section className={styles.root}>
      <HeroImage screen="desktop" />
      <div
        className={styles.content}
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 1200" fill="%231a1a1a"><polygon points="0,0 100,0 0,1200"/></svg>')`,
        }}
      >
        <div>
          <div className={styles["text-wrapper"]}>
            <h1 className={styles.title}>
              <Animation animation="slide-up">Avid</Animation>
              <Animation
                animation="slide-up"
                delay={0.3}
                className={styles.highlight}
              >
                Media
              </Animation>
            </h1>
            <Animation
              element="p"
              animation="fade-in"
              delay={1}
              className={styles.paragraph}
            >
              We work with a range of companies to transform their digital
              identity, through <span>best-in-class</span> digital marketing and
              web development.
            </Animation>
            <div className={styles["button-wrapper"]}>
              <Animation animation="fade-in" delay={1.3}>
                <Link
                  href="/"
                  className={classList(
                    styles.button,
                    styles["button--primary"]
                  )}
                >
                  Become a client
                  <Chevron
                    direction="right"
                    className={styles["button--icon"]}
                  />
                </Link>
              </Animation>{" "}
              <Animation animation="fade-in" delay={1.6}>
                <Link
                  href="/"
                  className={classList(
                    styles.button,
                    styles["button--secondary"]
                  )}
                >
                  Meet the team
                </Link>
              </Animation>
            </div>
          </div>
          <HeroImage screen="mobile" />
        </div>
      </div>
    </section>
  );
};
