import styles from "./styles.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <h1>Black Mesa</h1>
        <p>Research Facility</p>
      </div>
    </section>
  );
}
