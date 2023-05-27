export const data = {
  posts: [
    {
      id: 1,
      slug: "blog-post-1",
      title: "Blog Post 1",
      image: "/city-1.png",
      subhead: "This is my first blog post",
      author: "Jake Sheehan",
      date: new Date("2023-01-15"),
      body: "Magna voluptate laboris elit deserunt quis velit nostrud. Mollit ullamco anim ipsum occaecat ullamco. Do consequat aute eu consectetur. Minim id in aute incididunt veniam excepteur tempor sunt ex officia labore commodo. Tempor aliqua enim ut fugiat velit sint reprehenderit culpa qui elit et cupidatat. Sunt cupidatat dolore ad labore excepteur excepteur adipisicing duis ex velit. Laborum proident nostrud ex eiusmod.",
    },
    {
      id: 2,
      slug: "blog-post-2",
      title: "Blog Post 2",
      image: "/city-1.png",
      subhead: "This is my second blog post",
      author: "Jake Sheehan",
      date: new Date("2023-01-16"),
      body: "Magna voluptate laboris elit deserunt quis velit nostrud. Mollit ullamco anim ipsum occaecat ullamco. Do consequat aute eu consectetur. Minim id in aute incididunt veniam excepteur tempor sunt ex officia labore commodo. Tempor aliqua enim ut fugiat velit sint reprehenderit culpa qui elit et cupidatat. Sunt cupidatat dolore ad labore excepteur excepteur adipisicing duis ex velit. Laborum proident nostrud ex eiusmod.",
    },
    {
      id: 3,
      slug: "blog-post-3",
      title: "Blog Post 3",
      image: "/city-1.png",
      subhead: "This is my third blog post",
      author: "Jake Sheehan",
      date: new Date("2023-01-16"),
      body: "Magna voluptate laboris elit deserunt quis velit nostrud. Mollit ullamco anim ipsum occaecat ullamco. Do consequat aute eu consectetur. Minim id in aute incididunt veniam excepteur tempor sunt ex officia labore commodo. Tempor aliqua enim ut fugiat velit sint reprehenderit culpa qui elit et cupidatat. Sunt cupidatat dolore ad labore excepteur excepteur adipisicing duis ex velit. Laborum proident nostrud ex eiusmod.",
    },
    {
      id: 4,
      slug: "blog-post-4",
      title: "Blog Post 4",
      image: "/city-1.png",
      subhead: "This is my 4th blog post",
      author: "Jake Sheehan",
      date: new Date("2023-01-16"),
      body: "Magna voluptate laboris elit deserunt quis velit nostrud. Mollit ullamco anim ipsum occaecat ullamco. Do consequat aute eu consectetur. Minim id in aute incididunt veniam excepteur tempor sunt ex officia labore commodo. Tempor aliqua enim ut fugiat velit sint reprehenderit culpa qui elit et cupidatat. Sunt cupidatat dolore ad labore excepteur excepteur adipisicing duis ex velit. Laborum proident nostrud ex eiusmod.",
    },
    {
      id: 5,
      slug: "blog-post-5",
      title: "Blog Post 5",
      image: "/city-1.png",
      subhead: "This is my 5th blog post",
      author: "Jake Sheehan",
      date: new Date("2023-01-16"),
      body: "Magna voluptate laboris elit deserunt quis velit nostrud. Mollit ullamco anim ipsum occaecat ullamco. Do consequat aute eu consectetur. Minim id in aute incididunt veniam excepteur tempor sunt ex officia labore commodo. Tempor aliqua enim ut fugiat velit sint reprehenderit culpa qui elit et cupidatat. Sunt cupidatat dolore ad labore excepteur excepteur adipisicing duis ex velit. Laborum proident nostrud ex eiusmod.",
    },
  ],
  projects: [
    {
      id: 1,
      link: "github",
      title: "project 1",
      image: "/city-1.png",
      technology: "typescript | react | nextjs | tailwind",
      description: "this is a project i worked on",
    },
    {
      id: 2,
      link: "github",
      title: "project 2",
      image: "/city-1.png",
      technology: "typescript | react | nextjs | tailwind",
      description: "this is a project i worked on",
    },
    {
      id: 3,
      link: "github",
      title: "project 3",
      image: "/city-1.png",
      technology: "typescript | react | nextjs | tailwind",
      description: "this is a project i worked on",
    },
  ],
};

export interface ProjectType {
  id: number;
  link: string;
  title: string;
  image: string;
  technology: string;
  description: string;
}

export function getAllPosts() {
  return data.posts;
}

export function getPost(slug: string) {
  return data.posts.find((post) => post.slug === slug);
}

export function getProjects() {
  return data.projects;
}
