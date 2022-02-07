import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Tag from "../Tag";
interface Props {
  category: string;
  title: string;
  slug: string;
  summary: string;
}
const Index: React.FC<Props> = ({ category, title, summary, slug }) => {
  const [onReadMore, setOnReadMore] = useState(false);

  return (
    <Link href={`blog/${encodeURIComponent(slug)}`}>
      <a>
        <div className="group relative p-12 transition-all mb-12 rounded-xl cursor-pointer bg-secondry">
          <Tag>{category}</Tag>
          <h4 className="mt-8 group-hover:text-green text-white">{title}</h4>
          <p className="my-8 line-clamp-3 text-grey font-medium">{summary}</p>
          <div className="flex justify-between items-center">
            <p
              className="inline font-bold "
              onMouseEnter={() => setOnReadMore(true)}
              onMouseLeave={() => setOnReadMore(false)}
            >
              Read More
            </p>
            <Arrow activate={onReadMore}></Arrow>
          </div>
          <div className=" group-hover:opacity-100 pointer-events-none group-hover:scale-100 scale-95 transition-all absolute top-0 left-0 w-full h-full opacity-0 rounded-xl outline outline-2 outline-green  border-solid border-primary border-8"></div>
        </div>
      </a>
    </Link>
  );
};
export default Index;

const Arrow = ({ activate }: { activate: boolean }) => {
  let head = 3;
  const ref = useRef<HTMLDivElement>(null);

  const playAnimation = (reversed?: boolean) => {
    const children = Array.from(ref.current!.children);
    children.forEach((val, i) => {
      val.animate(
        [{ opacity: !reversed ? 0.5 + (children.length - 1 - i) * 0.2 : 0 }],
        {
          duration: 200,
          delay: i * 100,
          fill: "forwards",
        }
      );
    });
  };
  useEffect(() => {
    if (activate && ref.current) {
      playAnimation();
    }
    if (ref.current && !activate) {
      playAnimation(true);
    }
  }, [activate]);
  return (
    <div className="flex">
      <div className="relative">
        <div className="group-hover:bg-green absolute left-[-20px] top-[5px] w-8 h-[2px] bg-white"></div>
        <div className="w-3 aspect-square border-t-2 border-r-2 border-solid border-white group-hover:border-green rotate-45"></div>
      </div>
      <div ref={ref} className="flex">
        {Array(head)
          .fill(0)
          .map((val, i) => {
            return (
              <div
                key={i}
                className={`w-3 opacity-0 transition-all aspect-square border-t-2 border-r-2 border-solid border-white group-hover:border-green rotate-45 `}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
