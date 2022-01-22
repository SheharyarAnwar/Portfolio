import React from "react";
import { Logo } from "../../public/assets/icons";

export interface Props {}
const Index: React.FC<Props> = () => {
  const navigationItems = ["About", "Skills", "Work", "Blog", "Contact"].map(
    (val, i) => {
      return (
        <div key={i} className="py-3 w-full hover:text-green cursor-pointer ">
          <p className="text-center font-semibold">{val}</p>
        </div>
      );
    }
  );
  return (
    <header className="col-span-2 col-start-1 bg-navy h-screen sticky top-0">
      <div className="flex flex-row m-auto justify-between w-4/5 md:flex-col md:w-auto">
        <div className="mt-10 flex-center ">
          <Logo width={90} />
        </div>
        <nav className="flex-center flex-row md:flex-col mt-10">
          {navigationItems}
        </nav>
      </div>
    </header>
    // <div className="h-[100vh] bg-navy w-48 fixed">
    //   <div className="flex flex-col">
    //     <div className="mt-10 flex-center ">
    //       <Logo width={90} />
    //     </div>
    //     <nav className="flex-center flex-col mt-10">{navigationItems}</nav>
    //   </div>
    // </div>
  );
};
export default Index;
