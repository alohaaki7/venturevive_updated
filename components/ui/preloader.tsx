"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { usePreloader } from "./preloader-context";

export function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [showLoader, setShowLoader] = useState(true);
    const [showCurtains, setShowCurtains] = useState(true);
    const { setPreloaderDone } = usePreloader();

    useEffect(() => {
        const minDisplayTime = 1800; // Minimum time to show preloader
        const startTime = Date.now();

        const handleLoad = () => {
            const elapsed = Date.now() - startTime;
            const remaining = Math.max(0, minDisplayTime - elapsed);

            // Wait for minimum display time, then start exit sequence
            setTimeout(() => {
                // Phase 1: Hide loader (fade up)
                setShowLoader(false);

                // Phase 2: Start hero animations BEFORE curtains open
                // This ensures content is ready when revealed
                setTimeout(() => {
                    setPreloaderDone(); // Trigger hero animations NOW

                    // Phase 2b: Open curtains (slightly after hero starts animating)
                    setTimeout(() => {
                        setShowCurtains(false);

                        // Phase 3: Remove preloader entirely after curtains finish
                        setTimeout(() => {
                            setIsLoading(false);
                        }, 1000);
                    }, 100); // Small delay so hero content starts before curtains open
                }, 300); // Wait for loader to fade out
            }, remaining);
        };

        // Check if already loaded
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, [setPreloaderDone]);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[100]">
            {/* Left Curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: showCurtains ? 0 : "-100%" }}
                transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1], // Custom smooth easing
                }}
                className="absolute top-0 left-0 w-1/2 h-full bg-[#030314] z-[101]"
            />

            {/* Right Curtain */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: showCurtains ? 0 : "100%" }}
                transition={{
                    duration: 0.9,
                    ease: [0.76, 0, 0.24, 1], // Custom smooth easing
                }}
                className="absolute top-0 right-0 w-1/2 h-full bg-[#030314] z-[101]"
            />

            {/* Logo Loader Container */}
            <AnimatePresence>
                {showLoader && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -60, scale: 0.9 }}
                        transition={{
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0 flex flex-col items-center justify-center z-[102]"
                    >
                        {/* Logo */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Image
                                src="/logo.png"
                                alt="VentureVive"
                                width={80}
                                height={80}
                                className="opacity-90"
                            />
                        </motion.div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-6 text-sm text-white/40 tracking-[0.3em] uppercase font-sans"
                        >
                            Loading
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                ...
                            </motion.span>
                        </motion.p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
