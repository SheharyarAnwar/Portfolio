import React, { useMemo, useState } from "react";
import { BlogCard, Container, Tag } from "../components";
import { getAllFilesFrontMatter, GreyMatter } from "../lib/mdx";
interface Props {
  posts: Array<GreyMatter>;
}

const Index: React.FC<Props> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = Array.from(
    new Set(["All", ...(posts as Array<any>).map((val) => val.category)])
  );

  const cards = useMemo(
    () =>
      posts
        .filter((val) => {
          if (selectedCategory === "All") {
            return true;
          } else {
            return val.category === selectedCategory;
          }
        })
        .map((val, i) => {
          return <BlogCard key={i} {...val} />;
        }),
    [selectedCategory]
  );

  // const categories = ["All", "Productivity", "React", "Performance", "Testing"];
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <h2 className="mt-20 mb-10 text-pink">Blog</h2>
          <div className="flex flex-col lg:flex-row  justify-between">
            <h4 className="text-green">Categories</h4>
            <div className="my-8 lg:my-0 ">
              {categories.map((val, i) => {
                const activeClass = "bg-green  text-navy-accent";
                return (
                  <span onClick={() => setSelectedCategory(val)}>
                    <Tag
                      key={i}
                      className={"cursor-pointer font-bold ".concat(
                        selectedCategory === val ? activeClass : ""
                      )}
                    >
                      {val}
                    </Tag>
                  </span>
                );
              })}
            </div>
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
