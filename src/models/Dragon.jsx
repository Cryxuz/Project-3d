import { useEffect, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import dragonScene from '../assets/3d/dragon.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Dragon = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(dragonScene);
  const { mixer } = useAnimations(animations, ref);

  useEffect(() => {
    const clips = animations.map((clip) => mixer.clipAction(clip));
    clips.forEach((clip) => clip.play());

    return () => {
      clips.forEach((clip) => clip.stop());
    };
  }, [animations, mixer]);

  return (
    <mesh position={[2, 0.5, 0.0]} scale={[0.2, 0.2, 0.2]} {...props} ref={ref}>
      <primitive rotation={[0, 4, 0]} object={scene} />
    </mesh>
  );
};

export default Dragon;