import Header from "@/components/Header";
import JobList from "@/components/JobList";
import jobs from "@/lib/jobs.json";

export default function Careers() {
  return (
    <main>
      <Header title="careers" backgroundImage="/images/3.jpg" />
      <div className="container">
        <section className="flex-grid">
          <div>
            <p>
              <span className="minimal-title">Black Mesa Research Facility</span> is a secure research complex
              conducting high-level investigations across a spectrum of advanced
              scientific disciplines — from theoretical physics to robotics,
              biotechnology, and experimental propulsion.
            </p>
            <p>
              Our personnel include members of the Black Mesa Science Team,
              Operations, Containment, and Security Divisions, all contributing
              to classified projects with global implications. Black Mesa offers
              unique opportunities for professionals willing to operate at the
              frontier of innovation, in a fast-paced and confidential
              environment.
            </p>
          </div>
          <div>
            <p>
            If you're motivated by scientific discovery, technical excellence, and the pursuit of meaningful innovation, we invite you to explore our current opportunities at Black Mesa.
            </p>
            <p>
              We are an equal opportunity employer. All qualified applicants
              will receive consideration for employment without regard for race,
              color, religion, sex, sexual orientation, gender identity,
              national origin, disability, or veteran status.
            </p>
          </div>
        </section>
        <JobList jobs={jobs} />
      </div>
    </main>
  );
}
