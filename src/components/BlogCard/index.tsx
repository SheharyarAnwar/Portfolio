import React from "react";
import Tag from "../Tag";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <>
      <div className="group p-12 transition-colors mb-12 rounded-xl cursor-pointer bg-navy-accent">
        <Tag>Productivity</Tag>
        <h4 className="mt-8 group-hover:text-green">
          Increase your productivity with VSCode
        </h4>
        <p className="my-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
        </p>
        <p className=" font-bold ">Read More</p>
      </div>
    </>
  );
};
export default Index;
