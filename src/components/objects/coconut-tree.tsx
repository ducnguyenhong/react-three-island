import ConeGeometry from "../geometries/cone"
import CylinderGeometry from "../geometries/cylinder"
import DodecahedronGeometry from "../geometries/dodecahedron"

interface CoconutTreeProps {
  args?: any
}


const CoconutTree: React.FC<CoconutTreeProps> = (props) => {
  const { args } = props
  return (
    <mesh>
      <ConeGeometry args={[1.5, 10, 10]} position={[90, 0, 0]} color="#A6674C" />
      <CylinderGeometry args={[1.2, 1.2, 8, 10]} position={[90, 0, 0]} color="#A6674C" />

      <DodecahedronGeometry args={[2.5, 0]} position={[90, 3, 0]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[86, 3, 0]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[89, 3, 4]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[94, 3, 2]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[93, 3, -3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[89, 3, -4]} color="#70db70" />

      <DodecahedronGeometry args={[2.5, 0]} position={[92, 6, 3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[90, 6, -3]} color="#70db70" />
      <DodecahedronGeometry args={[2.5, 0]} position={[88, 6, 0]} color="#70db70" />

      <DodecahedronGeometry args={[2.5, 0]} position={[90, 8, 0]} color="#70db70" />

    </mesh>
  )
}

export default CoconutTree