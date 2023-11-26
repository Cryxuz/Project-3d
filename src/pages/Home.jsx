import { Suspense } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import { useState } from 'react'
import Bird from '../models/Bird'
import Dragon from '../models/Dragon'

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
    const adjustDragonForScreenSize = () => {

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

  const [dragonScale, dragonPosition] = adjustDragonForScreenSize()
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
            
            <Dragon 
              isRotating={isRotating}
              dragonScale={dragonScale}
              dragonPosition={dragonPosition}
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