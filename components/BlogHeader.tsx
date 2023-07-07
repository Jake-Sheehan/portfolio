import Link from "next/link";
import { Lobster } from "next/font/google";
const lobster = Lobster({ subsets: ["latin"], weight: "400" });
import { ArrowLeft } from "react-feather";

interface BlogHeaderProps {
  href: string;
}

export default function BlogHeader({ href }: BlogHeaderProps) {
  return (
    <header className="mb mb-12 mt-8 flex w-full flex-col items-center justify-center font-bold">
      <Link
        href={href}
        className="ml-8 place-self-start text-xl text-indigo-600 hover:text-black"
      >
        <ArrowLeft size={36} />
      </Link>
      <h1
        className={`${lobster.className} underline-position-under py-8 text-6xl underline decoration-indigo-600 underline-offset-8`}
      >
        Jake&apos;s Blog
      </h1>
    </header>
  );
}
