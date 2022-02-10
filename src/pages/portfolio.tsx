import React from "react";
import { CategoryLayout } from "../layouts";
import { ProjectCardCompact } from "../components";
import { getAllPortfolioFilesData, Portfolio } from "../lib/mdx";
import { NextPage } from "next/types";

const Index: NextPage<{ projects: Portfolio[] }> = ({ projects }) => {
  return (
    <>
      <CategoryLayout
        data={projects}
        cardComponent={ProjectCardCompact}
      ></CategoryLayout>
    </>
  );
};
export default Index;
export async function getStaticProps() {
  const projects = await getAllPortfolioFilesData();

  return { props: { projects } };
}
