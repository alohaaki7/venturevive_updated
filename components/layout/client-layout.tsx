"use client";

import { Preloader } from "@/components/ui/preloader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Preloader />
            {children}
        </>
    );
}
