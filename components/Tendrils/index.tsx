import React, { useEffect, useRef } from "react";
interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {}

const Index: React.FC<Props> = (props) => {
  const ref = useRef(null);
  useEffect(() => {}, []);

  return (
    <canvas ref={ref} className="absolute top-0 left-0" {...props}></canvas>
  );
};
export default Index;
