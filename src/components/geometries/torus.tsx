import { forwardRef } from "react"

interface TorusProps {
  transparent?: boolean
  opacity?: number
  color?: string
  args?: any
  children?: any
  position?: any
}

const TorusGeometry = forwardRef(({ children, transparent = false, opacity = 1, color = 'white', args = [1, 1, 1], ...props }: TorusProps, ref: any) => {
  return (
    <mesh receiveShadow castShadow ref={ref} {...props}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} transparent={transparent} opacity={opacity} />
      {children}
    </mesh>
  )
})

export default TorusGeometry