"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import MobileMenu from "../MobileMenu";
import LogoFull from "@/assets/logos/black-mesa-logo.svg";
import LogoIcon from "@/assets/logos/black-mesa-icon.svg";
import ThemeToggle from "@/components/ThemeToggle";
import MenuIcon from "@/assets/icons/hamburger-right.svg";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollUp(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`${styles.nav} ${scrollUp ? styles.show : styles.hide}`}>
      <div className={styles.logo}>
          <Link href="/" className={styles.logoIcon}>
            <LogoIcon />
          </Link>
          <Link href="/" className={styles.logoFull}>
            <LogoFull />
          </Link>
        </div>
        <nav>
          <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/research">Research</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact" className={styles.button}>Contact</Link>
            <ThemeToggle />
          </div>
          <button
            className={styles.menuButton}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
