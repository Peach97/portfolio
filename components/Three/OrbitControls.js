import { OrbitControls } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../utils/angle";

export default function OrbitController() {
  const orbitControlsRef = useRef(null);
  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
      orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30));
      orbitControlsRef.current.update();
    }
  });

  return (
    <OrbitControls
      ref={orbitControlsRef}
      minPolarAngle={angleToRadians(40)}
      maxPolarAngle={angleToRadians(80)}
    />
  );
}
