import Image from "next/image";
import styles from "./page.module.scss";
import Hero from "@/components/Hero";
import Blurb from "@/components/Blurb";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className="container">
      <section>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          quae, voluptates veniam quaerat aspernatur est magni mollitia fugiat!
          Corrupti tempore accusamus odit unde voluptate, similique eveniet
          ipsam commodi excepturi libero.
        </p>
      </section>
      <section>
        <Blurb
          imageSrc="/images/black-mesa.jpg"
          title="Our Research"
          description="Explore how Black Mesa is pushing the boundaries of science and unlocking new dimensions."
          linkText="Learn More"
          href="/research"
        />
      </section>
      </div>
    </main>
  );
}
