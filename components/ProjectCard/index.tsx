import React from "react";
import Image from "next/image";
interface Props {
  reversed?: Boolean;
}
const Index: React.FC<Props> = ({ reversed = false }) => {
  let rightClass = "col-start-1 col-span-7 row-start-1";
  let leftClass = "col-start-7 col-span-6 row-start-1 z-10";
  if (reversed) {
    leftClass = "col-start-1 col-span-6 row-start-1 z-10";
    rightClass = "col-start-6 col-span-7 row-start-1";
  }
  return (
    <div className="grid grid-cols-12 py-16 items-center">
      <div className={rightClass}>
        <Image
          src="/assets/images/Templific/background.png"
          height={768}
          width={1366}
          objectFit="fill"
          alt="bg"
          priority
        />
      </div>
      <div className={leftClass + " h-full grid grid-cols-12 grid-rows-3"}>
        <div
          className={`col-span-full self-center justify-self-${
            reversed ? "start" : "end"
          }`}
        >
          <p className="text-green text-base mb-2">Web application</p>
          <h3 className="">Templific</h3>
        </div>
        <p className="p-8 bg-navy-accent col-span-12 self-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          illo magni reiciendis dicta dolore at officia aliquam blanditiis
          molestias,
        </p>

        <div
          className={`col-span-full justify-self-${
            reversed ? "start" : "end"
          } self-center flex mb-2 gap-8 font-mono text-green`}
        >
          <p>React</p>
          <p>Mongodb</p>
          <p>Nodejs</p>
        </div>
      </div>
    </div>
  );
};
export default Index;
