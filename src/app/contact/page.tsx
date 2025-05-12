import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";

export default function About() {
  return (
    <main>
      <Header title="contact" backgroundImage="/images/7.jpg" />
      <section className="container">
        <ContactForm />
      </section>
    </main>
  );
}
