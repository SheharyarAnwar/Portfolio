import React from "react";
import { Header } from "../../components";
interface Props {}
const Index: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header isBlog />

      <article className="prose prose-stone m-auto pt-24">{children}</article>
    </>
  );
};
export default Index;
