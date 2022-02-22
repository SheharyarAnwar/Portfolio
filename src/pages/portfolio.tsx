import React from "react";
import { Category } from "../layouts";
import { ProjectCardCompact } from "../components";
import { getAllPortfolioFilesData, Portfolio } from "../lib/mdx";
import { NextPage } from "next/types";

const Index: NextPage<{ projects: Portfolio[] }> = ({ projects }) => {
  return (
    <>
      <Category
        //@ts-ignore
        title="Sheharyar Anwar – Portfolio"
        description={`Some things I have made. Personal and client projects`}
        data={projects}
        cardComponent={ProjectCardCompact}
      ></Category>
    </>
  );
};
export default Index;
export async function getStaticProps() {
  const projects = await getAllPortfolioFilesData();

  return { props: { projects } };
}
