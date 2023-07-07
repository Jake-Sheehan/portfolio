import LinkButton from "@/components/LinkButton";
import GlassPane from "@/components/GlassPane";
import { Metadata } from "next";
import { AlertTriangle } from "react-feather";

export const metadata: Metadata = {
  title: "Jake's Portfolio",
  description: "Jake Sheehan's web development portfolio.",
};

export default function Home() {
  return (
    <main className="_withBgImage _dynamic-h-full flex flex-col items-center justify-center p-2 text-center md:min-h-screen">
      <GlassPane flexDirection="col">
        <h2 className="text-4xl font-extrabold text-gray-200 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Hi, I&apos;m Jake Sheehan.
        </h2>
        <h2 className="text-xl font-extrabold text-gray-300 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          I build software for the web.
        </h2>
        <AlertTriangle color="#FBBF24" />
        <p className="text:lg text-amber-400 lg:text-xl">
          This site is still under construction
        </p>
        <ul className="flex flex-row items-center justify-center gap-8">
          <li>
            <LinkButton href="/blog" label="Blog" />
          </li>
          <li>
            <LinkButton href="" label="Projects" disabled />
          </li>
          <li>
            <LinkButton href="" label="Resume" disabled />
          </li>
        </ul>
      </GlassPane>
    </main>
  );
}
