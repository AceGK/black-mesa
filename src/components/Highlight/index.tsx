import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";
import Logo from "@/assets/logos/black-mesa-icon.svg";

interface HighlightProps {
  imageSrc: string;
  title: string;
  linkText: string;
  href: string;
  children?: React.ReactNode;
}

export default function Highlight({
  imageSrc,
  title,
  linkText,
  href,
  children,
}: HighlightProps) {
  return (
    <div className={styles.highlight}>
      {/* Optional background logo */}
      {/* <div className={styles.bgImage}>
        <Logo />
      </div> */}

      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.description}>{children}</div>
        <Link href={href} className={styles.button}>
          {linkText}
        </Link>
      </div>

      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.image}
        />
      </div>
    </div>
  );
}
