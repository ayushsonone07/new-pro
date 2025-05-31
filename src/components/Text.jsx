"use client"
import { TypeAnimation } from 'react-type-animation';

export default function Text() {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'AYUSH SONONE',
                2000, // Waits 1s
                'A FULL STACK DEVELOPER', 
                2000, 
                'A GOOD HUMAN', 
                2000,
                ''
            ]}
            wrapper="span"
            speed={50}
            style={{  display: 'inline-block' }}
            repeat={Infinity}
        />
    );
}
