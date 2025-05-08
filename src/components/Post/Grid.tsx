import styles from "./Grid.module.scss";
import Card from "./Card";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

interface PostGridProps {
  posts: Post[];
}

export default function PostGrid({ posts }: PostGridProps) {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <Card
          key={post.slug}
          slug={post.slug}
          title={post.title}
          excerpt={post.excerpt}
          image={post.image}
        />
      ))}
    </div>
  );
}
