"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";
import PostGrid from "@/components/Post/Grid";
import posts from "@/lib/posts.json";

export default function Home() {
  const [visibleCount, setVisibleCount] = useState(3);
  const visiblePosts = posts.slice(0, visibleCount);

  return (
    <main className={styles.main}>
      <Hero />
      <div className="container">
        <section className={styles.intro}>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur quae, voluptates veniam quaerat aspernatur est magni
            mollitia fugiat! Corrupti tempore accusamus odit unde voluptate,
            similique eveniet ipsam commodi excepturi libero.
          </p>
        </section>
        <section>
          <Blurb
            imageSrc="/images/black-mesa.jpg"
            title="About Black Mesa"
            description="Explore how Black Mesa is pushing the boundaries of science and unlocking new dimensions."
            linkText="Learn More"
            href="/about"
          />
        </section>
        <section>
          <h2 className="minimal-title">Research</h2>
          <PostGrid posts={visiblePosts} />
        </section>
      </div>
    </main>
  );
}
