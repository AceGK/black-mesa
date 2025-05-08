"use client";
import { useState } from "react";
import posts from "@/lib/posts.json";
import Header from "@/components/Header";
import Card from "@/components/Post/Card";
import Button from "@/components/Button"; // ✅ import your generic button
import styles from "./styles.module.scss";

export default function ResearchPage() {
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visiblePosts = posts.slice(0, visibleCount);
  const hasMore = visibleCount < posts.length;

  return (
    <main>
      <Header title="Research" backgroundImage="/images/1.jpg" />
      <div className="container">
        <section>
          <div className="grid">
            {visiblePosts.map((post) => (
              <Card
                key={post.slug}
                slug={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                image={post.image}
              />
            ))}
          </div>

          {hasMore && (
            <div className={styles.loadMoreWrapper}>
              <Button onClick={() => setVisibleCount((prev) => prev + 3)}>
                View More
              </Button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
