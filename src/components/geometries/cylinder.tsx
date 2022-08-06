
interface CylinderProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const CylinderGeometry: React.FC<CylinderProps> = ({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }) => {
  return (
    <mesh receiveShadow castShadow {...props}>
      <cylinderGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
}

export default CylinderGeometry