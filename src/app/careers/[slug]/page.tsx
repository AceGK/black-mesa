import { notFound } from "next/navigation";
import styles from "./styles.module.scss";
import jobs from "@/lib/jobs.json";
import Button from "@/components/Button";

interface Job {
  title: string;
  slug: string;
  description: string;
  salary: string;
  location: string;
  benefits: string[];
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return jobs.map((job) => ({ slug: job.slug }));
}

export default async function JobPage({
params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const job = jobs.find((j: Job) => j.slug === slug);
  if (!job) return notFound();

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>{job.title}</h1>

      <ul className={styles.meta}>
        <li>
          <h2>Salary</h2>
          <p>{job.salary}</p>
        </li>
        <li>
          <h2>Location</h2>
          <p>{job.location}</p>
        </li>
      </ul>

      <h3 className={styles.subheading}>Description</h3>
      <p className={styles.description}>{job.description}</p>

      <h3 className={styles.subheading}>Benefits</h3>
      <ul className={styles.benefits}>
        {job.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <Button href="/contact">Apply for position</Button>
    </main>
  );
}
