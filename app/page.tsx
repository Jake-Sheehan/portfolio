import LinkButton from "@/components/LinkButton";
import GlassPane from "@/components/GlassPane";

export default function Home() {
  return (
    <main className="withBgImage _dynamic-h-full flex flex-col items-center justify-center p-2 text-center md:min-h-screen">
      <GlassPane flexDirection="col">
        <h2 className="text-4xl font-extrabold text-gray-200 md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
          Hi, I&apos;m Jake Sheehan.
        </h2>
        <h2 className="text-xl font-extrabold text-gray-300 md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          I build software for the web.
        </h2>
        <p className="text-xl text-amber-400">
          This site is still under construction...
        </p>
        <ul className="flex flex-col items-center justify-center gap-8 md:flex-row">
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
