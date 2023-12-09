import { HeroImageProps } from "./hero-image.type";

import styles from "./hero-image.module.scss";
import { classList } from "@/utils/class-list";

export const HeroImage = ({ screen }: HeroImageProps) => {
  const className = classList(
    styles["hero-image"],
    styles[`hero-image--${screen}`]
  );

  const heroImage = (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: "url('/images/hero-image.jpg')",
      }}
    ></div>
  );

  return screen === "mobile" ? (
    <div className={styles["mobile-wrapper"]}>{heroImage}</div>
  ) : (
    heroImage
  );
};
