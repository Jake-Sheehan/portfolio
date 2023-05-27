import { getAllPosts } from "@/lib/mock-data";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const posts = getAllPosts();
  return (
    <main className="m-auto flex max-w-5xl flex-row items-center justify-center  ">
      <section id="posts" className="flex-box-posts">
        {posts.map((post) => {
          return (
            <article key={post.id} className="flex-posts text-center">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col items-center justify-center gap-2"
              >
                <Image src={post.image} alt="blog" height={400} width={400} />
                <h2 className="text-4xl">{post.title}</h2>
                <p className="text-base">{post.author}</p>
                <p className="text-base">{post.subhead}</p>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
