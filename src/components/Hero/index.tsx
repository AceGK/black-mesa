import styles from "./styles.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/black-mesa-new-mexico-contrast.jpg"
          alt="Black Mesa Research Facility"
          fill
          priority
          fetchPriority="high"
          quality={75}
          className={styles.image}
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.gradientFade} />
      <div className={styles.content}>
        <h1>Black Mesa</h1>
        <p>Research Facility</p>
      </div>
    </section>
  );
}
