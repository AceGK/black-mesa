"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "@/assets/logos/black-mesa-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Link href="/about">About</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/news">News</Link>
      </div>

      <div className={styles.logo}>
       <Logo />
      </div>

      <div className={styles.column}>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
};

export default Footer;