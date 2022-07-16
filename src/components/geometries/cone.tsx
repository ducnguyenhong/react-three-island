import { forwardRef } from "react"

interface BoxShapeProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const ConeGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: BoxShapeProps, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <coneGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default ConeGeometry