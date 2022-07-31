import { forwardRef } from "react"

interface CircleProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const CircleGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: CircleProps, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <circleGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default CircleGeometry