import React from "react";
import { Header } from "../../components";
import { GreyMatter } from "../../lib/mdx";
interface Props {
  frontMatter: GreyMatter;
}
const Index: React.FC<Props> = ({ children, frontMatter }) => {
  return (
    <>
      <Header isBlog />
      <article className="prose bg-navy m-auto pt-24">
        <div className="pb-20">
          <h1>{frontMatter.title}</h1>
          <div className="flex justify-between">
            <strong className="text-right">{frontMatter.publishDate}</strong>
            <i>10 minute read</i>
          </div>
        </div>
        {children}
      </article>
    </>
  );
};
export default Index;
