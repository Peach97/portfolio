import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
import {
  OrbitControls,
  Stars,
  Backdrop,
  Environment,
  PerspectiveCamera,
  Float,
} from "@react-three/drei";
import { blue } from "@mui/material/colors";

function Sphere() {
  const ref = useRef();
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 0]} color="#fff" intensity={2} />
      <mesh ref={ref} rotation={[0, 10, 0]} position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshStandardMaterial attach="material" color={"#7A33ED"} />
      </mesh>
    </>
  );
}

function Floor() {
  return (
    <mesh rotation={[-1.570796, 0, 0]} position={[1, -0.5, 0]}>
      <boxGeometry attach="geometry" args={[20, 2]} />
      <meshLambertMaterial attach="material" color="#7A33ED" />
    </mesh>
  );
}

export default function Background() {
  return (
    <Canvas dpr={[1, 2]} shadows style={{ position: "fixed" }}>
      <PerspectiveCamera makeDefault position={[7.5, 1, 2.5]} />

      <directionalLight position={[0, 5, -2]} intensity={0.5} color="red" />

      <spotLight
        position={[5, 20, 5]}
        intensity={20}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#7A33ED"
      />
      <spotLight
        position={[-5, 20, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="#0c8cbf"
      />
      <Float scale={0.75} position={[0, 0.5, 0]} rotation={[0, 0.6, 0]}>
        <Sphere />
      </Float>
      <Floor />
      <Stars />
      {/* <Backdrop floor={2} position={[0, -0.5, -3]} scale={[50, 10, 4]}>
        <meshStandardMaterial
          color="#353540"
          attach="material"
          envMapIntensity={0.1}
        />
      </Backdrop>
      <Environment preset="city" /> */}
    </Canvas>
  );
}
