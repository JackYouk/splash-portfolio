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
                position={[-3.5, -1, 0]}
                rotation={[0, 0, Math.PI / 2]}
                onPointerOver={() => document.body.style.cursor = 'pointer'}
                onPointerLeave={() => document.body.style.cursor = 'default'}
                onClick={() => setClicked(true)}
            />

            <Float position={[1.5, -1.5, 0]}>
                <Center position={[-0.5, 1.2, 0]}>
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
                    position={[-2, 0.15, 0]}
                    url='https://polaroid-tau.vercel.app/'
                    imgSrc='./summer.png'
                    title='Summer of Love'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[-0.5, 0.15, 0]}
                    url='https://party-cat.vercel.app/'
                    imgSrc='./partycat.png'
                    title='PartyCat'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[1, 0.15, 0]}
                    url='https://vortex-web-art.vercel.app/'
                    imgSrc='./vortexart.png'
                    title='Vortex Ventures Art'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[-2, -1.45, 0]}
                    url='https://devweek-r3f.vercel.app/'
                    imgSrc='./devweek.png'
                    title='DevWeek 2023'
                    stack={'React || Threejs || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[-0.5, -1.45, 0]}
                    url='https://marbles.vercel.app/'
                    imgSrc='./marbles.png'
                    title='Marbles Physics'
                    stack={'React || Threejs'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[1, -1.45, 0]}
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
                    position={[-2, 0, 0]}
                    url='https://quick-essay101.vercel.app/'
                    imgSrc='./qe101.png'
                    title='QuickEssay101'
                    subtitle={'Ai Generated MLA Essays'}
                    stack={'Nextjs || ChatGPT || Stripe'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[-0.5, 0, 0]}
                    url='https://www.cpai.app/'
                    imgSrc='./cpai.png'
                    title='ChartProphet Ai'
                    subtitle={'Lead FE dev @ Web3 Ai Startup'}
                    stack={'React || Solidity & BSC'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[1, 0, 0]}
                    url='https://github.com/Contact-IoT-Digital-Signage'
                    imgSrc='./iot.png'
                    title='Iot Digital Signage'
                    subtitle={'1st place in the 2023 DevWeek Hackathon!!'}
                    stack={'React || ZoomSDK || Oracle Cloud || Firebase'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[2.5, 0, 0]}
                    url='https://www.npmjs.com/package/react-model-viewer-3d?activeTab=readme'
                    imgSrc='./npmpackage.png'
                    title='npm react-model-viewer-3d'
                    subtitle={'package for viewing 3d models in react'}
                    stack={'Webpack || Babel || React || R3F'}
                />
                <PortfolioCard
                    scale={0.4}
                    position={[4, 0, 0]}
                    url='https://mindbee-journal.vercel.app/'
                    imgSrc='./mindbee.png'
                    title='MindBee Journal'
                    stack={'Nextjs || Stripe || Firebase || Ai'}
                    subtitle={'Wellness Journal & Ai Therapist'}
                />
            </Float>

        </group>
    );
}