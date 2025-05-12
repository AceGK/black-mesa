'use client';

import { notFound } from 'next/navigation';
import styles from './styles.module.scss';
import jobs from '@/lib/jobs.json';
import Button from '@/components/Button';
// import Link from 'next/link';
// import ChevronLeft from '@/assets/icons/chevron-left.svg';

interface Job {
  title: string;
  slug: string;
  description: string;
  salary: string;
  location: string;
  benefits: string[];
}

export default function JobPage({ params }: { params: { slug: string } }) {
  const job: Job | undefined = jobs.find((j) => j.slug === params.slug);

  if (!job) return notFound();

  return (
    <main className={styles.page}>
      {/* <Link href="/careers" className={styles.backButton}>
        <ChevronLeft /> <span className="underline-animate">Back</span>
      </Link> */}
      
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
     
      <Button href="/apply">
      Apply for position
      </Button>
    </main>
  );
}
