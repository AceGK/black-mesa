"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Sun from "@/assets/icons/sun.svg";
import Moon from "@/assets/icons/moon.svg";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      className={styles.toggle}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun /> : <Moon />}
    </button>
  );
}
