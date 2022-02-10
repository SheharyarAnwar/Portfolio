import React, { useState } from "react";
import { useBreakpoints } from "../../hooks";
import { CloseIcon, Hamburger, Logo } from "../../../public/assets/icons";
import Link from "next/link";
import { useRouter } from "next/router";
export interface Props {
  isBlog?: boolean;
}
const Index: React.FC<Props> = ({ isBlog = false }) => {
  const { queryBreakpoints } = useBreakpoints();
  const router = useRouter();
  const navigationItems = [
    "Home",
    "Portfolio",
    "Blog",
    "Snippets",
    "Contact",
  ].map((val, i) => {
    const href = `/${val.toLowerCase()}`;
    const isActive = router.asPath === href;
    return (
      <Link key={i} href={href}>
        <a className="py-3 w-full cursor-pointer border-b-2 border-solid border-primary ">
          <p
            className={`text-center hover:text-green font-medium  ${
              !isActive ? "text-grey" : "text-green"
            }`}
          >
            {val}
          </p>
        </a>
      </Link>
    );
  });
  let renderedHeader = <MobileHeader navigationItems={navigationItems} />;
  if (!isBlog) {
    renderedHeader = (
      <>
        {queryBreakpoints("lg") ? (
          <MobileHeader navigationItems={navigationItems} />
        ) : (
          <header className=" md:flex justify-center w-28 bg-secondry h-screen fixed top-0 z-50 ">
            <div className=" w-full flex mx-auto flex-col justify-between">
              <div className="flex-center h-80">
                <Link href="/">
                  <a>
                    <Logo width={70} className="cursor-pointer" />
                  </a>
                </Link>
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
  }

  return <>{renderedHeader}</>;
};
export default Index;

const MobileHeader: React.FC<{ navigationItems: JSX.Element[] }> = ({
  navigationItems,
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <header className="flex justify-between p-6 w-full fixed top-0 bg-primary z-50">
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
        <div className="absolute w-full bg-primary left-0 top-0 h-screen flex">
          <div className="h-4/5 flex flex-col m-auto">
            <div className="flex-center mb-8">
              <Link href="/">
                <a>
                  <Logo width={70} className="cursor-pointer" />
                </a>
              </Link>
            </div>
            {navigationItems}
          </div>
        </div>
      )}
    </header>
  );
};
