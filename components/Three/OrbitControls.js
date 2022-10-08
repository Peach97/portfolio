import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../utils/angle";

export default function OrbitController() {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(20));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      enableZoom={false}
      enableDamping={true}
      ref={orbitControlsRef}
      minPolarAngle={angleToRadians(40)}
      maxPolarAngle={angleToRadians(60)}
    />
  );
}
