// import React, { useRef, forwardRef } from "react";
// import { useGLTF } from "@react-three/drei";

// export function Model(props, ref) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("./models/TakeoverPhone.glb");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group
//         position={[0, 0, 0]}
//         rotation={[1.86, 0.19, -2.99]}
//         scale={[0.6, 0.6, 1.2]}
//       >
//         <mesh geometry={nodes.Plane.geometry} material={materials.Screen} />
//         <mesh geometry={nodes.Plane_1.geometry} material={materials.hardware} />
//         <mesh
//           geometry={nodes.Plane_2.geometry}
//           material={materials["phone main color"]}
//         />
//         <mesh geometry={nodes.Plane_3.geometry} material={materials.buttons} />
//         <mesh
//           geometry={nodes.Plane_4.geometry}
//           material={materials["Material.001"]}
//         />
//         <mesh
//           geometry={nodes.Plane_5.geometry}
//           material={materials["camera outline"]}
//         />
//         <mesh
//           geometry={nodes.Plane_6.geometry}
//           material={materials["camera lens"]}
//         />
//         <mesh geometry={nodes.Plane_7.geometry} material={materials.flash} />
//       </group>
//     </group>
//   );
// }

// useGLTF.preload("./models/TakeoverPhone.glb");
// export default forwardRef(Model);
