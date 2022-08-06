import * as THREE from 'three';

interface ExtrudeProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const ExtrudeGeometry: React.FC<ExtrudeProps> = ({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }) => {

  const length = 3, width = 50;
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, width);
  shape.lineTo(length, width);
  shape.lineTo(length, 0);
  shape.lineTo(0, 0);

  const extrudeSettings = {
    steps: 2,
    depth: 8,
    bevelEnabled: true,
    bevelThickness: 2,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1
  };

  return (
    <mesh receiveShadow castShadow {...props}>
      <extrudeGeometry attach="geometry" args={[shape, extrudeSettings]} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
}

export default ExtrudeGeometry