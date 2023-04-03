import classNames from "classnames";
import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
export type ElasticAnimatableTextProps =
  | {
      text: string;
      level: HeadingLevels;
      stagger?: boolean;
      onAnimationDone?: () => void;
      inlineStaggerDelay?: number;
      blockStagger?: never;
      previousBlockSize?: never;
      className?: string;
      containerClassName?: string;
    }
  | {
      text: string;
      level: HeadingLevels;
      onAnimationDone?: () => void;
      stagger?: boolean;
      inlineStaggerDelay?: number;
      blockStagger: boolean;
      previousBlockSize: number;
      className?: string;
      containerClassName?: string;
    };

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
const Index: React.FC<ElasticAnimatableTextProps> = ({
  text,
  level,
  stagger = false,
  inlineStaggerDelay = 100,
  blockStagger = false,
  previousBlockSize = 0,
  className,
  containerClassName,
  onAnimationDone,
}) => {
  let commonClasses = "inline-block hover:text-green scale-0";
  const { ref, inView } = useInView({ triggerOnce: true });
  const blockStaggerDelay = blockStagger
    ? inlineStaggerDelay * previousBlockSize
    : 0;
  const refArray = useRef<Array<any>>([]);
  const keyFrameArr: React.CSSProperties[] = [
    { transform: "scale3d(1, 1, 1)" },
    { transform: "scale3d(1.25, 0.75, 1)", offset: 0.3 },
    { transform: "scale3d(0.75, 1.25, 1)", offset: 0.4 },
    { transform: "scale3d(1.15, 0.85, 1)", offset: 0.5 },
    { transform: "scale3d(0.95, 1.05, 1)", offset: 0.65 },
    { transform: "scale3d(1.05, 0.95, 1)", offset: 0.75 },
    { transform: "scale3d(1, 1, 1)" },
  ];
  useEffect(() => {
    if (inView && stagger) {
      refArray.current.forEach((val, i) => {
        val.animate([{ transform: "scale3d(0,0,0)" }, ...keyFrameArr], {
          duration: 1000,
          delay: inlineStaggerDelay * i + blockStaggerDelay,
          fill: "forwards",
        }).onfinish = () => onAnimationDone?.();
      });
    }
  }, [inView]);

  const handleMouseEnter = (event: MouseEvent) => {
    const element = event.target;
    //@ts-ignore
    element.animate(keyFrameArr, {
      duration: 1000,
    });
  };
  let createHeading = (string: string, key: number) => {
    return React.createElement(
      `h${level}`,
      {
        className: classNames(commonClasses, className),
        onMouseEnter: handleMouseEnter,
        key,
        ref: (el: HTMLElement) => (refArray.current[key] = el),
      },
      string
    );
  };
  const destructureString = (string: string) => {
    return string.split("").map((val, i) => {
      if (val === " ") {
        val = "\u00A0";
      }
      return createHeading(val, i);
    });
  };

  return (
    <div className={containerClassName} ref={ref}>
      {destructureString(text)}
    </div>
  );
};
export default Index;
