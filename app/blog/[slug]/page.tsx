import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { Metadata, ResolvingMetadata } from "next";
import { getPost } from "@/app/posts/Posts";
import BlogHeader from "@/components/BlogHeader";
import Footer from "@/components/Footer";

// creates pages at build time
export async function generateStaticParams() {
  // get path to blog posts folder
  const dir = path.resolve("./", "app", "posts");
  // read filenames from folder
  let filenames = fs.readdirSync(dir);
  // get filename without extension
  return filenames.map((name) => ({ slug: path.parse(name).name }));
}

// dynamic metadata using title of article
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  const post = getPost(slug);
  if (!post) {
    return {
      title: "not found",
    };
  }
  return {
    title: post.title,
    description: post.subhead,
  };
}

/** Component */
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
    <main className="m-auto my-4 flex max-w-full flex-col items-center justify-start gap-1 lg:max-w-7xl">
      <BlogHeader href="/blog" />
      <section className="mx-4">
        <Post.component />
      </section>
      <Footer />
    </main>
  );
}
