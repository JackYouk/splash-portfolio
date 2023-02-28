import { Center, Float, Text3D, useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import PortfolioCard from "./PortfolioCard";
import { useRef, useState } from "react";

export default function Portfolio({ position, scale }) {
    const [clicked, setClicked] = useState(false);

    const arrow = useGLTF('./arrow2.gltf');

    const arrowRef = useRef();

    useFrame((state) => {
        arrowRef.current.rotation.x += 0.01;
        if (clicked) {
            gsap
                .to(state.camera.position, 3, { x: 0 })
                .eventCallback('onComplete', () => setClicked(false));
        }
    });
    return (
        <group position={position} scale={scale}>
            <primitive
                ref={arrowRef}
                object={arrow.scene}
                scale={0.8}
                position={[-2.5, -1, 0]}
                rotation={[0, 0, Math.PI / 2]}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'}
                onClick={() => setClicked(true)}
            />

            <Float position={[1.5, -1.5, 0]}>
                <Center position={[0, 1.2, 0]}>
                    <Text3D
                        font='./Alata_Regular.json'
                        scale={0.5}
                    >
                        Web Art
                        <meshStandardMaterial color='black' />
                    </Text3D>
                </Center>
                <PortfolioCard
                    scale={0.4}
                    position={[-1.5, 0, 0]}
                    url='https://vortex-web-art.vercel.app/'
                    imgSrc='./vortexart.png'
                    title='Vortex Ventures Art'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[0, 0, 0]}
                    url='https://devweek-r3f.vercel.app/'
                    imgSrc='./devweek.png'
                    title='DevWeek 2023'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[1.5, 0, 0]}
                    url='https://advanced-fe-playground.vercel.app/'
                    imgSrc='./playgroundwebsite.png'
                    title='3js Beginner Playground'
                    stack={'React || Threejs'}
                />
            </Float>

            <Float position={[-1.5, 1.5, 0]}>
                <Center position={[0, 1.2, 0]}>
                    <Text3D
                        font='./Alata_Regular.json'
                        scale={0.5}
                    >
                        Projects
                        <meshStandardMaterial color='black' />
                    </Text3D>
                </Center>
                <PortfolioCard
                    scale={0.4}
                    position={[-1.5, 0, 0]}
                    url='https://github.com/Contact-IoT-Digital-Signage'
                    imgSrc='./iot.png'
                    title='Iot Digital Signage'
                    subtitle={'1st place in the 2023 DevWeek Hackathon!!'}
                    stack={'React || Nodejs || Oracle Cloud || Firebase'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[0, 0, 0]}
                    url='https://remota-website.vercel.app/'
                    imgSrc='./remotawebsite.png'
                    title='Remota'
                    stack={'React || React-Spring'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[1.5, 0, 0]}
                    url='https://lets-frickin-game-1.herokuapp.com/'
                    imgSrc='./LFG.png'
                    title='Lets Frickin Game'
                    stack={'React || Nodejs || Apollo GraphQL || MongoDB'}
                />
            </Float>

        </group>
    );
}