import React from "react";
interface Props {}
const Index: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="w-12 h-12 rounded-full relative hover:text-green transition-colors shadow-[0px_0px_0px_2px_#999999_inset] ">
        <svg
          width={"100%"}
          height={"100%"}
          className="svg-ring"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="stroke-green"
            cx={50}
            cy={50}
            fill="none"
            r={48}
          ></circle>
        </svg>
        <div className="absolute pointer-events-none w-2/5 h-2/5 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </>
  );
};
export default Index;
