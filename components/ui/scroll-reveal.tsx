"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" | "slide-up";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    duration?: number;
    delay?: number;
    once?: boolean;
    amount?: number;
    enableExit?: boolean;
}

const animations: Record<AnimationType, { initial: object; animate: object }> = {
    "fade-up": {
        initial: { opacity: 0, y: 80 },  // Much bigger Y for noticeable effect
        animate: { opacity: 1, y: 0 },
    },
    "fade-down": {
        initial: { opacity: 0, y: -80 },
        animate: { opacity: 1, y: 0 },
    },
    "fade-left": {
        initial: { opacity: 0, x: -80 },
        animate: { opacity: 1, x: 0 },
    },
    "fade-right": {
        initial: { opacity: 0, x: 80 },
        animate: { opacity: 1, x: 0 },
    },
    "scale": {
        initial: { opacity: 0, scale: 0.85 },  // More dramatic scale
        animate: { opacity: 1, scale: 1 },
    },
    "blur": {
        initial: { opacity: 0, filter: "blur(20px)", y: 60 },  // Blur + movement
        animate: { opacity: 1, filter: "blur(0px)", y: 0 },
    },
    "slide-up": {
        initial: { opacity: 0, y: 120, rotateX: 10 },  // 3D slide up
        animate: { opacity: 1, y: 0, rotateX: 0 },
    },
};

/**
 * ScrollReveal - A wrapper component for scroll-triggered animations
 * 
 * @param animation - Type of animation: "fade-up", "fade-down", "fade-left", "fade-right", "scale", "blur", "slide-up"
 * @param duration - Animation duration in seconds (default: 0.8)
 * @param delay - Animation delay in seconds (default: 0)
 * @param once - If true, animation only plays once (default: true)
 * @param amount - How much of element must be visible to trigger (0-1, default: 0.15)
 * @param enableExit - If true, plays exit animation when scrolling out of view
 */
export function ScrollReveal({
    children,
    className = "",
    animation = "fade-up",
    duration = 1,
    delay = 0,
    once = true,
    amount = 0.15,
    enableExit = false,
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, {
        once: once && !enableExit,
        amount,
        margin: "-50px"
    });

    const selectedAnimation = animations[animation];

    // Smooth ease-out-expo for buttery feel
    const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={selectedAnimation.initial as any}
            animate={(isInView ? selectedAnimation.animate : selectedAnimation.initial) as any}
            transition={{
                duration,
                delay,
                ease: easing,
            }}
            style={{ willChange: "transform, opacity, filter" }}
        >
            {children}
        </motion.div>
    );
}

/**
 * ScrollRevealGroup - For staggering multiple children
 */
interface ScrollRevealGroupProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    animation?: AnimationType;
    duration?: number;
    once?: boolean;
}

export function ScrollRevealGroup({
    children,
    className = "",
    staggerDelay = 0.15,
    animation = "fade-up",
    duration = 0.8,
    once = true,
}: ScrollRevealGroupProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once, amount: 0.15, margin: "-50px" });

    const selectedAnimation = animations[animation];
    const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

    return (
        <motion.div
            ref={ref}
            className={className}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {React.Children.map(children, (child) => (
                <motion.div
                    variants={{
                        hidden: selectedAnimation.initial as any,
                        visible: {
                            ...selectedAnimation.animate,
                            transition: {
                                duration,
                                ease: easing,
                            },
                        } as any,
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
}
