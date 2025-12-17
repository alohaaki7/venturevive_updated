"use client";

import React, { useRef } from "react";
import { Star, Zap, TrendingUp, Brain, Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GSAPHeading, GSAPParagraph } from "@/components/ui/gsap-text";

export function PerformanceSection() {
    const sectionRef = useRef<HTMLElement>(null);

    // Track scroll progress through the section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Spotlight position moves from left (-100%) to right (200%) as you scroll
    const spotlightX = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "50%", "200%"]);

    return (
        <section ref={sectionRef} id="performance" className="mx-8 sm:mx-16 py-24 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="sm:p-8 bg-zinc-900/40 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md relative overflow-hidden"
            >
                {/* Animated Spotlight Gradient */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-0"
                    style={{ x: spotlightX }}
                >
                    <div
                        className="absolute top-0 left-0 w-[60%] h-full"
                        style={{
                            background: "radial-gradient(ellipse 60% 100% at center, rgba(59, 130, 246, 0.15) 0%, rgba(139, 92, 246, 0.1) 30%, transparent 70%)",
                            filter: "blur(40px)",
                        }}
                    />
                </motion.div>

                <div className="flex items-center gap-2 text-sm text-zinc-400 relative z-10">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-normal font-sans">Proven Performance</span>
                </div>
                <div className="mt-2 text-center sm:text-left relative z-10">
                    <GSAPHeading
                        as="h2"
                        className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-sans font-medium tracking-tighter text-blue-300"
                    >
                        Results.
                    </GSAPHeading>
                    <GSAPParagraph className="mt-4 text-sm sm:text-base text-zinc-400 font-normal font-sans max-w-xl">
                        Real business impact based on our proprietary methodology. We don't just post; we generate deal flow.
                    </GSAPParagraph>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 relative z-10">
                    {/* Main Metrics Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="group p-5 sm:p-6 flex flex-col sm:min-h-[420px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg justify-between hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                    >
                        {/* Card spotlight glow on hover */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />

                        <div className="space-y-5 relative z-10">
                            <div className="flex items-end gap-2">
                                <motion.span
                                    className="text-5xl sm:text-6xl text-white font-sans font-medium tracking-tighter"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                >
                                    60
                                </motion.span>
                                <span className="text-zinc-400 text-3xl font-normal font-sans pb-2">%</span>
                            </div>
                            <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                                Average increase in <span className="font-medium text-white">qualified inbound inquiries</span> for our partner funds within the first 6 months.
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <div className="h-8 w-8 bg-gradient-to-br from-blue-900 to-blue-800 border border-blue-700/50 rounded-full flex items-center justify-center">
                                    <Zap className="h-4 w-4 text-blue-200" />
                                </div>
                                <div className="h-8 w-8 bg-gradient-to-br from-violet-900 to-violet-800 border border-violet-700/50 -ml-3 rounded-full flex items-center justify-center">
                                    <Brain className="h-4 w-4 text-violet-200" />
                                </div>
                                <div className="h-8 w-8 bg-gradient-to-br from-emerald-900 to-emerald-800 border border-emerald-700/50 -ml-3 rounded-full flex items-center justify-center">
                                    <TrendingUp className="h-4 w-4 text-emerald-200" />
                                </div>
                                <span className="inline-flex items-center justify-center -ml-2 h-8 px-3 rounded-full bg-white text-zinc-900 text-xs font-bold font-sans">
                                    Top 1%
                                </span>
                            </div>

                            <div className="flex items-center gap-1 text-emerald-500">
                                <TrendingUp className="h-4 w-4" />
                                <span className="text-xs text-zinc-400 font-normal font-sans">
                                    Consistent growth quarter over quarter
                                </span>
                            </div>
                        </div>
                        <button className="mt-6 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition font-sans relative z-10">
                            See our work
                        </button>
                    </motion.article>

                    {/* Time Savings Column */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        {/* Small Profile Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="h-10 w-10 bg-gradient-to-br from-neutral-700 to-neutral-600 rounded-md flex items-center justify-center text-xs text-white font-bold">
                                    JP
                                </div>
                                <div>
                                    <p className="text-sm font-medium tracking-tight leading-tight text-white font-sans">
                                        Partner Productivity
                                    </p>
                                    <p className="text-xs text-zinc-400 font-sans">Efficiency Metric</p>
                                </div>
                            </div>
                            <span className="text-zinc-600 relative z-10">
                                <Plus className="h-4 w-4" />
                            </span>
                        </motion.article>

                        {/* Time Stats Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-5 sm:p-6 flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg justify-start gap-4 sm:gap-6 hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(234,179,8,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-yellow-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex items-center gap-1 text-yellow-500 relative z-10">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
                                    >
                                        <Star className="h-4 w-4 fill-yellow-500" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-3xl text-white font-sans font-medium tracking-tighter mb-2">
                                    5h → 15m
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                                    We reduced partner time commitment from 5+ hours to just 15 minutes monthly, while actually increasing output volume.
                                </p>
                            </div>
                            <div className="sm:mt-auto pt-4 border-t border-white/5 relative z-10">
                                <p className="text-xs text-zinc-500 font-sans">"VentureVive gave me my weekends back."</p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Quality Meetings Column */}
                    <div className="grid grid-rows-[1fr_auto] gap-4">
                        {/* Quality Quote Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl p-5 sm:p-6 backdrop-blur-lg sm:justify-between hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                            <p className="text-2xl sm:text-3xl text-left leading-snug text-white font-sans font-medium tracking-tighter relative z-10">
                                "We are seeing 8-10 <em className="italic">high-quality</em> founder meetings per quarter directly from Twitter/X."
                            </p>
                            <div className="mt-4 sm:mt-6 flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                                        >
                                            <Star className="h-4 w-4 fill-yellow-500" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.article>

                        {/* Metric Strip */}
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex gap-3 bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="h-10 w-10 bg-gradient-to-br from-emerald-900 to-emerald-800 border border-emerald-700/30 rounded-md flex items-center justify-center relative z-10">
                                <TrendingUp className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div className="relative z-10">
                                <p className="text-sm font-medium tracking-tight leading-tight text-white font-sans">
                                    Deal Flow Quality
                                </p>
                                <p className="text-xs text-zinc-400 font-sans">Primary KPI</p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Transparency Column */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="group flex bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-all duration-500 cursor-pointer relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="h-10 w-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-md flex items-center justify-center text-xs text-white font-bold border border-blue-700/30">
                                    R
                                </div>
                                <div>
                                    <p className="text-sm font-medium tracking-tight leading-tight text-white font-sans">
                                        Reporting
                                    </p>
                                    <p className="text-xs text-zinc-400 font-sans">Monthly Transparency</p>
                                </div>
                            </div>
                            <span className="text-zinc-600 relative z-10">
                                <Plus className="h-4 w-4" />
                            </span>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="group p-5 sm:p-6 flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg sm:justify-between hover:bg-zinc-800/40 hover:border-zinc-600 hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-all duration-500 cursor-pointer gap-4 sm:gap-0 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/10 via-transparent to-transparent pointer-events-none" />
                            <div className="flex items-center justify-end relative z-10">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3, delay: 0.6 + i * 0.1 }}
                                        >
                                            <Star className="h-4 w-4 fill-yellow-500" />
                                        </motion.div>
                                    ))}
                                </div>
                                <span className="text-zinc-600 ml-2">
                                    <Plus className="h-4 w-4" />
                                </span>
                            </div>
                            <p className="text-2xl sm:text-3xl text-right leading-snug text-white font-sans font-medium tracking-tighter relative z-10">
                                Complete transparency. You see exactly how every post contributes to your thesis.
                            </p>
                        </motion.article>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
