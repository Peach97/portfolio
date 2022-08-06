import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Floor = forwardRef((props, ref) => {
  return (
    <mesh ref={ref} {...props}>
      <planeGeometry attach="geometry" args={[20, 20]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
});

export default Floor;
