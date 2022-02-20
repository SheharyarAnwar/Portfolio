import React, { useEffect, useMemo, useRef, useState } from "react";
import classes from "./index.module.css";

type Speed = "slow" | "normal" | "fast";
const maxSpeedMappings = { slow: 0.5, normal: 1, fast: 6 };
const initSpeedMappings = { slow: 16, normal: 32, fast: 40 };
interface Props {
  tags?: Array<String>;
  radius?: number;
  depth?: number;
  size?: number;
  maxSpeed?: Speed;
  initSpeed?: Speed;
  direction?: number;
  keep?: boolean;
  paused?: boolean;
}
const Index: React.FC<Props> = ({
  tags = [
    "HTML",
    "CSS",
    "Typescript",
    "Javascript",
    "Graphql",
    "Redux",
    "RTK",
    "Rest",
    "MUI",
    "GSAP",
    "Tailwind",
    "React",
    "Next",
    "Gatsby",
    "Node",
    "Express",
    "MongoDB",
    "SQL",
    "AWS",
    "Firebase",
  ],
  radius = 300,
  depth = radius * 2,
  size = 1.5 * radius,
  maxSpeed = "fast",
  initSpeed = "fast",
  direction = 135,
  keep = false,
  paused = false,
}) => {
  const [active, setActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tagRefs = useRef<Array<any>>([]);
  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  let maxSpeedMapped = maxSpeedMappings[maxSpeed];
  let initSpeedMapped = initSpeedMappings[initSpeed];

  const [mouseX0, setMouseX0] = useState(
    initSpeedMapped * Math.sin(direction * (Math.PI / 180))
  );
  const [mouseY0, setMouseY0] = useState(
    initSpeedMapped * Math.cos(direction * (Math.PI / 180))
  );

  const [mouseX, setMouseX] = useState(mouseX0);
  const [mouseY, setMouseY] = useState(mouseY0);
  const handleMouseMove = (ev: any) => {
    if (containerRef.current) {
      const el = containerRef.current;
      const rect = el.getBoundingClientRect();
      let x = (ev.clientX - (rect.left + rect.width / 2)) / 5;

      let y = (ev.clientY - (rect.top + rect.height / 2)) / 5;
      setMouseX(x);
      setMouseY(y);
      // setCursorPosition({ x, y });
    }
  };
  // console.log(tagRefs);
  useEffect(() => {
    (keep ? window : containerRef.current)?.addEventListener(
      "mousemove",
      handleMouseMove
    );
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      //@ts-ignore
      cancelAnimationFrame(requestRef.current);
      (keep ? window : containerRef.current)?.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);
  useEffect(() => {
    //@ts-ignore
    cancelAnimationFrame(requestRef.current);
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  }, [active, mouseX, mouseY, radius, containerRef]);

  const createTagElements = useMemo(() => {
    return tags.map((val, i) => {
      return (
        <span
          key={i}
          ref={(el) => (tagRefs.current[i] = { el, ...computePosition(i) })}
          style={{ zIndex: i + 1 }}
          className={classes.tag}
        >
          {val}
        </span>
      );
    });
  }, [radius]);
  const animate = (time: number) => {
    if (paused) return;
    if (containerRef.current != null && previousTimeRef.current != undefined) {
      // const deltaTime = time - previousTimeRef.current;

      if (!keep && !active) {
        setMouseX((prev) =>
          Math.abs(prev - mouseX0) < 1 ? mouseX0 : (prev + mouseX0) / 2
        );
        setMouseY((prev) =>
          Math.abs(prev - mouseY0) < 1 ? mouseY0 : (prev + mouseY0) / 2
        );
      }
      const a =
        -(Math.min(Math.max(-mouseY, -size), size) / radius) * maxSpeedMapped;
      const b =
        (Math.min(Math.max(-mouseX, -size), size) / radius) * maxSpeedMapped;
      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause

      const l = Math.PI / 180;
      const sc = [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l),
      ];
      tagRefs.current.forEach((item, i) => {
        const { x, y, z } = item;
        const el = item.el;
        const rx1 = x;
        const ry1 = y * sc[1] + z * -sc[0];
        const rz1 = y * sc[0] + z * sc[1];
        const rx2 = rx1 * sc[3] + rz1 * sc[2];
        const ry2 = ry1;
        const rz2 = rz1 * sc[3] - rx1 * sc[2];
        const per = (2 * depth) / (2 * depth + rz2);
        item.x = rx2;
        item.y = ry2;
        item.z = rz2;
        item.scale = per.toFixed(3);
        let alpha = per * per - 0.5;
        //@ts-ignore
        alpha = (alpha > 1 ? 1 : alpha).toFixed(3);

        const left = (item.x - el!.offsetWidth / 2).toFixed(2);
        const top = (item.y - el!.offsetHeight / 2).toFixed(2);
        el!.style.transform = `translate3d(${left}px, ${top}px, 0) scale(${item.scale})`;
        el!.style.filter = `alpha(opacity=${100 * alpha})`;
        el!.style.opacity = `${alpha}`;
      });
    }
    //@ts-ignore
    previousTimeRef.current = time;
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  };
  const computePosition = (index: number, random = false) => {
    const textsLength = tags.length;
    if (random) index = Math.floor(Math.random() * (textsLength + 1));
    const phi = Math.acos(-1 + (2 * index + 1) / textsLength);
    const theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
    return {
      x: (size * Math.cos(theta) * Math.sin(phi)) / 2,
      y: (size * Math.sin(theta) * Math.sin(phi)) / 2,
      z: (size * Math.cos(phi)) / 2,
    };
  };
  return (
    <div
      onMouseOver={() => {
        setActive(true);
      }}
      onMouseOut={() => {
        setActive(false);

        setMouseX0(mouseX);
        setMouseY0(mouseY);
      }}
      ref={containerRef}
      style={{
        position: "relative",
        margin: "auto",
        height: `${2 * radius}px`,
        width: `${2 * radius}px`,
      }}
    >
      {createTagElements}
    </div>
  );
};
export default Index;
