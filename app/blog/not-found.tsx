import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-row items-center justify-center">
      <p>Sorry, the blog post was not found. </p>
      <br />
      <Link className="text-indigo-600" href="/">
        Home
      </Link>
    </main>
  );
}
