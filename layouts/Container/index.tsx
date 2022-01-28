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
          className={`pl-6 pr-6 sm:pl-12 sm:pr-12 md:pl-24 md:pr-24 lg:pr-20 lg:pl-60 2xl:pr-24 2xl:pl-64 bg-navy ${className}`}
        >
          {children}
        </div>
      </div>
    </>
  );
};
export default Index;
