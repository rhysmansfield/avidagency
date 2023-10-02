import { Form } from "@app/components/form/form";
import styles from "./hero.module.scss";

import { HeroProps } from "./hero.type";

export const Hero = ({ title, subtitle, form }: HeroProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["background"]} aria-hidden="true" />

      <div className={styles["wrapper"]}>
        <div className={styles["heading"]}>
          <h1 className={styles["title"]}>{title}</h1>
          <p className={styles["subtitle"]}>{subtitle}</p>
        </div>

        <Form form={form} className={styles["form"]} />
      </div>
    </div>
  );
};
