import { useEffect, useRef } from "react"
import CircleGeometry from "./geometries/circle"
import ConeGeometry from "./geometries/cone"
import TorusGeometry from "./geometries/torus"
import CedrusTree from "./objects/cedrus-tree"
import Cloud from "./objects/cloud"

const Obstacles = () => {

  const bottomConeRef = useRef<any>(null)
  const frameTorusRef = useRef<any>(null)
  const planeCircleRef = useRef<any>(null)

  useEffect(() => {
    bottomConeRef.current.rotation.x = Math.PI;
    frameTorusRef.current.rotation.x = Math.PI / 2;
    planeCircleRef.current.rotation.x = -Math.PI / 2;
  }, [])

  return (
    <>
      {/* <BoxShape args={[30, 3, 3]} position={[0, -3.5, 0]} />
      <BoxShape args={[3, 3, 3]} position={[6, 6, 6]} /> */}

      {/* <CoconutTree /> */}

      <CedrusTree position={[-100, 5, -20]} />
      <CedrusTree position={[-100, 5, -10]} />
      <CedrusTree position={[-100, 5, 0]} />
      <CedrusTree position={[-100, 5, 10]} />
      <CedrusTree position={[-100, 5, 20]} />

      <Cloud />

      {/* <ExtrudeGeometry position={[40, -3.5, 40]} /> */}

      {/* <Lake position={[-50, 0, 80]} /> */}

      {/* <TestGeometry position={[-50, 20, 80]} /> */}

      {/* núi */}
      <ConeGeometry args={[30, 60, 13]} position={[90, 30, -70]} color="#A38166" />
      <ConeGeometry args={[6, 12, 13]} position={[90, 54.2, -70]} color="#ebeef9" />

      <ConeGeometry args={[30, 85, 10]} position={[110, 42, -30]} color="#A38166" />


      {/* // */}
      <CircleGeometry args={[145, 25]} position={[0, 0, 0]} color="#5f832f" ref={planeCircleRef} />
      <TorusGeometry args={[145, 3, 4, 25]} position={[0, -2.5, 0]} color="#FCEEBD" ref={frameTorusRef} />

      {/* đáy */}
      <ConeGeometry ref={bottomConeRef} args={[145, 50, 40]} position={[0, -30.1, 0]} color="#c6b19f" />
    </>
  )
}

export default Obstacles