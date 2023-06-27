import Link from "next/link";
import { Lilita_One } from "next/font/google";

const lilita_one = Lilita_One({ weight: "400", subsets: ["latin"] });

export default function LinkButton({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <Link
      href={href}
      className={`${lilita_one.className} text-base tracking-widest text-blue-200 transition-all hover:text-blue-400 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
    >
      {label}
    </Link>
  );
}
