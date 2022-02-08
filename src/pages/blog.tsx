import React from "react";
import { BlogCard } from "../components";
import { CategoryLayout } from "../layouts";
import { getAllFilesFrontMatter, GreyMatter } from "../lib/mdx";
interface Props {
  posts: Array<GreyMatter>;
}

const Index: React.FC<Props> = ({ posts }) => {
  return <CategoryLayout data={posts} cardComponent={BlogCard} />;
};
export default Index;

export async function getStaticProps() {
  const metaData = await getAllFilesFrontMatter("blog");
  return { props: { posts: metaData } };
}
