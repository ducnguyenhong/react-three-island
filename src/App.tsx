import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createContext } from 'react'
import Scene from './components/scene'
import './index.css'

export const context = createContext()


export default () => {
  return (
    <div id="main">
      <Canvas shadows gl={{ alpha: false }}>
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  )
}
