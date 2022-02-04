import React, { useCallback, useEffect, useRef } from "react";
import { ElasticAnimatableText } from "../../components";
import { useInView } from "react-intersection-observer";
interface Props {
  title: string;
}
const Index: React.FC<Props> = ({ title, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (inView && ref.current) {
      ref.current.animate(
        [
          { opacity: 0, transform: "translateY(50px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        {
          duration: 500,
          fill: "forwards",
        }
      );
    }
  }, [inView]);
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );
  return (
    <>
      <section className="my-24 flex flex-col">
        <div className="text-green mb-12">
          <ElasticAnimatableText level={2} text={title} stagger={true} />
        </div>
        {/* <h2>{title}</h2> */}
        <div className="flex flex-col" ref={setRefs} style={{ opacity: 0 }}>
          {children}
        </div>
      </section>
    </>
  );
};
export default Index;
