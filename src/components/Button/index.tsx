import React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
const Index: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className={`overflow-hidden hover:text-navy-accent relative mt-8 mx-auto tracking-widest
       px-16 py-4 outline-[1.5px] text-green outline outline-green 

       before:content[''] before:h-full before:w-full 
       before:scale-x-0 before:absolute before:top-0 before:left-0 before:bg-green
       before:-skew-x-12 before:-z-1 before:duration-500 
       before:hover:scale-x-100 before:hover:skew-x-0 before:transition-all before:origin-top-left
       ${props.className}`}
    >
      <span className="relative z-0"> {children}</span>
    </button>
  );
};
export default Index;
