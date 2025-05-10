"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Sun from "@/assets/icons/sun.svg";
import Moon from "@/assets/icons/moon.svg";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = resolvedTheme === "dark";

  const handleThemeToggle = () => {
    // Disable transitions
    document.body.classList.add("no-theme-transition");

    // Toggle theme
    setTheme(isDark ? "light" : "dark");

    // Remove class on next frame to restore transitions
    requestAnimationFrame(() => {
      document.body.classList.remove("no-theme-transition");
    });
  };

  return (
    <button
      className={styles.toggle}
      onClick={handleThemeToggle}
      aria-label="Toggle Theme"
    >
      {!mounted ? (
        <Sun className={styles.iconPlaceholder} />
      ) : isDark ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </button>
  );
}
