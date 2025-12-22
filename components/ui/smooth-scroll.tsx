"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
    useEffect(() => {
        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: "vertical",
            gestureOrientation: "vertical",
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        // Raf loop
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Integrate with GSAP ScrollTrigger if available
        if (typeof window !== "undefined" && (window as any).ScrollTrigger) {
            const ScrollTrigger = (window as any).ScrollTrigger;
            lenis.on("scroll", ScrollTrigger.update);
            ScrollTrigger.scrollerProxy(document.body, {
                scrollTop(value?: number) {
                    if (arguments.length) {
                        lenis.scrollTo(value!, { immediate: true });
                    }
                    return lenis.animatedScroll;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight,
                    };
                },
            });
        }

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
}
