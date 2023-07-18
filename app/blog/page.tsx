import Link from "next/link";
import { getAllPosts } from "../posts/Posts";
import { ArrowRight } from "react-feather";
import BlogHeader from "@/components/BlogHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jake's Blog",
  description: "Jake Sheehan's web development blog.",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <main className="m-auto max-w-7xl">
      <BlogHeader href="/" />
      <section
        id="posts"
        className="_flex-row _flex-row-gap _flex-col-gap items-center justify-center"
      >
        {posts.map((post) => (
          <article
            className="_blog-post-basis prose-xl flex flex-col items-center justify-start p-8 shadow-lg"
            key={post.id}
          >
            <h2 className="text-center">{post.title}</h2>
            <p className="text-center">{post.subhead}</p>
            <Link className="self-end p-2" href={`/blog/${post.slug}`}>
              <ArrowRight />
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
