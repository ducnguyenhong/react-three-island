import { forwardRef } from "react"

interface BoxShapeProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
}

const BoxShape: React.FC<BoxShapeProps> = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }, ref) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default BoxShape