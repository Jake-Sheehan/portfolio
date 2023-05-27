import GlassPane from "@/components/GlassPane";

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <section className="withBgImage m-auto flex min-h-screen min-w-full flex-row items-center justify-center">
      <GlassPane flexDirection="row">{children}</GlassPane>
    </section>
  );
}
