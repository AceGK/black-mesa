'use client'
import Image from "next/image";
import styles from "./styles.module.scss";
import Logo from "@/assets/logos/black-mesa-icon.svg";
import Button from "@/components/Button";

interface HighlightProps {
  imageSrc: string;
  title: string;
  linkText?: string;
  href?: string;
  children?: React.ReactNode;
  showLogo?: boolean; 
}

export default function Highlight({
  imageSrc,
  title,
  linkText,
  href,
  children,
  showLogo = false, 
}: HighlightProps) {
  return (
    <div className={styles.highlight}>
      {showLogo && (
        <div className={styles.bgImage}>
          <Logo />
        </div>
      )}

      <div className={styles.content}>
        <h2>{title}</h2>
        <div className={styles.description}>{children}</div>
        {href && linkText && (
          <Button href={href} className={styles.button}>
            {linkText}
          </Button>
        )}
      </div>

      <div className={styles.imageWrapper}>
        <Image src={imageSrc} alt={title} fill className={styles.image} />
      </div>
    </div>
  );
}
