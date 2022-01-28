import React from "react";
import Tag from "../Tag";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <>
      <div className="p-12 mb-12 rounded-lg bg-navy-accent">
        <Tag>Productivity</Tag>

        <h4 className="my-8">Increase your productivity with VSCode</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sed
        </p>
      </div>
    </>
  );
};
export default Index;
