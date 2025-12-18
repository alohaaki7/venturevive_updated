"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
    isTransitioning: boolean;
    navigateWithTransition: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const navigateWithTransition = useCallback((href: string) => {
        // Start transition animation
        setIsTransitioning(true);

        // Wait for tiles to fully cover screen (1.4s), then navigate
        setTimeout(() => {
            router.push(href);

            // Keep transition visible briefly on new page, then close
            setTimeout(() => {
                setIsTransitioning(false);
            }, 500);
        }, 1400);
    }, [router]);

    return (
        <TransitionContext.Provider value={{ isTransitioning, navigateWithTransition }}>
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
