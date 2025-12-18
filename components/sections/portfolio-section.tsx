"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { TransitionLink } from "@/components/ui/transition-link";
import { caseStudies } from "@/lib/case-studies";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Transform case studies for carousel display
const portfolioItems = caseStudies.map((study) => ({
    id: study.id,
    category: study.category,
    title: study.name,
    description: study.description,
    image: study.image,
    link: study.link,
}));

export function PortfolioSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = portfolioItems.length;

    useEffect(() => {
        if (!sectionRef.current || !trackRef.current || totalItems <= 1) return;

        const track = trackRef.current;
        const cards = track.querySelectorAll(".portfolio-card");

        // Calculate the total distance to scroll
        const cardWidth = cards[0]?.getBoundingClientRect().width || 600;
        const gap = 32;
        const totalDistance = (cardWidth + gap) * (totalItems - 1);

        const ctx = gsap.context(() => {
            // Main horizontal scroll animation
            const scrollTween = gsap.to(track, {
                x: -totalDistance,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${totalDistance + 500}`,
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1,
                    onUpdate: (self) => {
                        // Calculate which card is currently in focus
                        const progress = self.progress;
                        const newIndex = Math.min(
                            Math.round(progress * (totalItems - 1)),
                            totalItems - 1
                        );
                        setActiveIndex(newIndex);
                    },
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [totalItems]);

    return (
        <section
            ref={sectionRef}
            id="portfolio"
            className="relative z-10 min-h-screen overflow-hidden"
        >
            <div className="h-screen flex flex-col justify-center">
                <div className="px-4 sm:px-8 md:px-16">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-12 sm:mb-16"
                    >
                        <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-3">Portfolio</p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                            Our <span className="text-blue-300">Work</span>
                        </h2>
                        <p className="mt-4 text-sm sm:text-base text-white/60 max-w-lg">
                            Brands that stand out in the venture ecosystem
                        </p>
                    </motion.div>

                    {/* Progress Dots */}
                    {totalItems > 1 && (
                        <div className="flex gap-2 mb-6">
                            {portfolioItems.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 rounded-full transition-all duration-300 ${index === activeIndex
                                        ? "w-8 bg-blue-400"
                                        : "w-2 bg-white/20"
                                        }`}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Horizontal Scrolling Track */}
                <div className="relative overflow-visible">
                    <div
                        ref={trackRef}
                        className="flex gap-8 pl-4 sm:pl-8 md:pl-16"
                        style={{ width: "max-content" }}
                    >
                        {portfolioItems.map((item, index) => (
                            <a
                                key={item.id}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`portfolio-card group block w-[85vw] max-w-[600px] sm:w-[500px] md:w-[600px] flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl ring-1 transition-all duration-500 ${index === activeIndex
                                    ? "ring-blue-400/50 scale-100 opacity-100"
                                    : "ring-white/10 scale-95 opacity-40"
                                    }`}
                            >
                                {/* Card Image */}
                                <div className="relative aspect-video">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className={`w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 ${index === activeIndex ? "" : "grayscale"
                                            }`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                                    {/* Active indicator */}
                                    {index === activeIndex && (
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-400/30">
                                            <span className="text-xs font-medium text-blue-300">In Focus</span>
                                        </div>
                                    )}

                                    {/* Card number indicator */}
                                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                        <span className="text-sm font-medium text-white">{index + 1}/{totalItems}</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <div className="p-4 sm:p-6 bg-black/40 backdrop-blur-sm">
                                    <div className="flex items-end justify-between gap-4">
                                        <div className="flex-1">
                                            <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider mb-1">
                                                {item.category}
                                            </p>
                                            <h3 className="text-lg sm:text-xl font-semibold text-white">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-white/60 mt-1 line-clamp-2">
                                                {item.description}
                                            </p>
                                        </div>
                                        <span className={`inline-flex items-center gap-1.5 text-sm transition-colors px-4 py-2 rounded-full flex-shrink-0 ${index === activeIndex
                                            ? "text-blue-300 bg-white/10 group-hover:bg-white/20"
                                            : "text-white/40 bg-white/5"
                                            }`}>
                                            View
                                            <ExternalLink className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Scroll hint */}
                {totalItems > 1 && (
                    <div className="px-4 sm:px-8 md:px-16 mt-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex items-center gap-4 text-white/40"
                        >
                            <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
                            <p className="text-xs uppercase tracking-wider">Scroll to explore</p>
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-white/60"
                            >
                                →
                            </motion.div>
                        </motion.div>
                    </div>
                )}

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mt-10 sm:mt-12 px-4"
                >
                    <TransitionLink
                        href="/case-studies"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
                    >
                        View All Work
                        <ExternalLink className="w-4 h-4" />
                    </TransitionLink>
                </motion.div>
            </div>
        </section>
    );
}
