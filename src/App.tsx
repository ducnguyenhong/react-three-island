import { MapControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { createContext } from 'react'
import Scene from './components/scene'
import './index.css'

export const context = createContext(null)


export default () => {
  return (
    <div id="main">
      <Canvas id="canvas-root" shadows gl={{ alpha: false }}>
        <MapControls />
        <Scene />
      </Canvas>
    </div>
  )
}
