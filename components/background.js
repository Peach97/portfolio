import React, { forwardRef, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../styles/Home.module.css";
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
} from "@react-three/drei";
import Peach from "../components/NewPeach";
import * as THREE from "three";
import { getDisplayName } from "next/dist/shared/lib/utils";
import { display } from "@mui/system";

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
function Cable({
  start,
  end,
  v1 = new THREE.Vector3(),
  v2 = new THREE.Vector3(),
}) {
  const ref = useRef();
  useFrame(
    () =>
      ref.current.setPoints(
        start.current.getWorldPosition(v1),
        end.current.getWorldPosition(v2)
      ),
    []
  );
  return <QuadraticBezierLine ref={ref} lineWidth={1} color="#000" />;
}
// eslint-disable-next-line react/display-name
const Floor = forwardRef((props, ref) => {
  return (
    <mesh ref={ref} {...props}>
      <boxGeometry attach="geometry" args={[20, 2]} />
      <meshLambertMaterial attach="material" color="#964B00" />
    </mesh>
  );
});

export default function Background() {
  const floor = useRef();
  const peach = useRef();
  return (
    <Canvas dpr={[1, 2]} shadows style={{ position: "fixed" }}>
      <PerspectiveCamera makeDefault position={[7.5, 1, 0]} />
      <directionalLight
        castShadow
        position={[-10, -5, -2]}
        intensity={10}
        color="white"
      />

      <directionalLight position={[0, 5, -2]} intensity={0.5} color="white" />

      <spotLight
        position={[5, 20, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="white"
      />
      <spotLight
        position={[-5, 20, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="white"
      />
      <Float scale={0.75} position={[0, 2, 0]} rotation={[0, 0.6, 0]}>
        <OrbitControls />
      </Float>

      <Floor rotation={[20, 0, 0]} position={[1, 2, -2]} ref={floor} />
      <Cable start={floor} end={peach} />
      <Peach
        castShadow
        receiveShadow
        ref={peach}
        rotation={[1.5, 0.1, -1]}
        position={[0.0001, 0, -2]}
        scale={[7.5, 7.5, 7.5]}
      />
      <Sky />
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
