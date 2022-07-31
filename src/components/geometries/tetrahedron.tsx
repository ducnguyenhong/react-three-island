import { forwardRef } from "react"

interface TetrahedronProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const TetrahedronGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: TetrahedronProps, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <tetrahedronGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default TetrahedronGeometry