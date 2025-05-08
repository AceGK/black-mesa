"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "@/assets/logos/black-mesa-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <Link href="/about" className="underline-animate fast">About</Link>
        <Link href="/research" className="underline-animate fast">Research</Link>
        <Link href="/careers" className="underline-animate fast">Careers</Link>
      </div>

      <Link href="/" className={styles.logo}>
       <Logo />
      </Link>

      <div className={styles.column}>
        <Link href="/contact" className="underline-animate fast">Contact</Link>
        <Link href="/site-information" className="underline-animate fast">Site Information</Link>
      </div>
    </footer>
  );
};

export default Footer;