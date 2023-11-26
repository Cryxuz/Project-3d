import planeScene from '../assets/3d/plane.glb'
import {useGLTF} from '@react-three/drei'

const Plane = () => {
  const {scene, animation} = useGLTF(planeScene)
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane