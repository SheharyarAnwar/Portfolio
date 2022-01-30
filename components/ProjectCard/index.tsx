import React from "react";
import Image from "next/image";
interface Props {
  reversed?: Boolean;
}
const Index: React.FC<Props> = ({ reversed = false }) => {
  let leftClass =
    "col-start-2 row-start-2 col-span-10 lg:col-start-1 lg:col-span-7 lg:row-start-1";
  let rightClass =
    "col-start-1 row-start-1 col-span-12 lg:col-start-7 lg:col-span-6 lg:row-start-1 z-10";
  if (reversed) {
    rightClass =
      "col-start-1 row-start-1 col-span-12 lg:col-start-1 lg:col-span-6 lg:row-start-1 z-10";
    leftClass =
      "col-start-2 row-start-2 col-span-10 lg:col-start-6 lg:col-span-7 lg:row-start-1";
  }
  return (
    <div className="grid grid-cols-12 py-16 items-center">
      <div className={leftClass + " relative"}>
        {/* {TODO: Carousel} */}
        <Image
          src="/assets/images/Templific/background.png"
          height={768}
          width={1366}
          layout="responsive"
          alt="bg"
          priority
        />
        {/* <div
          className={`absolute w-full h-full top-0 left-0 bg-navy opacity-80 hover:opacity-0`}
        ></div> */}
      </div>
      <div
        className={
          rightClass + " h-full grid grid-cols-12 grid-rows-3 relative"
        }
      >
        <div
          className={`col-span-full self-center justify-self-center ${
            reversed ? "lg:justify-self-start" : "lg:justify-self-end"
          }`}
        >
          <p className="text-center lg:text-left text-green text-base mb-2">
            Web application
          </p>
          <h3 className="text-center lg:text-left">Templific</h3>
        </div>
        <p className="p-8 lg:bg-navy-accent col-span-12 self-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          illo magni reiciendis dicta dolore at officia aliquam blanditiis
          molestias,
        </p>

        <div
          className={`col-span-full justify-self-center lg:justify-self-${
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
