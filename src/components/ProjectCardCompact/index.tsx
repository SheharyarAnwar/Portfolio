import React from "react";
import { GithubIcon, LinkIcon } from "../../../public/assets/icons";
import { Portfolio } from "../../lib/mdx";
export interface IProjectCardCompact extends Portfolio {}
const Index: React.FC<IProjectCardCompact> = ({
  category,
  githubUrl,
  name,
  previewUrl,
  summary,
}) => {
  return (
    <>
      <div className="bg-secondry flex flex-col justify-between rounded-2xl p-12 hover-border">
        <div>
          <h3>{name}</h3>
          <p className="text-green my-4">{category}</p>
          <p className="text-grey line-clamp-3 ">{summary}</p>
        </div>
        <div
          className={`flex pointer-events-auto  justify-center gap-8 my-8 lg:mb-4`}
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
    </>
  );
};
export default Index;
