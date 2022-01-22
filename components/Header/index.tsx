import React from "react";
import { Logo } from "../../public/assets/icons";
export interface Props {}
const Index: React.FC<Props> = () => {
  const navigationItems = ["About", "Skills", "Work", "Blog", "Contact"].map(
    (val) => {
      return (
        <div className="py-3 w-full hover:text-green cursor-pointer ">
          <p className="text-center font-semibold">{val}</p>
        </div>
      );
    }
  );
  return (
    <div className="h-[100vh] bg-navy w-48 fixed">
      <div className="flex flex-col">
        <div className="mt-10 flex-center ">
          <Logo width={90} />
        </div>
        <nav className="flex-center flex-col mt-10">{navigationItems}</nav>
      </div>
    </div>
  );
};
export default Index;
