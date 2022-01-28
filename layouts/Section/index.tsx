import React from "react";
interface Props {
  title?: string;
}
const Index: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <section className="my-24 flex flex-col">
        <h2 className="text-green mb-12">{title}</h2>
        {children}
      </section>
    </>
  );
};
export default Index;
