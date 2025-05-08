'use client';

import { useState } from "react";
import Header from "@/components/Header";
import PostGrid from "@/components/Post/Grid";
import posts from "@/lib/posts.json";
import styles from "./styles.module.scss";

export default function ResearchPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <main className={styles.container}>
      <Header title="Research" backgroundImage="/images/1.jpg" />
      <PostGrid posts={visiblePosts} />
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
