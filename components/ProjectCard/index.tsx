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
        />
      </div>
      <div className={leftClass}>
        <p className="text-right p-8 bg-navy-accent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          illo magni reiciendis dicta dolore at officia aliquam blanditiis
          molestias,
        </p>
      </div>
    </div>
  );
};
export default Index;
