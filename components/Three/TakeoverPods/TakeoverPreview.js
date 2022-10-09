import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props, ref) {
  const group = useRef();
  const { nodes, materials } = useGLTF(
    "models/TakeoverPreview.glb"
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-2.25, 0.75, 0]}
        scale={[0.03, 2.6, 3.6]}
        rotation={[-0.085, -1.5, 0]}
      >
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.011"]}
        />
        <mesh
          geometry={nodes.Cube002_2.geometry}
          material={materials["Material.012"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("models/TakeoverPreview.glb");
export default forwardRef(Model);
