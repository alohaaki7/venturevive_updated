"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type TransitionDirection = "forward" | "backward";

interface TransitionContextType {
    isTransitioning: boolean;
    direction: TransitionDirection;
    navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState<TransitionDirection>("forward");
    const router = useRouter();
    const pathname = usePathname();

    const navigateWithTransition = useCallback((href: string) => {
        // Determine direction based on navigation
        // Going to "/" (home) = backward, going to other pages = forward
        const isGoingHome = href === "/";
        const newDirection: TransitionDirection = isGoingHome ? "backward" : "forward";

        setDirection(newDirection);
        setIsTransitioning(true);

        // Wait for tiles to cover screen, then navigate
        setTimeout(() => {
            router.push(href);

            // Keep transition visible briefly on new page, then close
            setTimeout(() => {
                setIsTransitioning(false);
            }, 300);
        }, 900);
    }, [router, pathname]);

    return (
        <TransitionContext.Provider value={{ isTransitioning, direction, navigateWithTransition }}>
            {children}
        </TransitionContext.Provider>
    );
}

export function useTransition() {
    const context = useContext(TransitionContext);
    if (!context) {
        throw new Error("useTransition must be used within TransitionProvider");
    }
    return context;
}
