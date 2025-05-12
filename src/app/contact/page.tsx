import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import styles from "./styles.module.scss";

export default function About() {
  return (
    <main>
      <Header title="contact" backgroundImage="/images/7.jpg" />
      <section className="container">
        <div className={styles.description}>
          <p>
          For inquiries regarding recruitment, interdepartmental coordination, or administrative matters, please use the form below.
          </p>
          <p>
          All communications are reviewed by authorized personnel. Unauthorized disclosures, classified requests, or external solicitations will not receive a response.
          </p>
        </div>
        <br />
        <ContactForm />
      </section>
    </main>
  );
}
