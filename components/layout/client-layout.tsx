"use client";

import { Preloader } from "@/components/ui/preloader";
import { PreloaderProvider } from "@/components/ui/preloader-context";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <PreloaderProvider>
            <Preloader />
            {children}
        </PreloaderProvider>
    );
}
