import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";
import Preview from "./TakeoverPods/TakeoverPreview";
import OrbitController from "./OrbitControls";
import Preview2 from "./SlickNSpan/SlickNspan";

export const takeovermodel = () => {
  // const preview = useRef();

  return (
    <Canvas
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
      }}
    >
      <ambientLight intensity={1} />

      <OrthographicCamera makeDefault position={[4, 4, -2]} zoom={100} />
      <OrbitController />
      <Preview />
    </Canvas>
  );
};
export const slickmodel = () => {
  // const preview2 = useRef();

  return (
    <Canvas
      style={{
        position: "relative",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 3,
      }}
    >
      <ambientLight intensity={1} />

      <OrthographicCamera makeDefault position={[4, 4, -2]} zoom={100} />
      <OrbitController />
      <Preview2 />
    </Canvas>
  );
};
