import { notFound } from "next/navigation";
import posts from "@/lib/posts.json";
import Page from "@/components/Post/Page";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}


export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function NewsPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = posts.find((p: Post) => p.slug === slug);
  if (!post) return notFound();

  return (
    <Page
      title={post.title}
      date={post.date}
      content={post.content}
      image={post.image}
      slug={post.slug}
    />
  );
}
