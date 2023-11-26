import planeScene from '../assets/3d/plane.glb'
import {useGLTF} from '@react-three/drei'

const Plane = ({isRotating, ...props}) => {
  const {scene, animation} = useGLTF(planeScene)
  return (
    <mesh scale={0.04, 0.04, 0.003} {...props}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane