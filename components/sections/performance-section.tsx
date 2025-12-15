"use client";

import React from "react";
import { Star, Zap, TrendingUp, Brain, Plus } from "lucide-react";
import { motion } from "framer-motion";

export function PerformanceSection() {
    return (
        <section id="performance" className="mx-8 sm:mx-16 py-24 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="sm:p-8 bg-zinc-900/40 border-zinc-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-md"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-center gap-2 text-sm text-zinc-400"
                >
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-normal font-sans">Proven Performance</span>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-2 text-center sm:text-left"
                >
                    <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-sans font-medium tracking-tighter">
                        <span className="text-blue-300">Results.</span>
                    </h2>
                    <p className="mt-4 text-sm sm:text-base text-zinc-400 font-normal font-sans max-w-xl">
                        Real business impact based on our proprietary methodology. We don't just post; we generate deal flow.
                    </p>
                </motion.div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4">
                    {/* Main Metrics Card */}
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-5 sm:p-6 flex flex-col sm:min-h-[420px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg justify-between hover:bg-zinc-800/30 transition-colors"
                    >
                        <div className="space-y-5">
                            <div className="flex items-end gap-2">
                                <span className="text-5xl sm:text-6xl text-white font-sans font-medium tracking-tighter">
                                    60
                                </span>
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
                        <button className="mt-6 h-11 w-full rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition font-sans">
                            See our work
                        </button>
                    </motion.article>

                    {/* Time Savings Column */}
                    <div className="grid grid-rows-[auto_1fr] gap-4">
                        {/* Small Profile Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="flex bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
                                {/* Placeholder Avatar */}
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
                            <span className="text-zinc-600">
                                <Plus className="h-4 w-4" />
                            </span>
                        </motion.article>

                        {/* Time Stats Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-5 sm:p-6 flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg justify-start gap-4 sm:gap-6 hover:bg-zinc-800/30 transition-colors"
                        >
                            <div className="flex items-center gap-1 text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500" />
                                ))}
                            </div>
                            <div>
                                <h3 className="text-3xl text-white font-sans font-medium tracking-tighter mb-2">
                                    5h → 15m
                                </h3>
                                <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                                    We reduced partner time commitment from 5+ hours to just 15 minutes monthly, while actually increasing output volume.
                                </p>
                            </div>
                            <div className="sm:mt-auto pt-4 border-t border-white/5">
                                <p className="text-xs text-zinc-500 font-sans">"VentureVive gave me my weekends back."</p>
                            </div>
                        </motion.article>
                    </div>

                    {/* Quality Meetings Column */}
                    <div className="grid grid-rows-[1fr_auto] gap-4">
                        {/* Quality Quote Card */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl p-5 sm:p-6 backdrop-blur-lg sm:justify-between hover:bg-zinc-800/30 transition-colors"
                        >
                            <p className="text-2xl sm:text-3xl text-left leading-snug text-white font-sans font-medium tracking-tighter">
                                "We are seeing 8-10 <em className="italic">high-quality</em> founder meetings per quarter directly from Twitter/X."
                            </p>
                            <div className="mt-4 sm:mt-6 flex items-center justify-between">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </motion.article>

                        {/* Metric Strip */}
                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex gap-3 bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center"
                        >
                            <div className="h-10 w-10 bg-gradient-to-br from-emerald-900 to-emerald-800 border border-emerald-700/30 rounded-md flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
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
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex bg-zinc-800/20 border-zinc-800 border rounded-2xl p-4 backdrop-blur-lg items-center justify-between"
                        >
                            <div className="flex items-center gap-3">
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
                            <span className="text-zinc-600">
                                <Plus className="h-4 w-4" />
                            </span>
                        </motion.article>

                        <motion.article
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="p-5 sm:p-6 flex flex-col sm:min-h-[300px] bg-zinc-800/20 border-zinc-800 border rounded-2xl backdrop-blur-lg sm:justify-between hover:bg-zinc-800/30 transition-colors gap-4 sm:gap-0"
                        >
                            <div className="flex items-center justify-end">
                                <div className="flex items-center gap-1 text-yellow-500">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-500" />
                                    ))}
                                </div>
                                <span className="text-zinc-600 ml-2">
                                    <Plus className="h-4 w-4" />
                                </span>
                            </div>
                            <p className="text-2xl sm:text-3xl text-right leading-snug text-white font-sans font-medium tracking-tighter">
                                Complete transparency. You see exactly how every post contributes to your thesis.
                            </p>
                        </motion.article>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
