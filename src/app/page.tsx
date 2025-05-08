"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import posts from "@/lib/posts.json";
import Card from "@/components/Post/Card";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <main className={styles.main}>
      <Hero />
      <div className="container">
        <section className={styles.intro}>
          <h2>Where Boundaries Are Theories, and Discovery Is Policy.</h2>
          <p>
            Pursuing radical advancement in quantum mechanics, dimensional field
            research, and defense-grade applied sciences. Our mission: redefine
            the possible — and contain the consequences.
          </p>
        </section>
        <section>
          <Highlight
            imageSrc="/images/black-mesa.jpg"
            title="About Black Mesa"
            linkText="Learn More"
            href="/about"
          >
            <p>
              At Black Mesa, we do not ask “why,” but “why not.” Our scientists
              operate on the edge of known physics — and step over that edge
              daily. Through partnerships with government agencies and defense
              contractors, we maintain absolute operational security while
              delivering results that transform civilization… or redefine it.
            </p>
            <p>
              Explore how Black Mesa is unlocking new dimensions in
              teleportation, dark energy extraction, and interspecies
              observation.
            </p>
          </Highlight>
        </section>
        <section>
          <h2 className="minimal-title">Research</h2>
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
        </section>
      </div>
    </main>
  );
}
