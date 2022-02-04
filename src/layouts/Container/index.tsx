import React from "react";
import Header from "../../components/Header";
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
      <div className="flex">
        {/* Space for sticky positioned header */}
        <Header />
        <div
          className={`px-6 sm:px-12 md:px-24 lg:pr-20 lg:pl-48 2xl:pr-24 2xl:pl-52 bg-navy ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Index;
