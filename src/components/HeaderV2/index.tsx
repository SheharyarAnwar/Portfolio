import Link from "next/link";
import React from "react";
import { Logo } from "../../../public/assets/icons";
interface Props {}
const Index: React.FC<Props> = () => {
  let nav = ["About", "Work", "Blog", "Snippets", "Contact"];
  return (
    <header className="flex px-24 h-24 fixed w-full z-50 bg-primary justify-between items-center">
      <Logo width={50} />
      <nav className="flex">
        {nav.map((val, i) => {
          return (
            <Link href={`/${val.toLowerCase()}`}>
              <a
                className={`mx-6 group relative text-grey font-bold text-lg hover:text-white`}
              >
                <span className="w-full -bottom-1 scale-x-0 left-0 h-[2px] bg-white absolute group-hover:scale-x-100 transition-transform origin-left"></span>
                {val}
              </a>
            </Link>
          );
        })}
      </nav>
      <div className="w-12 border-solid border-4 rounded-full border-green aspect-square"></div>
    </header>
  );
};
export default Index;
