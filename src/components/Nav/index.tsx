"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import MobileMenu from "../MobileMenu";
import LogoFull from "@/assets/logos/black-mesa-logo.svg";
import LogoIcon from "@/assets/logos/black-mesa-icon.svg";
import ThemeToggle from "@/components/ThemeToggle";
import MenuIcon from "@/assets/icons/hamburger-right.svg";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [scrolledPastThreshold, setScrolledPastThreshold] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 0.25;

      setScrollUp(currentScrollY < lastScrollY || currentScrollY < threshold);
      setScrolledPastThreshold(currentScrollY > threshold);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <header
        className={`${styles.nav} ${
          scrolledPastThreshold ? styles.solid : styles.transparent
        } ${scrollUp ? styles.show : styles.hide}`}
      >
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
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`underline-animate fast ${
                  pathname === href ? "active" : ""
                }`}
              >
                {label}
              </Link>
            ))}
            <Link href="/contact" className={styles.button}>
              Contact
            </Link>
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
