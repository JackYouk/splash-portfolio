import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import App from './App'

export default function Index() {
    const [orbit, setOrbit] = useState(false);
    return (
        <>

            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [0, 0, (window.innerWidth < 600 ? 25 : 8)]
                }}
            >
                {orbit ? <OrbitControls /> : <></>}
                <Suspense fallback={null}>
                    <App />
                </Suspense>
            </Canvas>
            <Loader containerStyles={{ backgroundColor: 'white', color: 'black' }} />
            <div style={{ maxHeight: '10%', padding: '5px', paddingTop: '20px', display: 'flex', alignItems: 'end'}}>
                <div style={{ fontFamily: 'monospace', borderRadius: '7px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: ['white'], display: 'flex', alignItems: 'center', padding: '7px'}}>
                <input type="checkbox" checked={orbit} style={{}} onClick={() => setOrbit(!orbit)} />
                <label style={{marginLeft: '5px', fontSize: '10px', lineHeight: '30px'}}>
                    Enable orbit controls || Right-click/<img src='./2finger-scroll.png' className='iconImage'/> to move 
                    || Left-click/<img src='./1finger-scroll.png' className='iconImage'/> 
                    to rotate || Scroll/<img src='./fingerPinch-zoom.png' className='iconImage'/> to zoom</label>
                </div>
                </div>
        </>
    )
}