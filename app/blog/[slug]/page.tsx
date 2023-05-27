import { getPost } from "@/lib/mock-data";
import { notFound } from "next/navigation";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "400" });

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <main className="m-auto flex max-w-4xl flex-col items-center justify-start gap-1">
      <Image
        src={post.image}
        alt="blog"
        height={350}
        width={500}
        className="mb-4"
      />
      <h2 className="text-4xl">{post.title}</h2>
      <h3 className="text-base">{post.subhead}</h3>
      <h4 className="text-base">by {post.author}</h4>
      <h4 className="mb-8 text-base">{post.date.toDateString()}</h4>
      <p className={`${lato.className} text-base`}>{post.body}</p>
    </main>
  );
}
