import React, { forwardRef, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../../styles/Home.module.css";
import {
  OrbitControls,
  Stars,
  Backdrop,
  Environment,
  PerspectiveCamera,
  Float,
  QuadraticBezierLine,
  Cloud,
  Sky,
  OrthographicCamera,
  ContactShadows,
} from "@react-three/drei";
import Peach from "./NewPeach";
import Floor from "./Floor";
import Sphere from "./Sphere";
import Cable from "./Cable";
import * as THREE from "three";
import { angleToRadians } from "../utils/angle";
import OrbitController from "./OrbitControls";
export default function Background() {
  const floor = useRef();
  const peach = useRef();

  return (
    <Canvas
      shadows
      colorManagement
      style={{
        position: "absolute",
        top: 0,
        height: "100vh",
        right: 0,
        width: "50vw",
        zIndex: 1,
      }}
    >
      <OrbitController />
      <ambientLight args={["#ffffff", 0.25]} castShadow />
      <spotLight
        castShadow
        intensity={5}
        args={["#ffffff", 1.5, 7, angleToRadians(45), 0.3]}
        position={[-3, 4, 2]}
      />
      <PerspectiveCamera makeDefault position={[0, 0, -5]} />
      <Peach
        receiveShadow
        castShadow
        ref={peach}
        position={[0, 0.5, 0]}
        rotation={[1, 0, 0]}
        scale={[10, 10, 10]}
      />
      <ContactShadows position={[0, -0.25, 0]} scale={10} blur={1.5} far={5} />

      {/* <Floor rotation={[-angleToRadians(90), 0, 0]} receiveShadow /> */}
    </Canvas>
  );
}
