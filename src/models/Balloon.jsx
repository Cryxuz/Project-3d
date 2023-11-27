import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import balloonScene from "../assets/3d/balloon.glb";

export function Balloon({ ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(balloonScene);
  const { actions } = useAnimations(animations, ref);

  

  return (
    <mesh  position={[-2.5,-1.5,2]} scale={0.01} {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Balloon