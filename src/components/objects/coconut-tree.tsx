import ConeGeometry from "../geometries/cone"
import CylinderGeometry from "../geometries/cylinder"
import DodecahedronGeometry from "../geometries/dodecahedron"

interface CoconutTreeProps {
  args?: any
}


const CoconutTree: React.FC<CoconutTreeProps> = (props) => {
  const { args } = props
  return (
    <group position={[-50, 0, 0]}>
      <ConeGeometry args={[1.5, 10, 10]} position={[10, 0, 0]} color="#A6674C" />
      <CylinderGeometry args={[1.2, 1.2, 8, 10]} position={[10, 0, 0]} color="#A6674C" />

      <DodecahedronGeometry args={[2.5, 0]} position={[10, 3, 0]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[6, 3, 0]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[9, 3, 4]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[4, 3, 2]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[3, 3, -3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[9, 3, -4]} color="#70db70" />

      <DodecahedronGeometry args={[2.5, 0]} position={[12, 6, 3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[10, 6, -3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[8, 6, 0]} color="#70db70" />

      <DodecahedronGeometry args={[2.5, 0]} position={[10, 8, 0]} color="#70db70" />

    </group>
  )
}

export default CoconutTree