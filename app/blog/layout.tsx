import { Lobster } from "next/font/google";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <>
      <header className="mb-12 mt-8 flex w-full flex-row items-center justify-center font-bold">
        <h1
          className={`${lobster.className} underline-position-under py-8 text-6xl underline decoration-indigo-600 underline-offset-8`}
        >
          Jake&apos;s Blog
        </h1>
      </header>
      {children}
    </>
  );
}
