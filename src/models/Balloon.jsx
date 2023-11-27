import balloonScene from "../assets/3d/balloon.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "react-three-fiber";

export function Balloon({ ...props }) {
  const ref = useRef();
  const { scene, animations } = useGLTF(balloonScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions["Take 001"]) {
      actions["Take 001"].play();
    }
  }, [actions]);

  useFrame(({ clock, camera }) => {
    ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (ref.current.position.x < camera.position.x - 10) {
      ref.current.rotation.y = Math.PI;
    } else if (ref.current.position.x > camera.position.x + 5) {
      ref.current.rotation.y = 0;
    }

    if (ref.current.rotation.y === 0) {
      // Moving forward (from mid-right to mid-left)
      ref.current.position.x -= 0.005;
      ref.current.position.z -= 0.005;
    } else {
      // Moving backward
      ref.current.position.x += 0.005;
      ref.current.position.z += 0.005;
    }
  });

  return (
    <mesh position={[5, -1.5, 2]} scale={0.1} {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Balloon;