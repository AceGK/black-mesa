"use client";
import styles from "./Page.module.scss";
import Image from "next/image";
import Link from "next/link";
import posts from "@/lib/posts.json";
import ChevronLeft from "@/assets/icons/chevron-left.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";

interface PageProps {
  slug: string;
  title: string;
  date: string;
  content: string;
  image: string;
}

const Page: React.FC<PageProps> = ({ slug, title, date, content, image }) => {
  const currentIndex = posts.findIndex((p) => p.slug === slug);
  const prevPost = posts[currentIndex - 1];
  const nextPost = posts[currentIndex + 1];

  return (
    <main className={styles.container}>
      <article className={styles.post}>
        <div className={styles.imageWrapper}>
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
          {content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="divider"/>

      {(prevPost || nextPost) && (
   
          <nav className={styles.postNav}>
            {prevPost && (
              <Link
                href={`/research/${prevPost.slug}`}
                className={styles.prevItem}
              >
                <Image
                  src={prevPost.image}
                  alt={prevPost.title}
                  width={180}
                  height={84}
                  className={styles.thumbnail}
                />
                <span className={styles.navTitle}>{prevPost.title}</span>
                <span className={styles.prev}> <ChevronLeft />Prev Post</span>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/research/${nextPost.slug}`}
                className={styles.nextItem}
              >
              
                <Image
                  src={nextPost.image}
                  alt={nextPost.title}
                  width={180}
                  height={84}
                  className={styles.thumbnail}
                />
                <span className={styles.navTitle}>{nextPost.title}</span>
                <span className={styles.next}>Next Post <ChevronRight /></span>
              </Link>
            )}
          </nav>
   
      )}
    </main>
  );
};

export default Page;
