import styles from "@/styles/home.module.scss";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import posts from "@/lib/posts.json";
import Card from "@/components/Post/Card";
// import ApplyFooter from "@/components/ApplyFooter";

export default function Home() {
  const visiblePosts = posts.slice(0, 3);

  return (
    <>
      <Hero />
      <main className={styles.main}>
        <div className="container">
          <section className={styles.intro}>
            <h2 className="serif">Working to make a better tomorrow <em>for all mankind.</em></h2>
            <p>
              Pushing the frontiers of quantum mechanics, dimensional field
              theory, and advanced defense technologies, Black Mesa conducts
              pioneering research across a broad range of disciplines —
              including theoretical physics, experimental propulsion systems,
              robotics, genetics, and applied mathematics.
            </p>
          </section>
          <section className={styles.highlight}>
            <Highlight
              imageSrc="/images/1.jpg"
              title=""
              linkText="About BMRF"
              href="/about"
              showLogo
            >
              <h2 className="minimal-title">company</h2>
              <p>
                The Black Mesa Research Facility operates beyond the thresholds of established
                science, pursuing outcomes that challenge foundational
                assumptions and extend the frontier of applied knowledge.
                Through strategic alignments with federal entities and select
                industrial partners, we maintain rigorous experimental
                governance protocols while advancing initiatives to to reshape
                infrastructure, policy, and perception.
              </p>
            </Highlight>
          </section>
          <section style={{ marginBottom: "8rem" }}>
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
        {/* <ApplyFooter /> */}
      </main>
    </>
  );
}
