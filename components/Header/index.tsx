import React from "react";
import { Logo } from "../../public/assets/icons";
export interface Props {}
const Index: React.FC<Props> = () => {
  return (
    <div className="h-[100vh] bg-navy w-48">
      <div className="flex flex-col">
        <div className="mt-8 flex-center ">
          <Logo width={60} />
        </div>
      </div>
    </div>
  );
};
export default Index;
