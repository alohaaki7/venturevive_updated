"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { caseStudies } from "@/lib/case-studies";

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
    const [currentIndex, setCurrentIndex] = useState(0);
    const hasMultipleItems = portfolioItems.length > 1;

    const nextSlide = () => {
        if (hasMultipleItems) {
            setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
        }
    };

    const prevSlide = () => {
        if (hasMultipleItems) {
            setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
        }
    };

    const getVisibleItems = () => {
        if (portfolioItems.length === 1) {
            // Only one item - show it centered
            return [{ ...portfolioItems[0], position: 0 }];
        }
        if (portfolioItems.length === 2) {
            // Two items - show current and next
            return [
                { ...portfolioItems[currentIndex], position: 0 },
                { ...portfolioItems[(currentIndex + 1) % 2], position: 1 },
            ];
        }
        // Three or more - show prev, current, next
        const items = [];
        for (let i = -1; i <= 1; i++) {
            const index = (currentIndex + i + portfolioItems.length) % portfolioItems.length;
            items.push({ ...portfolioItems[index], position: i });
        }
        return items;
    };

    const currentItem = portfolioItems[currentIndex];

    return (
        <section id="portfolio" className="relative z-10 py-16 sm:py-24 mx-4 sm:mx-8 md:mx-16">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12 sm:mb-16"
            >
                <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wider mb-3">Portfolio</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
                    Our <span className="text-blue-300">Work</span>
                </h2>
                <p className="mt-4 text-sm sm:text-base text-white/60 max-w-lg mx-auto">
                    Brands that stand out in the venture ecosystem
                </p>
            </motion.div>

            {/* Single Item Display */}
            {portfolioItems.length === 1 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center"
                >
                    <a
                        href={currentItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full max-w-[600px] h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:ring-white/20 transition-all hover:scale-[1.02]"
                    >
                        {/* Card Image */}
                        <div className="absolute inset-0">
                            <img
                                src={currentItem.image}
                                alt={currentItem.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        </div>

                        {/* Card Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-white/50 uppercase tracking-wider">
                                        {currentItem.category}
                                    </p>
                                    <h3 className="text-base sm:text-lg font-semibold text-white">
                                        {currentItem.title}
                                    </h3>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-sm text-blue-300 group-hover:text-blue-200 transition-colors px-3 py-1.5 rounded-full bg-white/10">
                                    View
                                    <ExternalLink className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </a>
                </motion.div>
            )}

            {/* Carousel for multiple items */}
            {portfolioItems.length > 1 && (
                <div className="relative flex items-center justify-center gap-4 sm:gap-6 h-[280px] sm:h-[340px] overflow-hidden">
                    <AnimatePresence initial={false} mode="sync">
                        {getVisibleItems().map((item) => (
                            <motion.div
                                key={`${item.id}-${item.position}`}
                                initial={{
                                    opacity: 0,
                                    scale: 0.85,
                                    x: item.position > 0 ? 100 : -100
                                }}
                                animate={{
                                    opacity: item.position === 0 ? 1 : 0.4,
                                    scale: item.position === 0 ? 1 : 0.9,
                                    x: 0,
                                    zIndex: item.position === 0 ? 10 : 5,
                                    filter: item.position === 0 ? "grayscale(0)" : "grayscale(1)"
                                }}
                                exit={{
                                    opacity: 0,
                                    scale: 0.85,
                                    x: item.position > 0 ? -100 : 100
                                }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                                onClick={() => {
                                    if (item.position === -1) prevSlide();
                                    if (item.position === 1) nextSlide();
                                }}
                                className={`absolute w-[280px] sm:w-[400px] md:w-[500px] h-[180px] sm:h-[240px] md:h-[280px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 ${item.position !== 0 ? "cursor-pointer hover:opacity-50 transition-opacity" : ""
                                    }`}
                                style={{
                                    left: '50%',
                                    transform: `translateX(calc(-50% + ${item.position * 320}px))`,
                                }}
                            >
                                {/* Card Image */}
                                <div className="absolute inset-0">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Card Content - Compact bottom bar */}
                                {item.position === 0 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.15 }}
                                        className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/40 backdrop-blur-sm flex items-center justify-between"
                                    >
                                        <div>
                                            <p className="text-[9px] text-white/50 uppercase tracking-wider">
                                                {item.category}
                                            </p>
                                            <h3 className="text-sm sm:text-base font-semibold text-white">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs text-blue-300 hover:text-blue-200 transition-colors px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20"
                                        >
                                            View
                                            <ExternalLink className="w-3 h-3" />
                                        </a>
                                    </motion.div>
                                )}

                                {/* Side card labels */}
                                {item.position !== 0 && (
                                    <div className="absolute bottom-3 left-4">
                                        <p className="text-xs sm:text-sm font-medium text-white/70">
                                            {item.title}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Navigation Arrows - only show if multiple items */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 p-2 sm:p-3 rounded-full bg-white/10 backdrop-blur border border-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </button>
                </div>
            )}

            {/* View More Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex justify-center mt-10 sm:mt-12"
            >
                <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white hover:bg-white/10 hover:scale-105 transition-all"
                >
                    View All Work
                    <ExternalLink className="w-4 h-4" />
                </Link>
            </motion.div>
        </section>
    );
}
