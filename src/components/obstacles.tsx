import { useEffect, useRef } from "react"
import BoxShape from "./box-shape"
import ConeGeometry from "./geometries/cone"
import ExtrudeGeometry from "./geometries/extrude"
import Cloud from "./objects/cloud"
import CoconutTree from "./objects/coconut-tree"

const Obstacles = () => {

  const bottomConeRef = useRef<any>(null)

  useEffect(() => {
    bottomConeRef.current.rotation.x = Math.PI;
  }, [])

  return (
    <>
      <BoxShape args={[30, 3, 3]} position={[0, -3.5, 0]} />
      <BoxShape args={[3, 3, 3]} position={[6, 6, 6]} />

      <CoconutTree />

      <Cloud />

      <ExtrudeGeometry position={[40, -3.5, 40]} />

      {/* núi */}
      <ConeGeometry args={[30, 60, 13]} position={[90, 25, -70]} color="#A38166" />
      <ConeGeometry args={[6, 12, 13]} position={[90, 49.2, -70]} color="#ebeef9" />

      <ConeGeometry args={[30, 85, 10]} position={[110, 37, -30]} color="#A38166" />

      {/* đáy */}
      <ConeGeometry ref={bottomConeRef} args={[145, 50, 40]} position={[0, -30.1, 0]} color="#FCEEBD" />
    </>
  )
}

export default Obstacles