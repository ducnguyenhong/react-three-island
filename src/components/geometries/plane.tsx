import { forwardRef } from "react"

interface PlaneProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const PlaneGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: PlaneProps, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <planeGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default PlaneGeometry