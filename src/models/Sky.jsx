import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

const Sky = ({isRotating}) => {
  const sky = useGLTF(skyScene)
  const skyRef = useRef()
  return (
    <mesh>
      <primitive object={sky.scene} scale={[-1,1,1]}/>
    </mesh>
  )
}

export default Sky