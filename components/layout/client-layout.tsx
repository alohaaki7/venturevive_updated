"use client";

import { Preloader } from "@/components/ui/preloader";
import { PreloaderProvider } from "@/components/ui/preloader-context";
import { TransitionProvider, useTransition } from "@/components/ui/transition-context";
import { PageTransition } from "@/components/ui/page-transition";

function TransitionLayer() {
    const { isTransitioning, direction } = useTransition();
    return <PageTransition isActive={isTransitioning} direction={direction} />;
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <PreloaderProvider>
            <TransitionProvider>
                <Preloader />
                <TransitionLayer />
                {children}
            </TransitionProvider>
        </PreloaderProvider>
    );
}
