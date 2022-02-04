import React from "react";
import { BlogCard, Container, Tag } from "../components";
interface Props {}
const Index: React.FC<Props> = () => {
  const categories = ["All", "Productivity", "React", "Performance", "Testing"];
  return (
    <>
      <Container>
        <div className="flex flex-col">
          <h2 className="mt-20 mb-10 text-pink">Blog</h2>
          <div className="flex flex-col lg:flex-row  justify-between">
            <h4 className="text-green">Categories</h4>
            <div className="my-8 lg:my-0 ">
              {categories.map((val, i) => {
                const activeClass = "bg-green font-bold text-navy-accent";
                return (
                  <Tag
                    key={i}
                    className={"cursor-pointer ".concat(
                      i === 0 ? activeClass : ""
                    )}
                  >
                    {val}
                  </Tag>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-10 py-16">
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Index;
