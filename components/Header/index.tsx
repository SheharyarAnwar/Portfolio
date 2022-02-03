import React, { useState } from "react";
import { useBreakpoints } from "../../hooks";
import { CloseIcon, Hamburger, Logo } from "../../public/assets/icons";

export interface Props {}
const Index: React.FC<Props> = () => {
  const { queryBreakpoints } = useBreakpoints();
  const navigationItems = ["About", "Work", "Blog", "Snippets", "Contact"].map(
    (val, i) => {
      return (
        <div
          key={i}
          className="py-3 w-full cursor-pointer border-b-2 border-solid border-grey-light "
        >
          <p className="text-center hover:text-green  font-medium text-grey">
            {val}
          </p>
        </div>
      );
    }
  );
  // console.log(queryBreakpoints("lg"));

  return (
    <>
      {queryBreakpoints("lg") ? (
        <MobileHeader navigationItems={navigationItems} />
      ) : (
        <header className=" md:flex justify-center w-28 bg-navy-accent h-screen fixed top-0 z-50 ">
          <div className=" w-full flex mx-auto flex-col justify-between">
            <div className="flex-center h-80">
              <Logo width={70} />
            </div>
            <nav className="flex-center flex-row md:flex-col">
              {navigationItems}
            </nav>
            <div className="h-80"></div>
          </div>
        </header>
      )}
    </>
  );
};
export default Index;

const MobileHeader: React.FC<{ navigationItems: JSX.Element[] }> = ({
  navigationItems,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="flex justify-between p-6 w-full fixed top-0 bg-navy z-50">
      <div className="z-10"></div>
      <div
        className="w-8 h-8 z-10 cursor-pointer bg-slate-400/20 flex-center"
        onClick={() => setIsDrawerOpen((prev) => !prev)}
      >
        {isDrawerOpen ? (
          <CloseIcon width={"60%"} />
        ) : (
          <Hamburger width={"60%"} />
        )}
      </div>
      {isDrawerOpen && (
        <div className="absolute w-full bg-navy left-0 top-0 h-screen flex">
          <div className="h-4/5 flex flex-col m-auto">
            <div className="flex-center mb-8">
              <Logo width={70} />
            </div>
            {navigationItems}
          </div>
        </div>
      )}
    </header>
  );
};
