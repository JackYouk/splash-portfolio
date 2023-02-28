import { Image, Text } from "@react-three/drei";

export default function PortfolioCard ({scale, position, url, imgSrc, title, stack, subtitle}) {

    return (
        <group 
            scale={scale} 
            position={position}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerLeave={() => document.body.style.cursor = 'default'}
            onClick={() => window.open(url, '_blank')}
        >
                <Image 
                    url={imgSrc} 
                    zoom={1}
                    scale={[3, 3]}
                />
                <Text
                    font="./Alata_Regular.json"
                    scale={0.25}
                    position={[0, -1.8, 0]}
                    color='black'
                >
                    {title}
                </Text>
                <Text
                    font="./Alata_Regular.json"
                    scale={0.15}
                    position={[0, -2.1, 0]}
                    color='gray'
                >
                    {stack}
                </Text>
                <Text
                    font="./Alata_Regular.json"
                    scale={0.15}
                    position={[0, -2.3, 0]}
                    color='gray'
                >
                    {subtitle}
                </Text>
        </group>
    )
}