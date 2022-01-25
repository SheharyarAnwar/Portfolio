import React from "react";
interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <div className="grid grid-cols-12 py-16 items-center">
      <div className="col-start-1 col-span-5 p-8 row-start-1">
        <p>carousel</p>
      </div>
      <div className="bg-navy-accent col-start-5 col-span-8 p-8 row-start-1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          illo magni reiciendis dicta dolore at officia aliquam blanditiis
          molestias, error consequatur doloribus, soluta totam, fuga ipsum
          sapiente vitae nulla. Non!
        </p>
      </div>
    </div>
  );
};
export default Index;
