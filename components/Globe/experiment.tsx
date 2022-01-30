export {};

// import React from "react";
// import classes from "./index.module.css";
// interface Props {}
// let tags = ["CSS", "Node", "React", "Next"];
// const Index: React.FC<Props> = () => {
//   const setFromSphericalCoords = (
//     radius: number,
//     phi: number,
//     theta: number
//   ) => {
//     const sinPhiRadius = Math.sin(phi) * radius;

//     return {
//       x: parseInt((sinPhiRadius * Math.sin(theta)).toFixed(4)),
//       y: parseInt((Math.cos(phi) * radius).toFixed(4)),
//       z: parseInt((sinPhiRadius * Math.cos(theta)).toFixed(4)),
//     };
//   };
//   let mappedTags = tags.map((val, i) => {
//     let num = tags.length - 1 - i;
//     const phi = Math.acos(-1 + (2 * num) / tags.length);
//     const theta = Math.sqrt(tags.length * Math.PI) * phi;
//     const { x, y, z } = setFromSphericalCoords(320 / 2, phi, theta);
//     console.log(x, y, z);
//     //x: [-160,160] y:[-160,160] z:[0.5-1]
//     let scale = z > 0 ? 0 : 0;
//     let calculatedStyles = {
//       transform: `translate3d(calc(-50% + ${
//         x > 0 ? x : 160 - x
//       }px),calc(-50% + ${y > 0 ? y : 160 - y}px),${z}px)`,
//     };
//     return (
//       <>
//         <p
//           style={calculatedStyles}
//           key={i}
//           className="text-green inline absolute"
//         >
//           {val}
//         </p>
//       </>
//     );
//   });

//   return (
//     <>
//       <div className={classes.sphere}>{mappedTags}</div>
//     </>
//   );
// };
// export default Index;

// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// //@ts-ignore
// import * as THREE from "three";
// interface Props {}
// const Index: React.FC<Props> = (props) => {
//   return (
//     <Canvas style={{ backgroundColor: "#0c2e4e" }}>
//       <Scene1 />
//     </Canvas>
//   );
// };
// export default Index;
// const Scene1 = () => {
//   const ref = useRef();
//   const { camera } = useThree();
//   useEffect(() => {
//     camera.position.y = 1300;
//     camera.lookAt(0, 0, 0);
//     // camera.position.z = 1300;
//   }, []);
//   const generateCircles = useMemo((count = 20000) => {
//     const vector = new THREE.Vector3();
//     const obj = new THREE.Object3D();
//     const el = [];
//     for (let i = count; i >= 0; i--) {
//       const phi = Math.acos(-1 + (2 * i) / count);
//       const theta = Math.sqrt(count * Math.PI) * phi;
//       vector.setFromSphericalCoords(600, phi, theta);
//       obj.lookAt(vector);
//       //   console.log(obj.rotation.x);
//       const { x, y, z } = obj.rotation;

//       el.push(
//         <mesh
//           key={i}
//           position={[vector.x, vector.y, vector.z]}
//           rotation={[x, y, z]}
//         >
//           <circleGeometry args={[2, 10]}></circleGeometry>
//           <meshStandardMaterial
//             //   attach="material"
//             color="#1ed6ff"
//             roughness={1}
//             transparent={false}
//             metalness={0.4}
//           />
//         </mesh>
//       );
//     }
//     return el;
//   }, []);
//   //   useFrame((state, delta) =>
//   //     //@ts-ignore
//   //     ref.current ? (ref.current.rotation.x!! += 0.01) : null
//   //   );
//   return (
//     <>
//       <directionalLight
//         // color={"red"}
//         intensity={1.4}
//         position={[0, 1400, 0]}
//       ></directionalLight>
//       <directionalLight
//         // color={"red"}
//         intensity={1.4}
//         position={[0, 0, 1]}
//       ></directionalLight>
//       <pointLight
//         color="#1ed6ff"
//         intensity={0.3}
//         position={[-5000, -5000, -6000]}
//       />
//       <pointLight
//         color="#0c2e4c"
//         intensity={2}
//         position={[-5000, 5000, -6000]}
//       />
//       <pointLight
//         color="#0c2e4c"
//         intensity={2}
//         position={[5000, -5000, -6000]}
//       />
//       <pointLight color="black" intensity={2} position={[5000, 5000, -6000]} />
//       {/* <pointLight color="white" intensity={0.3} position={[-500, 1000, 600]} /> */}

//       <ambientLight intensity={1} color="#0c2e4e" />
//       {generateCircles}
//       <mesh position={[0, 0, 0]} ref={ref}>
//         <sphereGeometry attach="geometry" args={[600, 50, 50]} />

//         <meshStandardMaterial
//           //   attach="material"
//           color="#002e4f"
//           roughness={1}
//           transparent={false}
//           metalness={0.4}
//         />
//       </mesh>
//     </>
//   );
// };
// const Scene2 = () => {
//   return (
//     <>
//       <mesh position={[0, 0, 0]}>
//         <sphereGeometry attach="geometry" args={[2.8, 50, 50]} />
//         <meshStandardMaterial
//           attach="material"
//           color="white"
//           opacity={0.03}
//           transparent
//           roughness={1}
//           metalness={1}
//         />
//       </mesh>
//     </>
//   );
// };
