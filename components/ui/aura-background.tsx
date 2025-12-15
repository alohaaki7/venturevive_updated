"use client";

import React from "react";

export function AuraBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030314]">

            {/* Stars/particles */}
            <div className="stars-container absolute inset-0">
                {[...Array(80)].map((_, i) => (
                    <div
                        key={i}
                        className="star absolute rounded-full bg-white"
                        style={{
                            width: `${Math.random() * 2 + 1}px`,
                            height: `${Math.random() * 2 + 1}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    />
                ))}
            </div>

            {/* Shooting stars - falling diagonally with trail */}
            <div className="shooting-stars-container absolute inset-0 overflow-hidden pointer-events-none">
                {/* Top section stars */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`top-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${-5 + Math.random() * 20}%`,
                            left: `${5 + i * 16}%`,
                            animationDelay: `${i * 2 + Math.random() * 2}s`,
                        }}
                    />
                ))}
                {/* Middle section stars */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`mid-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${25 + Math.random() * 25}%`,
                            left: `${8 + i * 15}%`,
                            animationDelay: `${i * 2.5 + 1 + Math.random() * 2}s`,
                        }}
                    />
                ))}
                {/* Bottom section stars */}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`bottom-${i}`}
                        className="shooting-star"
                        style={{
                            top: `${55 + Math.random() * 25}%`,
                            left: `${3 + i * 17}%`,
                            animationDelay: `${i * 3 + 0.5 + Math.random() * 2}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating particles */}
            <div className="particles-container absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="particle absolute rounded-full"
                        style={{
                            width: `${Math.random() * 4 + 2}px`,
                            height: `${Math.random() * 4 + 2}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            background: `radial-gradient(circle, rgba(${100 + Math.random() * 100}, ${150 + Math.random() * 100}, 255, 0.8) 0%, transparent 70%)`,
                            boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(100, 150, 255, 0.5)`,
                            animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 10}s`,
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
