import React from "react";
import { Category } from "../layouts";
import { ProjectCardCompact } from "../components";
import { getAllPortfolioFilesData, Portfolio } from "../lib/mdx";
import { NextPage } from "next/types";

const Index: NextPage<{ projects: Portfolio[] }> = ({ projects }) => {
  return (
    <>
      <Category data={projects} cardComponent={ProjectCardCompact}></Category>
    </>
  );
};
export default Index;
export async function getStaticProps() {
  const projects = await getAllPortfolioFilesData();

  return { props: { projects } };
}
