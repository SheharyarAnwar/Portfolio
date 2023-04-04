import React, { useState } from "react";
import { Experience, SocialLinks } from "../../types";
import classNames from "classnames";
import Link from "../Link";
import { ListPointerIcon } from "../../../public/assets/icons";

interface Props {
  experiences: Experience[];
}

const VerticalTab: React.FC<Props> = ({ experiences }) => {
  const [active, setActive] = useState<string>(experiences[0].name);
  const { achievements, companyUrl, departureDate, joiningDate, name, role } =
    experiences.find((v) => v.name === active) as Experience;
  return (
    <>
      <div className="flex gap-12">
        <div className="flex flex-row sm:flex-col">
          {experiences.map((exp, i) => {
            return (
              <>
                <div
                  onClick={() => setActive(exp.name)}
                  className={classNames(
                    active === exp.name
                      ? "text-green bg-primary-light after:h-full"
                      : "text-gray-300 after:h-0",
                    "border-l-2 w-40 relative font-medium text-lg border-l-gray-500 px-5 py-4 hover:text-green hover:bg-primary-light transition-all cursor-pointer",
                    "after:absolute after:tab-transition after:w-0.5 after:bg-green after:content-[' '] after:bottom-0 after:-left-0.5 after:inline-block"
                  )}
                >
                  {exp.name}
                </div>
              </>
            );
          })}
        </div>
        <div className="py-4">
          <h5>
            {role} <mark className="font-mono">@</mark>{" "}
            <Link href={companyUrl}>{name}</Link>
          </h5>
          <p className="text-gray-300 font-mono text-sm font-medium mt-2">
            {joiningDate} - {departureDate ? departureDate : "Present"}
          </p>
          <ul className="py-12 flex flex-col gap-4">
            {achievements.map((ach, i) => {
              return (
                <li className="flex gap-12">
                  <span className="mt-2 text-green">
                    <ListPointerIcon width={10} />
                  </span>
                  <span className="max-w-[600px]">{ach}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default VerticalTab;
