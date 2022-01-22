import React from "react";
interface Props {
  text: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
}
const Index: React.FC<Props> = ({ text, level }) => {
  let commonClasses = "inline-block hover:text-green";
  const animationKeyframes = (
    keyFrames: number,
    xAmp: number,
    yAmp: number,
    holdKeyFrame?: number
  ) => {
    let arr = [];
    for (let i = 1; i <= keyFrames; i++) {
      holdKeyFrame && holdKeyFrame--;
      let matrix = null;
      if (i % 2 !== 0) {
        let decayX = 1 + Math.abs(xAmp - 1) / i;
        let decayY = 1 + Math.abs(yAmp - 1) / i;
        matrix = `matrix(${decayX},0,0,${decayY},0,0)`;
      } else {
        matrix = `matrix(1,0,0,1,0,0)`;
      }
      arr.push({
        transform: matrix,
      });
    }
    return arr;
  };

  console.log("animationKeyfreames", animationKeyframes(10, 1.3, 0.8));
  const handleMouseEnter = (event: MouseEvent) => {
    const element = event.target;
    //@ts-ignore
    element.animate(animationKeyframes(10, 1.3, 0.8), {
      duration: 1000,
    });
  };
  let createHeading = (string: string) => {
    return React.createElement(
      `h${level}`,
      { className: commonClasses, onMouseEnter: handleMouseEnter },
      string
    );
  };
  const destructureString = (string: string) => {
    return string.split("").map((val) => {
      return createHeading(val);
    });
  };

  return <>{destructureString(text)}</>;
};
export default Index;
