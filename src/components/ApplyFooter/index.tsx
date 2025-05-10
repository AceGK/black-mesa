import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

function ApplyFooter() {
  return (
    <div className={styles.contact}>
      <div className="container">
        <section className={styles.content}>
          <span className="minimal-title dark">Apply</span>
          <h2 className="serif">Seeking clearance?</h2>
          <p>
            We are always looking for talented individuals to join our team. If
            you are interested in working with us, please <Link href="/careers">apply today</Link>.
          </p>
        </section>
      </div>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/contact-background.jpg"
          alt="Contact Us"
          width={1600}
          height={900}
          quality={100}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default ApplyFooter;
