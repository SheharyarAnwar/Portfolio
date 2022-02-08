import React from "react";

import { HeaderV2 } from "../../components";
interface Props {
  /**
   * Give classnames to the wrapper component of container children
   */
  className?: string | undefined;
}
/**
 * Container components ensures that the children fit into the 10 out of 12 grid columns
 * where 3 are reserved for header
 */
const Index: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <div className="flex flex-col">
        {/* <Header /> */}
        <HeaderV2 />
        <div
          className={`px-6 text-center xs:text-left sm:px-12 md:px-24 xl:px-40 mt-32 bg-primary ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Index;
