import cn from "classnames";
import React from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  isDisabled?: boolean;
}
const Index: React.FC<Props> = ({
  children,
  isActive,
  isDisabled,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative",
        "hover-border cursor-pointer",
        isDisabled
          ? "pointer-events-none after:content-[''] after:w-full after:h-full after:bg-gray-700 after:absolute after:rounded-full after:top-0 after:left-0 after:opacity-50"
          : "",
        `inline-block text-lg m-2 font-semibold select-none
       before:rounded-full rounded-full bg-secondry py-4 px-8`,
        isActive ? "bg-white text-primary" : null
      )}
      {...props}
    >
      {children}
    </div>
  );
};
export default Index;
