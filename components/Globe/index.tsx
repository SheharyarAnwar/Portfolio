import React, { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
//@ts-ignore
import * as THREE from "three";
interface Props {}
const Index: React.FC<Props> = (props) => {
  return (
    <Canvas style={{ backgroundColor: "#0c2e4e" }}>
      <Scene1 />
    </Canvas>
  );
};
export default Index;
const Scene1 = () => {
  const ref = useRef();
  const { camera } = useThree();
  useEffect(() => {
    camera.position.y = 1300;
    camera.lookAt(0, 0, 0);
    // camera.position.z = 1300;
  }, []);
  const generateCircles = useMemo((count = 20000) => {
    const vector = new THREE.Vector3();
    const obj = new THREE.Object3D();
    const el = [];
    for (let i = count; i >= 0; i--) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;
      vector.setFromSphericalCoords(600, phi, theta);
      obj.lookAt(vector);
      //   console.log(obj.rotation.x);
      const { x, y, z } = obj.rotation;

      el.push(
        <mesh
          key={i}
          position={[vector.x, vector.y, vector.z]}
          rotation={[x, y, z]}
        >
          <circleGeometry args={[2, 10]}></circleGeometry>
          <meshStandardMaterial
            //   attach="material"
            color="#1ed6ff"
            roughness={1}
            transparent={false}
            metalness={0.4}
          />
        </mesh>
      );
    }
    return el;
  }, []);
  //   useFrame((state, delta) =>
  //     //@ts-ignore
  //     ref.current ? (ref.current.rotation.x!! += 0.01) : null
  //   );
  return (
    <>
      <directionalLight
        // color={"red"}
        intensity={1.4}
        position={[0, 1400, 0]}
      ></directionalLight>
      <directionalLight
        // color={"red"}
        intensity={1.4}
        position={[0, 0, 1]}
      ></directionalLight>
      <pointLight
        color="#1ed6ff"
        intensity={0.3}
        position={[-5000, -5000, -6000]}
      />
      <pointLight
        color="#0c2e4c"
        intensity={2}
        position={[-5000, 5000, -6000]}
      />
      <pointLight
        color="#0c2e4c"
        intensity={2}
        position={[5000, -5000, -6000]}
      />
      <pointLight color="black" intensity={2} position={[5000, 5000, -6000]} />
      {/* <pointLight color="white" intensity={0.3} position={[-500, 1000, 600]} /> */}

      <ambientLight intensity={1} color="#0c2e4e" />
      {generateCircles}
      <mesh position={[0, 0, 0]} ref={ref}>
        <sphereGeometry attach="geometry" args={[600, 50, 50]} />

        <meshStandardMaterial
          //   attach="material"
          color="#002e4f"
          roughness={1}
          transparent={false}
          metalness={0.4}
        />
      </mesh>
    </>
  );
};
const Scene2 = () => {
  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry attach="geometry" args={[2.8, 50, 50]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          opacity={0.03}
          transparent
          roughness={1}
          metalness={1}
        />
      </mesh>
    </>
  );
};
