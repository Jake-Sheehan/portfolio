import { MDXProps } from "mdx/types";

// --- import post here ---
import Post1 from "./blog-post-1.mdx";
import Post2 from "./blog-post-2.mdx";

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
    slug: "blog-post-1",
    component: Post1,
    title: "Test Title",
    subhead: "this is a test. blah blah blah",
  },
  {
    id: 2,
    slug: "blog-post-2",
    component: Post2,
    title: "Test Title 2",
    subhead: "this is a test. blah blah blah",
  },
];

// --- utilities ---

export function getPost(slug: string) {
  return Posts.find((post) => post.slug === slug);
}

export function getAllPosts() {
  return Posts;
}
