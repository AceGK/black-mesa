import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

interface BlurbProps {
  imageSrc: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

export default function Blurb({ imageSrc, title, description, linkText, href }: BlurbProps) {
  return (
    <div className={styles.blurb}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link href={href} className={styles.button}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}