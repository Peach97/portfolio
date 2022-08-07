import Peach from "./NewPeach";
import { Canvas } from "@react-three/fiber";
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
import OrbitController from "./OrbitControls";
import { useRef } from "react";
import { angleToRadians } from "../utils/angle";

export default function PeachLoader() {
  const peach = useRef();

  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "15%",
        width: "fit-content",
        zIndex: 2,
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
        position={[0, 1, 0]}
        rotation={[1, 0, 0]}
        scale={[10, 10, 10]}
      />
      <ContactShadows position={[0, -0.25, 0]} scale={10} blur={1.5} far={5} />
    </Canvas>
  );
}
