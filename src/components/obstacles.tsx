import { useEffect, useRef } from "react"
import CircleGeometry from "./geometries/circle"
import ConeGeometry from "./geometries/cone"
import TorusGeometry from "./geometries/torus"
import CedrusTree from "./objects/cedrus-tree"
import Cloud from "./objects/cloud"

const Obstacles = () => {

  const bottomConeRef = useRef<any>(null)
  const frameYellowTorusRef = useRef<any>(null)
  const frameBlueTorusRef = useRef<any>(null)
  const planeYellowCircleRef = useRef<any>(null)
  const planeBlueCircleRef = useRef<any>(null)
  const planeCircleRef3 = useRef<any>(null)
  const planeCircleRef4 = useRef<any>(null)
  const planeCircleRef5 = useRef<any>(null)

  useEffect(() => {
    bottomConeRef.current.rotation.x = Math.PI;

    frameYellowTorusRef.current.rotation.x = Math.PI / 2;
    frameYellowTorusRef.current.rotation.z = Math.PI / 2 * 1.9;

    frameBlueTorusRef.current.rotation.x = Math.PI / 2;
    frameBlueTorusRef.current.rotation.z = Math.PI / 2 * 0.627;

    planeYellowCircleRef.current.rotation.x = -Math.PI / 2;
    planeYellowCircleRef.current.rotation.z = Math.PI / 2 * 3.373;

    planeBlueCircleRef.current.rotation.x = -Math.PI / 2;
    planeBlueCircleRef.current.rotation.z = Math.PI / 2 * 2.1;

    planeCircleRef3.current.rotation.x = -Math.PI / 2;
    planeCircleRef4.current.rotation.x = -Math.PI / 2;
    planeCircleRef5.current.rotation.x = -Math.PI / 2;
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
      <ConeGeometry args={[30, 40, 10]} position={[90, 15, -70]} color="#A38166" />

      <ConeGeometry args={[25, 55, 10]} position={[110, 24, -35]} color="#A38166" />
      <ConeGeometry args={[4, 10, 10]} position={[110, 47.9, -35]} color="#ebeef9" />

      {/* // */}
      <CircleGeometry args={[145, 80, undefined, 4.285]} position={[0, 0, 0]} color="#ede745" ref={planeYellowCircleRef} />
      <CircleGeometry args={[145, 80, undefined, 2]} position={[0, 0, 0]} color="#299ACE" ref={planeBlueCircleRef} />

      <CircleGeometry args={[80, 100]} position={[36, 0.3, 55]} color="#ede745" ref={planeCircleRef3} />
      <CircleGeometry args={[80, 100]} position={[-15, 0.3, 40]} color="#ede745" ref={planeCircleRef5} />
      <CircleGeometry args={[80, 100]} position={[-65, 0.3, 10]} color="#ede745" ref={planeCircleRef4} />

      <TorusGeometry args={[145, 0.5, 8, 80, 4.285]} position={[0, -0.5, 0]} color="#ede745" ref={frameYellowTorusRef} />
      <TorusGeometry args={[145, 0.5, 8, 80, 2]} position={[0, -0.5, 0]} color="#299ACE" ref={frameBlueTorusRef} />

      {/* đáy */}
      <ConeGeometry ref={bottomConeRef} args={[145, 50, 80]} position={[0, -26, 0]} color="#c6b19f" />
    </>
  )
}

export default Obstacles