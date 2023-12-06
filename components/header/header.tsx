import Link from "next/link";
import { Logo } from "@/components/svg/logo/logo";
import { classList } from "@/utils/class-list";

import styles from "./header.module.scss";
import { HeaderProps } from "./header.type";

export const Header = ({ logoUrl, navItems }: HeaderProps) => (
  <header className={styles.root}>
    <div className={classList("wrapper", styles.wrapper)}>
      <Link href={logoUrl}>
        <Logo className={styles.logo} />
      </Link>
      <nav>
        <ul className={styles["nav-list"]}>
          {navItems.map(({ url, label }) => (
            <li key={`nav-link-${label}`} className={styles["nav-item"]}>
              <Link href={url}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
