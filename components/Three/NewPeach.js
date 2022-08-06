import React, { forwardRef, useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = (props, ref) => {
  const { nodes, materials } = useGLTF("/newPeach.glb");
  return (
    <group receiveShadow castShadow position={[0.01, 0, -0.01]} {...props}>
      <mesh
        receiveShadow
        castShadow
        geometry={nodes.path2_1.geometry}
        material={materials["SVGMat.003"]}
      />
      <mesh
        geometry={nodes.path2_2.geometry}
        material={materials["SVGMat.004"]}
      />
      <mesh
        geometry={nodes.path2_3.geometry}
        material={materials["SVGMat.005"]}
      />
    </group>
  );
};

useGLTF.preload("/newPeach.glb");

export default forwardRef(Model);
