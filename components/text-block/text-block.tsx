import Link from "next/link";
import { Button } from "@/components/button/button";

import { TextBlockProps } from "./text-block.type";

import styles from "./text-block.module.scss";

export const TextBlock = ({ title, text, cta }: TextBlockProps) => (
  <section className={styles.root}>
    <div className="wrapper">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>{text}</div>
      {cta && <Button url="#contact" label="Become a client" />}
    </div>
  </section>
);
