import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { getPost } from "@/app/posts/Posts";
import BlogHeader from "@/components/BlogHeader";

// creates pages at build time
export async function generateStaticParams() {
  // get path to blog posts folder
  const dir = path.resolve("./", "app", "posts");
  // read filenames from folder
  let filenames = fs.readdirSync(dir);
  // get filename without extension
  return filenames.map((name) => ({ slug: path.parse(name).name }));
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const Post = getPost(params.slug);
  if (!Post) {
    notFound();
  }
  return (
    <main className="m-auto flex max-w-7xl flex-col items-center justify-start gap-1">
      <BlogHeader href="/blog" />
      <section className="mx-4">
        <Post.component />
      </section>
    </main>
  );
}
