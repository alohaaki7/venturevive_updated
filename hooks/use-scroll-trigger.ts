"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollTriggerOptions {
    trigger?: string | Element;
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
    markers?: boolean;
    toggleActions?: string;
    onEnter?: () => void;
    onLeave?: () => void;
    onEnterBack?: () => void;
    onLeaveBack?: () => void;
}

/**
 * Hook for creating GSAP ScrollTrigger animations
 * 
 * Example usage:
 * ```tsx
 * const sectionRef = useRef(null);
 * useScrollTriggerAnimation(sectionRef, {
 *   from: { opacity: 0, y: 50 },
 *   to: { opacity: 1, y: 0 },
 *   trigger: { start: "top 80%", end: "top 20%" }
 * });
 * ```
 */
export function useScrollTriggerAnimation(
    targetRef: React.RefObject<HTMLElement>,
    options: {
        from: gsap.TweenVars;
        to: gsap.TweenVars;
        trigger?: UseScrollTriggerOptions;
        duration?: number;
    }
) {
    useEffect(() => {
        if (!targetRef.current) return;

        const element = targetRef.current;
        const triggerOptions = options.trigger || {};

        const ctx = gsap.context(() => {
            gsap.fromTo(element, options.from, {
                ...options.to,
                duration: options.duration || 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: triggerOptions.trigger || element,
                    start: triggerOptions.start || "top 80%",
                    end: triggerOptions.end || "top 20%",
                    scrub: triggerOptions.scrub || false,
                    toggleActions: triggerOptions.toggleActions || "play none none reverse",
                    markers: triggerOptions.markers || false,
                    onEnter: triggerOptions.onEnter,
                    onLeave: triggerOptions.onLeave,
                    onEnterBack: triggerOptions.onEnterBack,
                    onLeaveBack: triggerOptions.onLeaveBack,
                },
            });
        }, targetRef);

        return () => ctx.revert();
    }, [targetRef, options]);
}

/**
 * Hook for creating a pinned section with scroll-linked animation
 * 
 * Example usage:
 * ```tsx
 * const containerRef = useRef(null);
 * usePinnedSection(containerRef, {
 *   pinDuration: "200%", // How long to pin (% of viewport)
 *   animation: (progress) => {
 *     // Animate based on scroll progress (0-1)
 *   }
 * });
 * ```
 */
export function usePinnedSection(
    containerRef: React.RefObject<HTMLElement>,
    options: {
        pinDuration?: string;
        onProgress?: (progress: number, direction: number) => void;
    }
) {
    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: "top top",
                end: options.pinDuration || "+=100%",
                pin: true,
                scrub: true,
                onUpdate: (self) => {
                    options.onProgress?.(self.progress, self.direction);
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, options]);
}

/**
 * Hook for batch animations - animate multiple elements with stagger
 */
export function useScrollBatch(
    containerRef: React.RefObject<HTMLElement>,
    selector: string,
    options: {
        from?: gsap.TweenVars;
        to?: gsap.TweenVars;
        stagger?: number;
        start?: string;
    }
) {
    useEffect(() => {
        if (!containerRef.current) return;

        const elements = containerRef.current.querySelectorAll(selector);
        if (elements.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.fromTo(elements,
                options.from || { opacity: 0, y: 30 },
                {
                    ...(options.to || { opacity: 1, y: 0 }),
                    duration: 0.8,
                    stagger: options.stagger || 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: options.start || "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, selector, options]);
}

/**
 * Smooth scroll-linked progress value
 */
export function useScrollProgress(
    containerRef: React.RefObject<HTMLElement>,
    options?: {
        start?: string;
        end?: string;
    }
): number {
    const progressRef = useRef(0);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: containerRef.current,
                start: options?.start || "top bottom",
                end: options?.end || "bottom top",
                onUpdate: (self) => {
                    progressRef.current = self.progress;
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, options]);

    return progressRef.current;
}
