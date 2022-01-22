import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Index: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="mt-8 tracking-widest px-16 py-4 border-[1.5px] text-green border-solid border-green"
      {...props}
    >
      {children}
    </button>
  );
};
export default Index;
