import { Suspense, useEffect, useRef, useState } from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Bird from '../models/Bird'
import Bluebird from '../models/Bluebird'
import Balloon from '../models/Balloon'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'
import sakura from '../assets/sakura.mp3'
import { soundoff, soundon } from '../assets/icons'

const Home = () => {
  const audioRef = useRef(new Audio(sakura))
  audioRef.current.volume = 0.4
  audioRef.current.loop = true
  const [isPlayingMusic, setIsPlayingMusic] = useState(true)
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play()
    } 
    return () => {
      audioRef.current.pause()
    }
  }, [isPlayingMusic])
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
    const adjustBluebirdForScreenSize = () => {

      let screenScale, screenPosition
  
        if(window.innerWidth < 768) {
          screenScale = [1.5, 1.5, 1.5]
          screenPosition = [0, -1.5, 0]
        } else {
          screenScale = [3, 3, 3]
          screenPosition = [0, -4, -4]
        }
        return [screenScale, screenPosition]
      }

  const [bluebirdScale, bluebirdPosition] = adjustBluebirdForScreenSize()
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize()
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage}/> }
      </div>
      <Canvas 
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} 
        camera={{ near: 0.1, far:1000 }}>
          <Suspense fallback={ <Loader />}>
          <ambientLight />
          <directionalLight />
          <pointLight />
          <hemisphereLight />
            <Balloon />
            <Bluebird 
              isRotating={isRotating}
              bluebirdScale={bluebirdScale}
              bluebirdPosition={bluebirdPosition}
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
            <Plane
            isRotating={isRotating}
            rotation={[0, 20.1, 0]}
          />
          </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img 
        className='w-10 h-10 cursor-pointer object-contain'
        src={!isPlayingMusic ? soundoff : soundon} 
        alt="sound logo" 
        onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home