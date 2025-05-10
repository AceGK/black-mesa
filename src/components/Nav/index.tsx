"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
import MobileMenu from "../MobileMenu";
import LogoFull from "@/assets/logos/black-mesa.svg";
import LogoIcon from "@/assets/logos/black-mesa-icon.svg";
import ThemeToggle from "@/components/ThemeToggle";
import { usePathname } from "next/navigation";
import Button from "@/components/Button";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [showBackground, setShowBackground] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  // handle scroll events to show/hide the header and change background color
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = window.innerHeight * 0.25;

      setScrollUp(currentScrollY < lastScrollY || currentScrollY < threshold);
      setShowBackground(currentScrollY > threshold + 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close the menu when the screen is resized to a larger size
  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 768;
      if (window.innerWidth >= breakpoint && menuOpen) {
        setMenuOpen(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Close the menu when a link is clicked
  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // prevent body scroll when menu is open, set scrollbar gutter to stable
  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;
    if (menuOpen) {
      html.classList.add("scrollbar-stable");
      body.classList.add("no-scroll");
    } else {
      html.classList.remove("scrollbar-stable");
      body.classList.remove("no-scroll");
    }
  
    return () => {
      html.classList.remove("scrollbar-stable");
      body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  const links = [
    { href: "/about", label: "About" },
    { href: "/research", label: "Research" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <>
      <header
        data-home={pathname === "/" ? "true" : "false"}
        className={`
          ${styles.nav} 
          ${showBackground ? styles.solid : styles.transparent} 
          ${scrollUp || menuOpen ? styles.show : styles.hide}
          ${menuOpen ? styles.menuOpen : ""}
        `}
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
            <Button href="/contact" className={styles.button}>
              Contact
            </Button>
            <ThemeToggle />
          </div>
          <div className={styles.menuButton}>
            <label className={styles.menuIcon}>
              <input
                type="checkbox"
                className={styles.menuCheckbox}
                checked={menuOpen}
                  onChange={handleMenuToggle}
                aria-label="Open menu"
              />
              <div className={styles.hamburger}>
                <span></span>
                <span></span>
              </div>
            </label>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
