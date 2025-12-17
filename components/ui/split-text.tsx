"use client";

import { motion, Variants, Transition } from "framer-motion";
import React from "react";

interface SplitTextProps {
    text: string;
    className?: string;
    highlightWord?: string;
    highlightClass?: string;
    isVisible: boolean;
    delay?: number;
}

export function SplitText({
    text,
    className = "",
    highlightWord,
    highlightClass = "",
    isVisible,
    delay = 0,
}: SplitTextProps) {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: delay,
                staggerChildren: 0.08, // More stagger between words
            },
        },
    };

    const wordVariant: Variants = {
        hidden: {
            y: "120%",      // Start further below
            opacity: 0,
            rotateX: -45,   // 3D rotation
        },
        visible: {
            y: "0%",
            opacity: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 30,
                stiffness: 200,
            } as Transition,
        },
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{ perspective: "1000px", display: "inline" }}
        >
            {words.map((word, index) => {
                const isHighlighted = highlightWord && word.includes(highlightWord);
                return (
                    <span
                        key={index}
                        className="inline-block overflow-hidden"
                        style={{ marginRight: "0.25em" }}
                    >
                        <motion.span
                            className={`inline-block ${isHighlighted ? highlightClass : ""}`}
                            variants={wordVariant}
                            style={{ transformOrigin: "bottom center", display: "inline-block" }}
                        >
                            {word}
                        </motion.span>
                    </span>
                );
            })}
        </motion.span>
    );
}

interface RevealTextProps {
    children: React.ReactNode;
    className?: string;
    isVisible: boolean;
    delay?: number;
}

export function RevealText({
    children,
    className = "",
    isVisible,
    delay = 0,
}: RevealTextProps) {
    return (
        <div className="overflow-hidden">
            <motion.div
                className={className}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={isVisible
                    ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                    : { y: "100%", opacity: 0, filter: "blur(8px)" }
                }
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
