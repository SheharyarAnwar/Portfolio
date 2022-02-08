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
        !isDisabled
          ? "hover-border cursor-pointer"
          : "after:content-[''] after:w-full after:h-full after:bg-gray-400 after:absolute after:rounded-full after:top-0 after:left-0 after:opacity-30",
        `inline-block text-lg m-2 font-semibold
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
