import { MDXProps } from "mdx/types";

// --- import post here ---
import HelloWorld from "./hello-world.mdx";
import ComposingComponents from "./composing-components.mdx";

// --- types ---

interface Post {
  id: number;
  slug: string;
  component: (props: MDXProps) => JSX.Element;
  title: string;
  subhead: string;
}

type PostsType = Post[];

// --- add post to array here ---

export const Posts: PostsType = [
  {
    id: 1,
    slug: "hello-world",
    component: HelloWorld,
    title: "Hello World!",
    subhead: "Welcome to my new web development blog.",
  },
  {
    id: 2,
    slug: "composing-components",
    component: ComposingComponents,
    title: "Composing Components in Next.js",
    subhead:
      "Learn how to compose Server Components and Client Components with the Next.js app router.",
  },
];

// --- utilities ---

export function getPost(slug: string) {
  return Posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return Posts;
}
