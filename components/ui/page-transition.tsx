"use client";

import { useEffect, useState } from "react";

interface PageTransitionProps {
    isActive: boolean;
    onComplete?: () => void;
}

export function PageTransition({ isActive, onComplete }: PageTransitionProps) {
    const [showIcon, setShowIcon] = useState(false);

    useEffect(() => {
        if (isActive) {
            // Show icon after tiles animate in
            const iconTimer = setTimeout(() => setShowIcon(true), 1400);
            return () => clearTimeout(iconTimer);
        } else {
            setShowIcon(false);
            if (onComplete) {
                const completeTimer = setTimeout(onComplete, 1400);
                return () => clearTimeout(completeTimer);
            }
        }
    }, [isActive, onComplete]);

    const tiles = [0, 1, 2, 3, 4];

    return (
        <div
            className={`fixed z-[999] top-0 left-0 h-screen transition-[width] ${isActive ? 'w-full' : 'w-0 delay-[1.4s]'
                }`}
        >
            {/* Loader Icon */}
            <div
                className={`absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${showIcon ? 'opacity-100' : 'opacity-0'
                    }`}
            >
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="animate-spin"
                >
                    <path
                        opacity="0.2"
                        fill="#fff"
                        d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
                    />
                    <path
                        fill="#fff"
                        d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0C22.32,8.481,24.301,9.057,26.013,10.047z"
                    />
                </svg>
            </div>

            {/* Tiles */}
            {tiles.map((i) => (
                <div
                    key={i}
                    className="absolute left-0 h-[20%] bg-[#007AE5] transition-[width] duration-700 ease-out"
                    style={{
                        top: `${i * 20}%`,
                        width: isActive ? '100%' : '0%',
                        transitionDelay: `${i * 0.2}s`,
                    }}
                />
            ))}
        </div>
    );
}
