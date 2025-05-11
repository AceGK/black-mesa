"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "@/assets/logos/black-mesa-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.column}>
            <Link href="/about" className="underline-animate fast">
              About
            </Link>
            <Link href="/research" className="underline-animate fast">
              Research
            </Link>
            <Link href="/careers" className="underline-animate fast">
              Careers
            </Link>
          </div>

          <Link href="/" className={styles.logo} aria-label="Home">
            <Logo />
          </Link>

          <div className={styles.column}>
            <Link href="/contact" className="underline-animate fast">
              Contact
            </Link>
            <Link href="/site-information" className="underline-animate fast">
              Site Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
