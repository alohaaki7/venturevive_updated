import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface GlassCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    tags?: string[];
    children?: React.ReactNode; // For the inner visual/article
    className?: string;
}

export function GlassCard({
    title,
    description,
    icon,
    tags = [],
    children,
    className,
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "group relative w-full h-full overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-neutral-900/40 rounded-[20px] max-w-xl border border-white/10 hover:bg-neutral-900/60",
                className
            )}
            style={{
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
            }}
        >
            {/* Glossy borders/masks simulation - simplified for React/Tailwind without complex masks for now, using borders */}
            <div className="absolute inset-0 border border-white/10 rounded-[20px] pointer-events-none"></div>

            <div className="flex flex-col h-full p-4">
                <div className="flex mb-2 items-start justify-between">
                    <div className="w-full">
                        <div className="flex items-center gap-3 mb-3">
                            {icon && (
                                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-700 to-neutral-800 text-white border border-white/5">
                                    {icon}
                                </span>
                            )}
                            <h3 className="text-lg font-semibold tracking-tight text-white font-sans">{title}</h3>
                        </div>
                        <p className="text-neutral-300 text-sm font-light mb-4 font-sans leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Inner Content Area (The "article" part from the original HTML) */}
                {children && (
                    <div className="relative overflow-hidden h-24 sm:h-28 bg-gradient-to-br from-zinc-900 to-black border-zinc-800 border rounded-lg mb-2 group-hover:border-zinc-700 transition-colors">
                        {children}
                    </div>
                )}

                <div className="mt-auto">
                    {tags && tags.length > 0 && (
                        <>
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3 mt-2"></div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-neutral-500/10 border border-neutral-500/20 text-neutral-400 font-sans"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </>
                    )}

                    <div className="inline-flex items-center text-sm font-medium text-neutral-300 hover:text-white transition-colors cursor-pointer group/link">
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </div>
                </div>
            </div>
        </div>
    );
}
