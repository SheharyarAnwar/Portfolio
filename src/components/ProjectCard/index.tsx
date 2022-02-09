import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Portfolio } from "../../lib/mdx";
import Link from "next/link";
interface Props extends Portfolio {
  reversed?: Boolean;
}
const Index: React.FC<Props> = ({
  reversed = false,
  category,
  githubUrl,
  hero,
  name,
  previewUrl,
  slug,
  summary,
  techStack,
}) => {
  const fallbackSrc = "/assets/images/portfolio/default.png";
  const [imgSrc, setImgSrc] = useState(hero);
  // console.log(imgSrc, "src");
  let leftClass =
    "col-start-2 row-start-2 col-span-10 lg:col-start-1 lg:col-span-7 lg:row-start-1";
  let rightClass =
    "col-start-1 row-start-1 col-span-12 lg:col-start-7 lg:col-span-6 lg:row-start-1 z-10";
  if (reversed) {
    rightClass =
      "col-start-1 row-start-1 col-span-12 lg:col-start-1 lg:col-span-6 lg:row-start-1 z-10";
    leftClass =
      "col-start-2 row-start-2 col-span-10 lg:col-start-6 lg:col-span-7 lg:row-start-1";
  }
  return (
    <div className="grid grid-cols-12 py-16 items-center">
      <Link href={`/portfolio/${slug}`}>
        <div className={leftClass + " relative group"}>
          {/* {TODO: Carousel} */}
          <Image
            src={imgSrc}
            height={768}
            width={1366}
            layout="responsive"
            alt={name}
            priority
            onLoadingComplete={(result) => {
              if (result.naturalWidth === 0) {
                // Broken image
                setImgSrc(fallbackSrc);
              }
            }}
          />
          <div
            className={`transition-opacity absolute w-full h-full top-0 left-0 bg-primary opacity-0 group-hover:opacity-80 flex-center cursor-pointer`}
          >
            <h5>View case study</h5>
          </div>
        </div>
      </Link>
      <div
        className={
          rightClass +
          " h-full grid grid-cols-12 grid-rows-3 relative pointer-events-none"
        }
      >
        <div
          className={`col-span-full self-center justify-self-center ${
            reversed ? "lg:justify-self-start" : "lg:justify-self-end"
          }`}
        >
          <p className="text-center lg:text-left text-green text-base mb-2">
            {category}
          </p>
          <h3 className="text-center lg:text-left">{name}</h3>
        </div>
        <p className="p-8 lg:bg-secondry col-span-12 self-center">{summary}</p>

        <div
          className={`col-span-full justify-self-center lg:justify-self-${
            reversed ? "start" : "end"
          } self-center flex mb-2 gap-8 font-mono text-green`}
        >
          {techStack.map((val, i) => (
            <p key={i}>{val}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Index;
