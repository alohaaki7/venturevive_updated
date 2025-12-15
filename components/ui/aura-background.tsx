"use client";

import React, { useState, useEffect } from "react";

// Pre-calculated star positions to avoid hydration mismatch
const STARS = Array.from({ length: 80 }, (_, i) => ({
    width: ((i * 7) % 20) / 10 + 1,
    height: ((i * 11) % 20) / 10 + 1,
    top: ((i * 13) % 100),
    left: ((i * 17) % 100),
    opacity: ((i * 19) % 50) / 100 + 0.2,
    duration: ((i * 23) % 30) / 10 + 2,
    delay: ((i * 29) % 50) / 10,
}));

const PARTICLES = Array.from({ length: 15 }, (_, i) => ({
    width: ((i * 7) % 40) / 10 + 2,
    height: ((i * 11) % 40) / 10 + 2,
    top: ((i * 13) % 100),
    left: ((i * 17) % 100),
    r: 100 + ((i * 19) % 100),
    g: 150 + ((i * 23) % 100),
    blur: ((i * 29) % 100) / 10 + 5,
    duration: ((i * 31) % 200) / 10 + 15,
    delay: ((i * 37) % 100) / 10,
}));

export function AuraBackground() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030314]">

            {/* Stars/particles */}
            <div className="stars-container absolute inset-0">
                {STARS.map((star, i) => (
                    <div
                        key={i}
                        className="star absolute rounded-full bg-white"
                        style={{
                            width: `${star.width}px`,
                            height: `${star.height}px`,
                            top: `${star.top}%`,
                            left: `${star.left}%`,
                            opacity: star.opacity,
                            animation: `twinkle ${star.duration}s ease-in-out infinite`,
                            animationDelay: `${star.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Shooting stars - falling diagonally with trail */}
            {mounted && (
                <div className="shooting-stars-container absolute inset-0 overflow-hidden pointer-events-none">
                    {/* Top section stars */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`top-${i}`}
                            className="shooting-star"
                            style={{
                                top: `${-5 + (i * 3)}%`,
                                left: `${5 + i * 16}%`,
                                animationDelay: `${i * 2 + (i * 0.3)}s`,
                            }}
                        />
                    ))}
                    {/* Middle section stars */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`mid-${i}`}
                            className="shooting-star"
                            style={{
                                top: `${25 + (i * 4)}%`,
                                left: `${8 + i * 15}%`,
                                animationDelay: `${i * 2.5 + 1 + (i * 0.4)}s`,
                            }}
                        />
                    ))}
                    {/* Bottom section stars */}
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={`bottom-${i}`}
                            className="shooting-star"
                            style={{
                                top: `${55 + (i * 4)}%`,
                                left: `${3 + i * 17}%`,
                                animationDelay: `${i * 3 + 0.5 + (i * 0.3)}s`,
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Floating particles */}
            <div className="particles-container absolute inset-0 overflow-hidden">
                {PARTICLES.map((p, i) => (
                    <div
                        key={i}
                        className="particle absolute rounded-full"
                        style={{
                            width: `${p.width}px`,
                            height: `${p.height}px`,
                            top: `${p.top}%`,
                            left: `${p.left}%`,
                            background: `radial-gradient(circle, rgba(${p.r}, ${p.g}, 255, 0.8) 0%, transparent 70%)`,
                            boxShadow: `0 0 ${p.blur}px rgba(100, 150, 255, 0.5)`,
                            animation: `float ${p.duration}s ease-in-out infinite`,
                            animationDelay: `${p.delay}s`,
                        }}
                    />
                ))}
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            <style jsx>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.8; transform: scale(1.2); }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-30px) translateX(10px); }
                    50% { transform: translateY(-10px) translateX(-15px); }
                    75% { transform: translateY(-40px) translateX(5px); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50% { opacity: 0.25; transform: scale(1.05); }
                }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
                
                /* Shooting star - diagonal falling */
                .shooting-star {
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 6px 2px rgba(255, 255, 255, 0.8);
                    opacity: 0;
                    animation: fall 6s linear infinite;
                }
                
                /* The trailing line */
                .shooting-star::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 80px;
                    height: 1px;
                    background: linear-gradient(90deg, rgba(255,255,255,0.8), transparent);
                    transform: rotate(-135deg);
                    transform-origin: 0 0;
                }
                
                @keyframes fall {
                    0% { 
                        opacity: 0;
                        transform: translate(0, 0);
                    }
                    5% {
                        opacity: 1;
                    }
                    15% { 
                        opacity: 0;
                        transform: translate(150px, 150px);
                    }
                    100% { 
                        opacity: 0;
                        transform: translate(150px, 150px);
                    }
                }
            `}</style>
        </div>
    );
}
