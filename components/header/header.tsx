import Link from "next/link";
import { Logo } from "@/components/svg/logo/logo";
import { classList } from "@/utils/class-list";

import styles from "./header.module.scss";

export const Header = () => (
  <header className={styles.root}>
    <div className={classList("wrapper", styles.wrapper)}>
      <Link href="/">
        <Logo className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="#services">Services</Link>
          </li>
          <li className={styles["nav-item"]}>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
