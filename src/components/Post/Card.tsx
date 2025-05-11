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
    <Link href={`/research/${slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
          quality={75}
        />
      </div>
      <div className={styles.content}>
        <h3><span className="underline-animate thin">{title}</span></h3>
        <p>{excerpt}</p>
      </div>
    </Link>
  );
};

export default Card;
