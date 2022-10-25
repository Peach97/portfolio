import React, { useRef, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props, ref) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/slickNspan.glb");
  return (
    <group ref={group} {...props} dispose={null}>
      <group
        position={[-3, 0.75, 0]}
        scale={[0.03, 2.6, 3.6]}
        rotation={[-0.095, -1.5, 0]}
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
        <mesh
          geometry={nodes.Cube002_3.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Cube002_4.geometry}
          material={materials.hardware}
        />
        <mesh
          geometry={nodes.Cube002_5.geometry}
          material={materials["phone main color"]}
        />
        <mesh
          geometry={nodes.Cube002_6.geometry}
          material={materials.buttons}
        />
        <mesh
          geometry={nodes.Cube002_7.geometry}
          material={materials["camera outline"]}
        />
        <mesh
          geometry={nodes.Cube002_8.geometry}
          material={materials["camera lens"]}
        />
        <mesh geometry={nodes.Cube002_9.geometry} material={materials.flash} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/slickNspan.glb");
export default forwardRef(Model);
