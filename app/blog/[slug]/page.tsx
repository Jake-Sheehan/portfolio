import { notFound } from "next/navigation";
import Link from "next/link";
import Post from "../../posts/blog-post-1.mdx";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main className="m-auto flex max-w-7xl flex-col items-center justify-start gap-1">
      <header className="my-12 flex w-full flex-row items-center justify-start">
        <Link
          href="/blog"
          className="text-lg font-bold text-indigo-600 hover:text-black"
        >
          Back
        </Link>
      </header>
      <Post />
    </main>
  );
}
