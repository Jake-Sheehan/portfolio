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
            <article key={post.id} className="_blog-post-basis p-8 shadow-lg">
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col items-center justify-center gap-5"
              >
                <h2 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
                  {post.title}
                </h2>
                <p className="text-base">{post.subhead}</p>
              </Link>
            </article>
          );
        })}
      </section>
    </main>
  );
}
