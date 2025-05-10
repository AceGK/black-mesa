import Link from "next/link";
import styles from "./styles.module.scss";
import ThemeToggle from "../ThemeToggle";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div className={`${styles.mobileMenu} ${open ? styles.show : ""}`}>
      <nav>
        <Link href="/about" onClick={onClose}>About</Link>
        <Link href="/research" onClick={onClose}>Research</Link>
        <Link href="/careers" onClick={onClose}>Careers</Link>
        <Link href="/contact" onClick={onClose}>Contact</Link>
        <ThemeToggle />
      </nav>
    </div>
  );
}
