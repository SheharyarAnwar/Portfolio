import React from "react";
import cn from "classnames";
interface Props {
  className?: string;
}
const Index: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      style={{ borderRadius: "100vw" }}
      className={cn(
        "border-solid border-green inline-block px-5 py-2 mr-3 mb-3 border-2",
        className
      )}
    >
      <p className="text-sm">{children}</p>
    </div>
  );
};
export default Index;
