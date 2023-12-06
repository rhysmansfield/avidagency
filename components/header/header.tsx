import Link from "next/link";
import { Logo } from "@/components/svg/logo/logo";
import { classList } from "@/utils/class-list";

import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.root}>
      <div className={classList("wrapper", styles.wrapper)}>
        <Link href="/">
          <Logo className={styles.logo} />
        </Link>
        <nav>
          <ul className={styles["nav-list"]}>
            <li className={styles["nav-item"]}>
              <a href="#about">About</a>
            </li>
            <li className={styles["nav-item"]}>
              <a href="#services">Services</a>
            </li>
            <li className={styles["nav-item"]}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
