import { useRef } from "react";
function Sphere() {
  const ref = useRef();
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 10, 0]} color="#fff" intensity={2} />
      <mesh ref={ref} rotation={[0, 10, 0]} position={[0, 0.5, 0]}>
        <sphereGeometry attach="geometry" args={[0.5, 32, 32]} />
        <meshStandardMaterial attach="material" color={"#7A33ED"} />
      </mesh>
    </>
  );
}
export default Sphere;
