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

  const currentActiveIndex = experiences.findIndex((exp) => exp.name === name);

  const goBack = () => {
    const previous = Math.max(currentActiveIndex - 1, 0);
    setActive(experiences[previous].name);
  };
  const goNext = () => {
    const next = Math.min(currentActiveIndex + 1, experiences.length - 1);
    setActive(experiences[next].name);
  };
  return (
    <>
      <div className="flex flex-col text-left sm:flex-row gap-12 py-4 sm:py-16">
        <div className="hidden sm:flex sm:flex-col">
          {experiences.map((exp, i) => {
            return (
              <>
                <div
                  key={i}
                  onClick={() => setActive(exp.name)}
                  className={classNames(
                    active === exp.name
                      ? "text-green bg-primary-light after:h-full"
                      : "text-gray-300 after:h-0",
                    "border-0 sm:border-l-2 w-40 relative font-medium text-lg border-l-gray-500 px-5 py-4 hover:text-green hover:bg-primary-light transition-all cursor-pointer",
                    "after:absolute after:tab-transition after:w-0.5 after:bg-green after:content-[' '] after:bottom-0 after:-left-0.5 inline-block"
                  )}
                >
                  {exp.name}
                </div>
              </>
            );
          })}
        </div>
        <div className="relative w-40 mx-auto block sm:hidden">
          <div className="flex w-40 mx-auto overflow-hidden sm:hidden">
            <span
              className={classNames(
                currentActiveIndex !== 0 ? "text-green" : "text-gray-300",
                "absolute -left-2"
              )}
              onClick={goBack}
            >
              {"<"}
            </span>

            <p
              className={classNames(
                "text-gray-300 w-40 flex-shrink-0 text-center font-medium text-lg"
              )}
            >
              {name}
            </p>

            <span
              className={classNames(
                currentActiveIndex !== experiences.length - 1
                  ? "text-green"
                  : "text-gray-300",
                "absolute -right-2"
              )}
              onClick={goNext}
            >
              {">"}
            </span>
          </div>
        </div>
        <div className="pt-0">
          <h5>
            {role} <mark className="font-mono">@</mark>{" "}
            <Link href={companyUrl}>{name}</Link>
          </h5>
          <p className="text-gray-300 font-mono text-sm font-medium mt-2">
            {joiningDate} - {departureDate ? departureDate : "Present"}
          </p>
          <ul className="pt-12 flex flex-col gap-4">
            {achievements.map((ach, i) => {
              return (
                <li key={i} className="flex gap-5 sm:gap-12">
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
