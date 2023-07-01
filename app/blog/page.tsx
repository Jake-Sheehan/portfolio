import { getAllPosts } from "@/lib/mock-data";
import Link from "next/link";
import { Lobster } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Blog() {
  const posts = getAllPosts();
  return (
    <main className="m-auto max-w-7xl">
      <header className="mb mb-28 mt-8 flex w-full flex-col items-center justify-center font-bold">
        <Link
          href="/"
          className="ml-8 place-self-start text-lg text-indigo-600 hover:text-black"
        >
          Back
        </Link>
        <h1
          className={`${lobster.className} underline-position-under py-8 text-6xl underline decoration-indigo-600 underline-offset-8`}
        >
          Jake&apos;s Blog
        </h1>
      </header>
      <section
        id="posts"
        className="_flex-row _flex-row-gap _flex-col-gap items-center justify-center"
      >
        {posts.map((post) => {
          return (
            <article
              key={post.id}
              className="_blog-post-basis prose-xl flex flex-col items-center justify-center gap-5 p-8 shadow-lg xl:prose-2xl"
            >
              <h2>{post.title}</h2>
              <p>{post.subhead}</p>
              <Link
                className="rounded bg-indigo-600 p-2 text-white transition-all hover:scale-105 active:scale-95"
                href={`/blog/${post.slug}`}
              >
                Read More
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
