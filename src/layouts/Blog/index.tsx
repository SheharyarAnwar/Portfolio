import Link from "next/link";
import React from "react";
import { Button } from "../../components";
import { GreyMatter } from "../../lib/mdx";
import Container from "../Container";
interface Props {
  frontMatter: GreyMatter;
}
const Index: React.FC<Props> = ({ children, frontMatter }) => {
  return (
    <>
      <Container
        title="Blog - Sheharyar Anwar"
        description={frontMatter.summary}
      >
        <article className="prose prose-base md:prose-lg bg-primary max-w-none w-full m-auto mb-32">
          <div className="pb-8">
            <p className="text-green text-center">{frontMatter.category}</p>
            <h1 className="text-center leading-[1.3]">{frontMatter.title}</h1>
          </div>
          <div className="text-left">{children}</div>
        </article>

        <div className="flex flex-col justify-center items-center mb-16">
          <Link href="/blog">
            <a>
              <Button>Back to blog</Button>
            </a>
          </Link>
        </div>
      </Container>
    </>
  );
};
export default Index;
