"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
    text: string;
    className?: string;
    highlightWord?: string;
    highlightClass?: string;
}

export function AnimatedText({ text, className = "", highlightWord, highlightClass = "text-blue-300 italic" }: AnimatedTextProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        // Split text into words and wrap each in a span
        const words = text.split(" ");
        textRef.current.innerHTML = words.map(word => {
            if (highlightWord && word.toLowerCase().includes(highlightWord.toLowerCase())) {
                return `<span class="word inline-block"><em class="${highlightClass}">${word}</em></span>`;
            }
            return `<span class="word inline-block">${word}</span>`;
        }).join(" ");

        const wordElements = textRef.current.querySelectorAll(".word");

        // Create the scroll-triggered animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play reverse play reverse", // Animate in and out
            }
        });

        // Animate each word with stagger
        tl.fromTo(
            wordElements,
            {
                opacity: 0,
                y: 50,
                rotateX: -90,
            },
            {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.6,
                stagger: 0.05,
                ease: "back.out(1.7)",
            }
        );

        return () => {
            tl.kill();
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [text, highlightWord, highlightClass]);

    return (
        <div ref={containerRef} className={className} style={{ perspective: "1000px" }}>
            <span ref={textRef} className="block" style={{ transformStyle: "preserve-3d" }}>
                {text}
            </span>
        </div>
    );
}

// Simpler version with scrub for smooth scroll-linked animation
export function ScrubText({ text, className = "" }: { text: string; className?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        // Split text into characters
        const chars = text.split("");
        textRef.current.innerHTML = chars.map(char =>
            char === " " ? " " : `<span class="char inline-block">${char}</span>`
        ).join("");

        const charElements = textRef.current.querySelectorAll(".char");

        // Create scrub animation - animates based on scroll position
        gsap.fromTo(
            charElements,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 85%",
                    end: "top 50%",
                    scrub: 1, // Smooth scroll-linked animation
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [text]);

    return (
        <div ref={containerRef} className={className}>
            <span ref={textRef}>{text}</span>
        </div>
    );
}
