import React from "react";
import { Header } from "../../components";
interface Props {}
const Index: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header isBlog />
      <div className=" w-3/5 m-auto pt-24">
        <article className="prose ">{children}</article>
      </div>
    </>
  );
};
export default Index;
