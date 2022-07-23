import { Physics } from "@react-three/cannon"
import { PerspectiveCamera } from "@react-three/drei"
import { Suspense, useRef } from "react"
import Obstacles from "./obstacles"
import Plane from "./plane"

const Scene = () => {
  const cameraRef = useRef<any>()

  return (
    <Suspense fallback={<div>loading</div>}>
      <PerspectiveCamera ref={cameraRef} makeDefault position={[-250, 20, 0]} />
      <hemisphereLight intensity={0.35} />
      <directionalLight args={['white', 0.5]} position={[100, 100, 100]} />
      <color attach="background" args={['#B6EAF3']} />
      <Physics iterations={80} gravity={[0, -40, 0]}>
        {/* mảnh đất nhỏ*/}
        <Obstacles />


        {/* đất liền  */}
        <Plane args={[145, 40]} bgColor="#FCEEBD" position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      </Physics>
    </Suspense>
  )
}

export default Scene