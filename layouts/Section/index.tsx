import React from "react";
import { ElasticAnimatableText } from "../../components";
interface Props {
  title: string;
}
const Index: React.FC<Props> = ({ title, children }) => {
  return (
    <>
      <section className="my-24 flex flex-col">
        <div className="text-green mb-12">
          <ElasticAnimatableText level={2} text={title} stagger={true} />
        </div>
        {/* <h2>{title}</h2> */}
        {children}
      </section>
    </>
  );
};
export default Index;
