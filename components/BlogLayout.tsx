interface BlogLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    author: string;
  };
}

export default function BlogLayout({ children, meta }: BlogLayoutProps) {
  return (
    <article className="prose lg:prose-lg xl:prose-xl 2xl:prose-2xl">
      <div className="mb-12 text-center">
        <h1>{meta.title}</h1>
        <h3>by {meta.author}</h3>
      </div>
      {children}
    </article>
  );
}
