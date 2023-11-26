import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import { useState } from 'react'
import Bird from '../models/Bird'

{/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
</div> */}

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)

  const adjustIslandForScreenSize = () => {
    let screenScale = null 
    let screenPosition = [0, -10, -25]
    let rotation = [0.1, 4.7, 0]


      if(window.innerWidth < 768) {
        screenScale = [0.9, 0.9, 0.9]
      } else {
        screenScale = [1, 1, 1]
      }
      return [screenScale, screenPosition, rotation]
    }
    const adjustPlaneForScreenSize = () => {

      let screenScale, screenPosition
      // let rotation = [0.1, 4.7, 0]
  
  
        if(window.innerWidth < 768) {
          screenScale = [1.5, 1.5, 1.5]
          screenPosition = [0, -1.5, 0]
        } else {
          screenScale = [3, 3, 3]
          screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
      }

  const [planeScale, planePosition] = adjustPlaneForScreenSize()
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
        camera={{ near: 0.1, far:1000 }}>
          <Suspense fallback={ <Loader />}>
          <ambientLight />
          <directionalLight />
          <pointLight />
          <hemisphereLight />
            
            <Plane 
              isRotating={isRotating}
              planeScale={planeScale}
              planePosition={planePosition}
              rotation={[0, 20, 0]}/>
            <Sky 
              isRotating={isRotating} />
            <Island 
              position={islandPosition}
              scale={islandScale}
              rotation={islandRotation}
              isRotating={isRotating}
              setIsRotating={setIsRotating}
              setCurrentStage={setCurrentStage} />
            <Bird />
          </Suspense>
      </Canvas>
    </section>
  )
}

export default Home