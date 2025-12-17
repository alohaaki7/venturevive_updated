"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

interface PreloaderContextType {
    isPreloaderDone: boolean;
    setPreloaderDone: () => void;
}

const PreloaderContext = createContext<PreloaderContextType>({
    isPreloaderDone: false,
    setPreloaderDone: () => { },
});

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    const setPreloaderDone = useCallback(() => {
        setIsPreloaderDone(true);
    }, []);

    return (
        <PreloaderContext.Provider value={{ isPreloaderDone, setPreloaderDone }}>
            {children}
        </PreloaderContext.Provider>
    );
}

export function usePreloader() {
    return useContext(PreloaderContext);
}
