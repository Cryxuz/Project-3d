import { useEffect, useRef } from 'react';
import bluebirdScene from '../assets/3d/bluebird.glb';
import { useAnimations, useGLTF } from '@react-three/drei';

const Bluebird = ({ ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(bluebirdScene);
  const { mixer } = useAnimations(animations, ref);

  useEffect(() => {
    const clips = animations.map((clip) => mixer.clipAction(clip));
    clips.forEach((clip) => clip.play());

    return () => {
      clips.forEach((clip) => clip.stop());
    };
  }, [animations, mixer]);

  return (
    <mesh position={[2.3, 0.9, 0]} scale={[0.2, 0.2, 0.2]} {...props} ref={ref}>
      <primitive rotation={[0, 4, 0]} object={scene} />
    </mesh>
  );
};

export default Bluebird;