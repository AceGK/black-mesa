"use client";
import styles from "./Page.module.scss";
import Image from "next/image";

interface PageProps {
  title: string;
  date: string;
  content: string;
  image: string;
}

const Page: React.FC<PageProps> = ({ title, date, content, image }) => {
  return (
    <main className={styles.container}>
      <article className={styles.post}>
        <div className={styles.image}>
        <Image 
          src={image}
          alt={title}
          fill
          priority
          quality={100}
          className={styles.image}
        />
        </div>
        <h1>{title}</h1>
        <p className={styles.date}>
          <em>{date}</em>
        </p>
        <div className={styles.content}>
          <p>{content}</p>
        </div>
      </article>
      </main>
  );
};

export default Page;
