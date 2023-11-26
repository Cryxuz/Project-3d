import { useGLTF } from '@react-three/drei'
import balloonScene from '../assets/3d/balloon.glb'

const Balloon = () => {
  const {scene, animation } = useGLTF(balloonScene)
  return (
    <mesh position={[8, 5, -45]} >
      <primitive object={scene} />
    </mesh>
  )
}

export default Balloon