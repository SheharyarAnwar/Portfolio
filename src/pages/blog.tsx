import React from "react";
import { BlogCard } from "../components";
import { Category } from "../layouts";
import { getAllFilesFrontMatter, GreyMatter } from "../lib/mdx";
interface Props {
  posts: Array<GreyMatter>;
}

const Index: React.FC<Props> = ({ posts }) => {
  return (
    <Category
      //@ts-ignore
      title="Blog - Sheharyar Anwar"
      description="Thoughts about the things I learn, software I make and the processes I follow"
      data={posts}
      cardComponent={BlogCard}
    />
  );
};
export default Index;

export async function getStaticProps() {
  const metaData = await getAllFilesFrontMatter("blog");
  return { props: { posts: metaData } };
}
