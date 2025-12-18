"use client";

import { useEffect } from "react";

type TransitionDirection = "forward" | "backward";

interface PageTransitionProps {
    isActive: boolean;
    direction?: TransitionDirection;
    onComplete?: () => void;
}

export function PageTransition({ isActive, direction = "forward", onComplete }: PageTransitionProps) {
    useEffect(() => {
        if (!isActive && onComplete) {
            const completeTimer = setTimeout(onComplete, 1000);
            return () => clearTimeout(completeTimer);
        }
    }, [isActive, onComplete]);

    const tiles = [0, 1, 2, 3, 4];

    // Forward: tiles come from left, Backward: tiles come from right
    const isForward = direction === "forward";

    return (
        <div
            className={`fixed z-[999] top-0 h-screen transition-[width] ${isForward ? 'left-0' : 'right-0'
                } ${isActive ? 'w-full' : 'w-0 delay-[1s]'}`}
        >
            {/* Tiles - Dark blue */}
            {tiles.map((i) => (
                <div
                    key={i}
                    className={`absolute h-[20%] bg-[#0A1628] transition-[width] duration-500 ease-out ${isForward ? 'left-0' : 'right-0'
                        }`}
                    style={{
                        top: `${i * 20}%`,
                        width: isActive ? '100%' : '0%',
                        transitionDelay: `${i * 0.12}s`,
                    }}
                />
            ))}
        </div>
    );
}
