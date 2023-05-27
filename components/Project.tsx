import { ProjectType } from "@/lib/mock-data";
import Image from "next/image";

interface ProjectProps {
  data: ProjectType;
}

export default function Project({ data }: ProjectProps) {
  return (
    <article className="flex-projects flex flex-col items-center justify-center rounded-2xl bg-gray-200/10 p-12 text-gray-100 transition-all hover:scale-105 hover:bg-gray-200/20">
      <Image src={data.image} alt="project" height={200} width={200} />
      <h2>{data.title}</h2>
      <h3>{data.technology}</h3>
      <h4>{data.description}</h4>
    </article>
  );
}
