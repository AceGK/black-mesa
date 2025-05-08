import Link from 'next/link';
import Image from 'next/image';
import styles from './Card.module.scss';

interface CardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ slug, title, excerpt, image }) => {
  return (
    <div className={styles.card}>
      <Link href={`/research/${slug}`} className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={400}
          height={225}
          className={styles.image}
        />
      </Link>
      <div className={styles.content}>
        <h2>
          <Link href={`/research/${slug}`} className="underline-animate thin">{title}</Link>
        </h2>
        <p>{excerpt}</p>
      </div>
      {/* <Link href={`/research/${slug}`} className={styles.button}>
        View Article
      </Link> */}
    </div>
  );
};

export default Card;
