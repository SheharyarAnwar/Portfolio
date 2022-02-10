import React, { useMemo } from "react";
import { getFileBySlug, getFiles } from "../../lib/mdx";
import { getMDXComponent } from "mdx-bundler/client";
import { Blog } from "../../layouts";
interface Props {}
const Index: React.FC<any> = ({ code, frontMatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Blog frontMatter={frontMatter}>
        <Component />
      </Blog>
    </>
  );
};
export default Index;

export async function getStaticPaths() {
  const posts = await getFiles("blog");

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ""),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: Record<string, string>;
}) {
  const post = await getFileBySlug("blog", params.slug);

  return { props: { ...post } };
}
