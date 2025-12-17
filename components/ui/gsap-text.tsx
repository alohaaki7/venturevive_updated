"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface GSAPTextProps {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    animation?: "chars" | "words" | "lines" | "blur-chars" | "slide-up";
    stagger?: number;
    duration?: number;
    delay?: number;
    scrub?: boolean;
    start?: string;
    end?: string;
}

/**
 * GSAPText - Animated typography component using GSAP ScrollTrigger
 * 
 * Animations:
 * - "chars": Each character animates in
 * - "words": Each word animates in
 * - "lines": Lines slide up
 * - "blur-chars": Characters blur in
 * - "slide-up": Words slide up from below
 */
export function GSAPText({
    children,
    className = "",
    as: Component = "p",
    animation = "words",
    stagger = 0.03,
    duration = 0.8,
    delay = 0,
    scrub = false,
    start = "top 85%",
    end = "top 20%",
}: GSAPTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementsRef = useRef<HTMLSpanElement[]>([]);

    // Split text into elements based on animation type
    const splitIntoElements = () => {
        if (animation === "chars" || animation === "blur-chars") {
            // Split into characters
            return children.split("").map((char, i) => (
                <span
                    key={i}
                    ref={(el) => { if (el) elementsRef.current[i] = el; }}
                    className="inline-block"
                    style={{
                        whiteSpace: char === " " ? "pre" : "normal",
                    }}
                >
                    {char}
                </span>
            ));
        } else {
            // Split into words
            return children.split(" ").map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden"
                    style={{ marginRight: "0.25em" }}
                >
                    <span
                        ref={(el) => { if (el) elementsRef.current[i] = el; }}
                        className="inline-block"
                    >
                        {word}
                    </span>
                </span>
            ));
        }
    };

    useEffect(() => {
        if (!containerRef.current || elementsRef.current.length === 0) return;

        const elements = elementsRef.current.filter(Boolean);

        // Set initial states
        let fromVars: gsap.TweenVars = {};
        let toVars: gsap.TweenVars = {};

        switch (animation) {
            case "chars":
                fromVars = { opacity: 0, y: 20 };
                toVars = { opacity: 1, y: 0 };
                break;
            case "words":
                fromVars = { opacity: 0, y: 30 };
                toVars = { opacity: 1, y: 0 };
                break;
            case "blur-chars":
                fromVars = { opacity: 0, filter: "blur(10px)", y: 10 };
                toVars = { opacity: 1, filter: "blur(0px)", y: 0 };
                break;
            case "slide-up":
                fromVars = { y: "100%", opacity: 0 };
                toVars = { y: "0%", opacity: 1 };
                break;
            case "lines":
                fromVars = { y: 40, opacity: 0 };
                toVars = { y: 0, opacity: 1 };
                break;
        }

        // Create GSAP animation
        const ctx = gsap.context(() => {
            gsap.set(elements, fromVars);

            gsap.to(elements, {
                ...toVars,
                duration,
                stagger,
                delay,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start,
                    end,
                    scrub: scrub ? 1 : false,
                    toggleActions: "play reverse play reverse",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [animation, stagger, duration, delay, scrub, start, end]);

    // Reset refs on re-render
    elementsRef.current = [];

    return (
        <Component ref={containerRef as any} className={className}>
            {splitIntoElements()}
        </Component>
    );
}

/**
 * GSAPHeading - Pre-configured heading with dramatic animation
 */
export function GSAPHeading({
    children,
    className = "",
    as = "h2",
    highlight,
    highlightClass = "text-blue-300 italic",
}: {
    children: string;
    className?: string;
    as?: "h1" | "h2" | "h3";
    highlight?: string;
    highlightClass?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordsRef = useRef<HTMLSpanElement[]>([]);

    const words = children.split(" ");

    useEffect(() => {
        if (!containerRef.current || wordsRef.current.length === 0) return;

        const elements = wordsRef.current.filter(Boolean);

        const ctx = gsap.context(() => {
            gsap.set(elements, {
                y: "110%",
                opacity: 0,
                rotateX: -45,
            });

            gsap.to(elements, {
                y: "0%",
                opacity: 1,
                rotateX: 0,
                duration: 1,
                stagger: 0.08,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "top 30%",
                    toggleActions: "play reverse play reverse",
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    wordsRef.current = [];
    const Component = as;

    return (
        <Component ref={containerRef as any} className={className} style={{ perspective: "1000px" }}>
            {words.map((word, i) => {
                const isHighlight = highlight && word.includes(highlight);
                return (
                    <span
                        key={i}
                        className="inline-block overflow-hidden"
                        style={{ marginRight: "0.25em" }}
                    >
                        <span
                            ref={(el) => { if (el) wordsRef.current[i] = el; }}
                            className={`inline-block ${isHighlight ? highlightClass : ""}`}
                            style={{ transformOrigin: "bottom center" }}
                        >
                            {word}
                        </span>
                    </span>
                );
            })}
        </Component>
    );
}

/**
 * GSAPParagraph - Animated paragraph with word reveal
 */
export function GSAPParagraph({
    children,
    className = "",
}: {
    children: string;
    className?: string;
}) {
    const containerRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(containerRef.current,
                {
                    opacity: 0,
                    y: 30,
                    filter: "blur(5px)"
                },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play reverse play reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <p ref={containerRef} className={className}>
            {children}
        </p>
    );
}
