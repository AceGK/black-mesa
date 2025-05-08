'use client';

import { useState } from "react";
import Header from "@/components/Header";
import Card from "@/components/Post/Card";
import posts from "@/lib/posts.json";
import styles from "./styles.module.scss"; 

export default function NewsIndexPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 at a time
  };

  return (
    <main className={styles.container}>
      <Header title="Research" backgroundImage="/images/1.jpg" />
      <section className={styles.grid}>
        {visiblePosts.map((post) => (
          <Card
            key={post.slug}
            slug={post.slug}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </section>
      {hasMore && (
        <div className={styles.loadMoreWrapper}>
          <button onClick={loadMore}>
            View More
          </button>
        </div>
      )}
    </main>
  );
}
