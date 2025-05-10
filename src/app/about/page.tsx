"use client";
import Header from "@/components/Header";
import Blurb from "@/components/Blurb";
import Highlight from "@/components/Highlight";
import Lambda from "@/assets/icons/lambda.svg";
import Circuit from "@/assets/icons/circuit.svg";
import Atom from "@/assets/icons/atom.svg";
import Radiation from "@/assets/icons/radiation.svg";
import Simulation from "@/assets/icons/simulation.svg";

export default function About() {
  return (
    <main>
      <Header title="about" backgroundImage="/images/black-mesa-sign-crop.jpg" />
      <div className="container">
        <section>
          <Highlight imageSrc="/images/black-mesa.jpg" title="Black Mesa">
            <h2 className="minimal-title">Research Facility</h2>
            <p>
              The Black Mesa Research Facility operates at the intersection of
              theoretical modeling and advanced practical implementation.
              Initially established under legacy defense infrastructure, the
              facility has evolved into a fully integrated research and
              development ecosystem supporting a range of classified and
              civilian-adjacent programs.
            </p>
            <p>
              Our multi-sector complex is designed for total operational
              containment, offering full-spectrum autonomy in environmental
              regulation, energy production, data isolation, and materials
              control. Through discreet collaborations and internally driven
              directives, Black Mesa advances a programmatic agenda centered on
              high-impact innovation, rigorous validation protocols, and
              outcomes of strategic relevance.
            </p>
          </Highlight>
        </section>
        <section>
          <h2 className="minimal-title">Divisions</h2>
          <p>
            Black Mesa&apos;s multidisciplinary research initiatives span
            theoretical modeling, applied quantum systems, advanced propulsion
            theory, neural interface frameworks, particulate field dynamics, and
            high-energy array calibration. We maintain specialized divisions
            including:
          </p>

          <div className="flexGrid" style={{ marginTop: "3rem" }}>
            <Blurb
              icon={<Atom />}
              title="Anomalous Materials"
              description="Focused on the behavior of unstable compounds and high-reactivity elements under controlled excitation protocols."
              center
            />

            <Blurb
              icon={<Lambda />}
              title="Lambda Complex"
              description="Engaged in the study of non-standard energy propagation and long-range phase synchronization."
              center
            />

            <Blurb
              icon={<Circuit />}
              title="Applied Systems"
              description="Oversees prototyping and development of novel strategic technologies outside conventional classification."
              center
            />
            <Blurb
              icon={<Simulation />}
              title="Computational Sciences"
              description="Designs and maintains proprietary simulation environments and recursive logic architectures for predictive modeling and data isolation."
              center
            />
            <Blurb
              icon={<Radiation />}
              title="Hazard Response"
              description="Specializes in containment strategy, high-risk material handling, and HEV Suit deployment in volatile and emergent environments."
              center
            />
          </div>
        </section>
        {/* <section className="grid">
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
      </section> */}
      </div>
    </main>
  );
}
