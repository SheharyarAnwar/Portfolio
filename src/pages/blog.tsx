import React, { useMemo, useState } from "react";
import { BlogCard, CTag } from "../components";
import { Container } from "../layouts";
import { getAllFilesFrontMatter, GreyMatter } from "../lib/mdx";
interface Props {
  posts: Array<GreyMatter>;
}

const Index: React.FC<Props> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  // console.log(posts);
  const categories = Array.from(
    new Set(
      [
        "all",
        "typescript",
        ...(posts as Array<any>).map((val) => [...val.allCategories]),
      ].flat()
    )
  );

  const cards = useMemo(
    () =>
      posts
        .filter((val) => {
          if (selectedCategory === "all") {
            return true;
          } else {
            return val.allCategories.includes(selectedCategory);
          }
        })
        .map((val, i) => {
          return <BlogCard key={i} {...val} />;
        }),
    [selectedCategory]
  );
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <div className="my-8 ">
            {categories.map((val, i) => (
              <CTag
                key={i}
                isActive={selectedCategory === val}
                onClick={() => setSelectedCategory(val)}
              >
                {val}
              </CTag>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-10 py-16">
            {cards}
          </div>
        </div>
      </Container>
    </>
  );
};
export default Index;

export async function getStaticProps() {
  const metaData = await getAllFilesFrontMatter("blog");
  return { props: { posts: metaData } };
}
