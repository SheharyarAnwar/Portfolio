import Link from "next/link";
import cn from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { CloseIcon, Hamburger, Logo } from "../../../public/assets/icons";
import { IconContainer } from "..";
interface Props {}
const Index: React.FC<Props> = () => {
  let nav = ["Home", "Portfolio", "Blog", "Snippets"];
  // "Skills", "Goodies", "Snippets"
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  return (
    <header className="fixed w-full z-50 flex flex-col">
      <div className="px-6 sm:px-12 flex md:px-24 xl:px-40 h-32 bg-primary justify-between items-center">
        <Link href="/">
          <a className="w-12 text-green">
            <Logo width={"100%"} />
          </a>
        </Link>
        <nav className="hidden lg:flex">
          {nav.map((val, i) => {
            const href = `${val !== "Home" ? "/" + val.toLowerCase() : "/"}`;
            let routerPath = router.asPath;
            if (new RegExp(/\/.+\//g).test(routerPath)) {
              routerPath = routerPath
                .split("")
                .slice(0, routerPath.length - 1)
                .join("");
            }
            const isActive = routerPath === href;
            const anchorClass = isActive ? "text-white" : "text-grey";
            const spanClass = isActive ? "scale-x-100" : "scale-x-0";
            return (
              <Link key={i} href={href}>
                <a
                  className={cn(
                    `mx-6 group relative font-semibold text-lg hover:text-white`,
                    anchorClass
                  )}
                >
                  <span
                    className={cn(
                      "w-full -bottom-1 left-0 h-[2px] bg-white absolute group-hover:scale-x-100 transition-transform origin-left",
                      spanClass
                    )}
                  ></span>
                  {val}
                </a>
              </Link>
            );
          })}
        </nav>
        <div className="flex">
          <div
            onClick={() => setIsDrawerOpen((prev) => !prev)}
            className="block lg:hidden w-12 h-12 cursor-pointer sm:w-16 sm:h-16 flex-center"
          >
            <IconContainer>
              {isDrawerOpen ? <CloseIcon /> : <Hamburger />}
            </IconContainer>
          </div>
        </div>
        {/* <div className="ml-4 lg:ml-0 w-12 cursor-pointer hover:border-white sm:w-16 border-solid border-2 rounded-full border-grey aspect-square"></div> */}
      </div>
      {isDrawerOpen && (
        <div className="relative h-[calc(100vh-8rem)] overflow-auto flex flex-col w-full bg-primary lg:hidden">
          {nav.map((val, i) => {
            const href = `${val !== "Home" ? "/" + val.toLowerCase() : "/"}`;
            return (
              <Link href={href} key={i}>
                <a className=" px-6 sm:px-12 md:px-24 py-12 border-t border-b border-gray-500 border-solid  bg-primary hover:bg-secondry ">
                  {val}
                </a>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
export default Index;
