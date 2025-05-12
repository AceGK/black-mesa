"use client";
import { useState } from "react";
import posts from "@/lib/posts.json";
import Header from "@/components/Header";
import Card from "@/components/Post/Card";
import Button from "@/components/Button";
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
        <section className={styles.description}>
          <p>
            <span className="minimal-title">Black Mesa Research Facility</span>{" "}
            supports advanced, multidisciplinary programs spanning theoretical
            physics, materials science, and experimental applications. Our
            secure divisions operate under strict containment protocols,
            contributing to federally aligned projects with far-reaching
            implications.
          </p>
          <p>
            Below is a curated selection of our publicly accessible research
            initiatives.
          </p>
        </section>

        <section>
          <h2 className="minimal-title">Articles</h2>
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
