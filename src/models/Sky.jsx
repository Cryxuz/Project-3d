import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

// eslint-disable-next-line react/prop-types
const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.25 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
      <primitive object={sky.scene} scale={[1, 1, -1]} position={[1, -50, 1]}/>
    </mesh>
  )
}

export default Sky