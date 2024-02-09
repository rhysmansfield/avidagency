import { classList } from "@/utils/class-list";

import { HeroImageProps } from "./hero-image.type";

import styles from "./hero-image.module.scss";

export const HeroImage = ({ screen, image }: HeroImageProps) => {
  const { url, alt } = image;
  const className = classList(
    styles["hero-image"],
    styles[`hero-image--${screen}`]
  );

  const heroImage = (
    <div
      aria-hidden
      className={className}
      style={{
        backgroundImage: `url(${url})`,
      }}
      title={alt}
    ></div>
  );

  return screen === "mobile" ? (
    <div className={styles["mobile-wrapper"]}>{heroImage}</div>
  ) : (
    heroImage
  );
};
