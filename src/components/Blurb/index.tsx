import Image from "next/image";
import styles from "./styles.module.scss";
import Button from "@/components/Button";
import type { ReactNode } from "react";

interface BlurbProps {
  imageSrc?: string;
  icon?: ReactNode;
  title: string;
  description: string;
  linkText?: string;
  href?: string;
  center?: boolean;
}

export default function Blurb({
  imageSrc,
  icon,
  title,
  description,
  linkText,
  href,
  center = false,
}: BlurbProps) {
  return (
    <div className={`${styles.blurb} ${center ? styles.center : ""}`}>
      {imageSrc && (
        <div className={styles.imageWrapper}>
          <Image src={imageSrc} alt={title} fill className={styles.image} />
        </div>
      )}

      {icon && (
        <div className={styles.iconContainer}>
          <div className={styles.iconWrapper}>{icon}</div>
        </div>
      )}

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {href && linkText && <Button href={href}>{linkText}</Button>}
      </div>
    </div>
  );
}
