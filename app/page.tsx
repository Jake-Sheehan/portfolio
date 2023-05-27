import LinkButton from "@/components/LinkButton";
import GlassPane from "@/components/GlassPane";

export default function Home() {
  return (
    <main className="withBgImage flex min-h-screen flex-col items-center justify-center p-24 text-center">
      <GlassPane flexDirection="col">
        <h2 className="text-3xl font-extrabold text-gray-200 lg:text-5xl">
          Hi, I&apos;m Jake Sheehan.
        </h2>
        <h2 className="text-xl font-extrabold text-gray-300 lg:text-2xl">
          I build software for the web.
        </h2>
        <ul className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <li>
            <LinkButton href="/blog" label="Blog" />
          </li>
          <li>
            <LinkButton href="/projects" label="Projects" />
          </li>
          <li>
            <LinkButton href="/resume" label="Resume" />
          </li>
        </ul>
      </GlassPane>
    </main>
  );
}
