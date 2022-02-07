import Link from "next/link";
import React from "react";
import { Button, Header } from "../../components";
import { GreyMatter } from "../../lib/mdx";
interface Props {
  frontMatter: GreyMatter;
}
const Index: React.FC<Props> = ({ children, frontMatter }) => {
  return (
    <>
      <Header isBlog />
      <article className="prose prose-base md:prose-lg bg-navy m-auto px-8 mt-16 mb-32">
        <div className="py-16">
          <p className="text-green text-center">{frontMatter.category}</p>
          <h1 className="text-center leading-4">{frontMatter.title}</h1>
        </div>
        {children}
      </article>

      <div className="flex flex-col justify-center items-center mb-16">
        <Link href="/blog">
          <a>
            <Button>Back to blog</Button>
          </a>
        </Link>
      </div>
    </>
  );
};
export default Index;
