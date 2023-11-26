import { useGLTF } from '@react-three/drei'
import skyScene from '../assets/3d/sky.glb'
import {useRef} from 'react'
import {useFrame} from '@react-three/fiber'

// eslint-disable-next-line react/prop-types
const Sky = ({isRotating}) => {
  const {nodes, materials} = useGLTF(skyScene)
  const skyRef = useRef()

  useFrame((_, delta) => {
    if(isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
       <mesh
        castShadow
        receiveShadow
        geometry={nodes.pack1_Background_0.geometry}
        material={materials.Background}
        scale={[3,3,-5]}
      />
    </mesh>
  )
}

export default Sky