"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import logo from "@public/logo-icon.png";
import { useEffect, useRef } from "react";

export const Header = () => {
  const ref = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // set the header height as a CSS variable
    const headerHeight = ref.current.offsetHeight;
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, [ref]);

  return (
    <header ref={ref} className={styles["container"]}>
      <div className={styles["wrapper"]}>
        <Link href="/" className={styles["logo"]}>
          <Image
            src={logo}
            alt="Avid Media"
            width={28}
            height={28}
            className={styles["icon"]}
          />
        </Link>
      </div>
    </header>
  );
};
