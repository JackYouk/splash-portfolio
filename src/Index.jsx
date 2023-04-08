import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import App from './App'

export default function Index() {
    const [orbit, setOrbit] = useState(false);
    return (
        <>
            <div style={{margin: '3px', fontFamily: 'monospace', borderRadius: '7px', padding: '2px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: ['white'], display: 'flex', alignItems: 'center', maxWidth: '300px'}}>
                <input type="checkbox" checked={orbit} onClick={() => setOrbit(!orbit)} />
                <label style={{marginLeft: '5px'}}>Enable orbit controls (zoom/move around with mouse/scroll)</label>
            </div>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, (window.innerWidth < 600 ? 25 : 10)]
                }}
            >
                {orbit ? <OrbitControls /> : <></>}
                <Suspense fallback={null}>
                    <App />
                </Suspense>
            </Canvas>
            <Loader containerStyles={{ backgroundColor: 'white', color: 'black' }} />
        </>
    )
}