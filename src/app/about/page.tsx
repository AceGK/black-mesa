import Header from "@/components/Header";
import Blurb from "@/components/Blurb";

export default function About() {

  return (
    <main>
      <Header title="about" backgroundImage="/images/1.jpg" />
      <div className="container">
      <section className="grid">
      <Blurb
        title="Anomalous Materials Division"
        description="Specializing in the analysis of exotic compounds recovered from dimensional breaches and deep-core excavations. The division is responsible for Phase Displacement experimentation and pioneered the Resonance Cascade Energy Threshold model. "
        linkText="Learn More"
        href="/about"
        imageSrc="/images/black-mesa.jpg"
      />
      <Blurb
        title="Lambda Complex"
        description="Home to the world’s most advanced teleportation infrastructure. The Lambda team focuses on interspatial alignment, portal stabilization, and cross-dimensional anchoring."
        linkText="Learn More"
        href="/about"
        imageSrc="/images/black-mesa.jpg"
      />
      <Blurb
        title="Applied Theory & Simulation"
        description="This division models catastrophic cascade scenarios, high-energy resonance behavior, and particle field interactions. Backed by quantum AI co-processors and secure intranet nodes, simulations here guide real-world experiments across the entire facility."
        linkText="Learn More"
        href="/about"
        imageSrc="/images/black-mesa.jpg"
      />
      </section>
      </div>
    </main>
  );
}
