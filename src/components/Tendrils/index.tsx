import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useInView } from "react-intersection-observer";
import throttle from "lodash.throttle";
interface ITendrils {
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}
interface Props extends React.CanvasHTMLAttributes<HTMLCanvasElement> {
  options: Partial<ITendrils>;
}

const Tendrils: React.FC<Props> = ({
  options: {
    friction = 0.5,
    trails = 30,
    size = 50,
    dampening = 0.25,
    tension = 0.98,
  },
}) => {
  const ref = useRef<HTMLCanvasElement | null>(null);
  const [inViewRef, inView] = useInView();
  const tendrilRef = useRef<Array<any>>([]);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const mouseRef = useRef<any>(null);

  const requestRef = React.useRef();
  const previousTimeRef = React.useRef();
  class Tendril {
    spring: number;
    friction: number;
    nodes: Node[];
    constructor({ spring }: { spring: number }) {
      this.spring = spring + Math.random() * 0.1 - 0.05;
      this.friction = friction + Math.random() * 0.01 - 0.005;
      this.nodes = [];

      for (let i = 0, node; i < size; i++) {
        node = new Node();
        node.x = 0;
        node.y = 0;

        this.nodes.push(node);
      }
    }
    update(target: { x: number; y: number }) {
      let spring = this.spring;
      let node = this.nodes[0];
      node.vx += target.x - node.x;
      node.vy += target.y - node.y;
      for (let prev, i = 0, n = this.nodes.length; i < n; i++) {
        node = this.nodes[i];

        if (i > 0) {
          prev = this.nodes[i - 1];

          node.vx += (prev.x - node.x) * spring;
          node.vy += (prev.y - node.y) * spring;

          node.vx += prev.vx * dampening;
          node.vy += prev.vy * dampening;
        }

        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;

        spring *= tension;
      }
    }
    draw(ctx: CanvasRenderingContext2D) {
      let x, y, a, b;

      ctx.beginPath();

      for (let i = 0, n = this.nodes.length - 1; i < n; i++) {
        a = this.nodes[i];
        b = this.nodes[i + 1];
        // means
        x = (a.x + b.x) * 0.5;
        y = (a.y + b.y) * 0.5;

        ctx.quadraticCurveTo(a.x, a.y, x, y);
      }

      ctx.stroke();
      ctx.closePath();
    }
  }
  useEffect(() => {
    if (tendrilRef.current) {
      reset();
    }
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
    //@ts-ignore
    return () => cancelAnimationFrame(requestRef.current);
  }, []);
  useEffect(() => {
    //@ts-ignore
    cancelAnimationFrame(requestRef.current);

    if (inView) {
      //@ts-ignore
      requestRef.current = requestAnimationFrame(animate);
    }
  }, [inView]);
  useEffect(() => {
    updateCanvasDimensions();
    const parent = ref?.current?.parentElement;
    parent?.addEventListener("mousemove", handleMouseMove);

    window.addEventListener("resize", updateCanvasDimensions);
    return () => {
      parent?.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, [ref.current]);
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  const updateCanvasDimensions = () => {
    if (ref.current) {
      const x = ref.current.parentElement;
      setHeight(window.innerHeight);
      setWidth(parseInt(window.getComputedStyle(x!).width));
      // setWidth(document.body.clientWidth);
    }
  };
  const handleMouseMove = throttle(
    (ev: any) => {
      if (ref.current) {
        let x, y;

        if (ev.touches) {
          x = ev.touches[0].pageX;
          y = ev.touches[0].pageY;
        } else {
          x = ev.clientX;
          y = ev.clientY;
        }
        mouseRef.current = { x, y };
      }
    },
    1000 / 60,
    {}
  );
  const reset = useCallback(() => {
    for (var i = 0; i < trails; i++) {
      let tendril = new Tendril({
        spring: 0.45 + 0.025 * (i / trails),
      });
      tendrilRef.current.push(tendril);
    }
  }, []);
  const animate = (time: number) => {
    if (previousTimeRef.current && ref.current && mouseRef.current) {
      const ctx = ref.current.getContext("2d");
      ctx!.globalCompositeOperation = "copy";
      ctx!.fillStyle = "transparent";
      ctx!.fillRect(0, 0, ctx!.canvas.width, ctx!.canvas.height);
      ctx!.globalCompositeOperation = "lighter";
      ctx!.strokeStyle = "hsla(166, 100%, 70%,0.25)";
      // ctx!.strokeStyle = "hsla(346,98%,56%,0.25)";
      ctx!.lineWidth = 1;

      tendrilRef.current.forEach((val) => {
        val.update(mouseRef.current);
        val.draw(ctx);
      });
    }
    //@ts-ignore
    previousTimeRef.current = time;
    //@ts-ignore
    requestRef.current = requestAnimationFrame(animate);
  };

  return (
    <canvas
      ref={setRefs}
      className="absolute top-0 left-0 "
      height={height}
      width={width}
    ></canvas>
  );
};
export default Tendrils;

class Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  constructor() {
    this.x = 0;
    this.y = 0;
    this.vy = 0;
    this.vx = 0;
  }
}
