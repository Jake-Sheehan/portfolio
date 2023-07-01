import { getPost } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="m-auto flex max-w-7xl flex-col items-center justify-start gap-1">
      <header className="my-8 flex w-full flex-row items-center justify-start">
        <Link
          href="/blog"
          className="text-lg font-bold text-indigo-600 hover:text-black"
        >
          Back
        </Link>
      </header>
      <article className="mx-12">
        <div className="mb-8 flex flex-col items-center justify-center">
          <h2 className="mb-8 sm:text-7xl xl:text-9xl">{post.title}</h2>
          <h3 className="mb-2 sm:text-xl xl:text-2xl">{post.subhead}</h3>
          <h4 className="mb-2 sm:text-xl xl:text-2xl">by {post.author}</h4>
          <h4 className="sm:text-xl xl:text-2xl">{post.date.toDateString()}</h4>
        </div>
        <p className={`${lato.className} text-2xl leading-relaxed`}>
          {post.body}
        </p>
      </article>
    </main>
  );
}
