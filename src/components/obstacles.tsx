import BoxShape from "./box-shape"
import ExtrudeGeometry from "./geometries/extrude"
import CoconutTree from "./objects/coconut-tree"

const Obstacles = () => {
  return (
    <>
      <BoxShape args={[30, 3, 3]} position={[0, -3.5, 0]} />
      <BoxShape args={[3, 3, 3]} position={[6, 6, 6]} />

      <CoconutTree />

      <ExtrudeGeometry position={[40, -3.5, 40]} />
    </>
  )
}

export default Obstacles