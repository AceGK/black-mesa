"use client";

import Link from "next/link";
import styles from "./styles.module.scss";

interface Job {
  title: string;
  slug: string;
  location: string;
  salary: string;
  department: string;
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <section className={styles.list}>
      <h2 className={styles.heading}>Open Positions</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.slug} className={styles.card}>
          <Link href={`/careers/${job.slug}`}>
            <div className={styles.header}>
              <h3><span className="underline-animate thin">{job.title}</span></h3>
              <span className={styles.location}>{job.location}</span>
            </div>
            <div className={styles.meta}>
              <span>{job.department}</span>
              <span>{job.salary}</span>
            </div>
          </Link>
        </li>
        ))}
      </ul>
    </section>
  );
}
