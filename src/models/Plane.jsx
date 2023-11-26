import { useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import {useAnimations, useGLTF} from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
  const ref = useRef()
  const {scene, animations} = useGLTF(planeScene)
  const {actions} = useAnimations(animations, ref)

  useEffect(() => {
    console.log('Animations:', animations);
    if (isRotating && actions['Take 001']) {
      actions['Take 001'].play();
    } else if (actions['Take 001']) {
      actions['Take 001'].stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh position={[-5,-1,0]} scale={[0.01, 0.01, 0.01]} {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane