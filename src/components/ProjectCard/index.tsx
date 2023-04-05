import React, { useState } from "react";
import Image from "next/image";
import { Portfolio } from "../../lib/mdx";
import { GithubIcon, LinkIcon } from "../../../public/assets/icons";
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
  allCategories,
}) => {
  const fallbackSrc = "/assets/images/portfolio/default.png";
  const [imgSrc, setImgSrc] = useState(hero);
  // console.log(imgSrc, "src");
  let leftClass =
    "col-start-1 row-start-2 col-span-12 lg:col-start-1 lg:col-span-7 lg:row-start-1";
  let rightClass =
    "col-start-1 row-start-1 col-span-12 lg:col-start-7 lg:col-span-6 lg:row-start-1 z-10";
  if (reversed) {
    rightClass =
      "col-start-1 row-start-1 col-span-12 lg:col-start-1 lg:col-span-6 lg:row-start-1 z-10";
    leftClass =
      "col-start-1 row-start-2 col-span-12 lg:col-start-6 lg:col-span-7 lg:row-start-1";
  }
  return (
    <div className="grid grid-cols-12 py-4 sm:py-16 items-center">
      <div className={leftClass + " relative cursor-pointer static-border"}>
        <a href={previewUrl} rel="noreferrer" target="_blank">
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
        </a>
      </div>

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
        <p className="text-center lg:text-left lg:p-8 lg:bg-secondry col-span-12 self-center">
          {summary}
        </p>

        <div
          className={`col-span-full justify-self-center lg:justify-self-${
            reversed ? "start" : "end"
          } self-center  font-mono text-green`}
        >
          <div className="flex  justify-center sm:justify-start mb-4 gap-8 flex-wrap">
            {allCategories.map((val, i) => (
              <p key={i}>{val}</p>
            ))}
          </div>

          <div
            className={`flex pointer-events-auto ${
              reversed ? "lg:justify-start" : "lg:justify-end"
            } justify-center gap-8 my-8 lg:mb-4`}
          >
            {githubUrl.length > 0 && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-white hover:text-green"
              >
                <GithubIcon width={20} />
              </a>
            )}

            {previewUrl.length > 0 && (
              <a
                href={previewUrl}
                target="_blank"
                rel="noreferrer"
                className="cursor-pointer text-white hover:text-green"
              >
                <LinkIcon width={20} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
