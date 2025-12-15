"use client";

import React from "react";
import { Clock, Palette, Star, Play, Lightbulb, Target, BarChart3, Repeat } from "lucide-react";
import { motion } from "framer-motion";

export function SolutionsSection() {
    return (
        <section id="solutions" className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mx-8 sm:mx-16 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="font-normal">What We Actually Do</span>
            </div>
            <div className="mt-2">
                <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter">
                    Websites. Social. <em className="italic text-blue-300">Brand.</em>
                </h2>
                <p className="mt-1 text-sm sm:text-base text-white/70 font-normal">
                    Three things most VC firms get wrong. We fix all of them.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 mt-6">
                {/* Card 1 - Expertise Visible */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="sm:p-6 flex flex-col min-h-[320px] group transition-all duration-300 ring-white/15 ring-1 bg-white/10 bg-cover rounded-2xl p-5 backdrop-blur justify-between relative overflow-hidden"
                    style={{ backgroundImage: "url('/custom-website.jpg')", backgroundPosition: "center 40px" }}
                >
                    <div
                        className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-cover rounded-2xl"
                        style={{ backgroundImage: "url('/custom-website.jpg')", backgroundPosition: "center 40px", zIndex: -1 }}
                    />
                    <div className="space-y-5 relative z-10">
                        <div className="flex gap-3 items-center">
                            <div>
                                <h3 className="text-lg font-semibold text-white tracking-tight">01. Custom Websites</h3>
                                <p className="uppercase text-xs text-white/60 tracking-wider">Not Another Squarespace</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80">
                            Your fund raises $100M+ but your website looks like it was built in 2015. We build sites that actually match who you are — fast, modern, and designed to convert founders.
                        </p>
                        <div className="flex gap-2 items-center">
                            <div className="flex -space-x-1">
                                <div className="h-6 w-6 ring-2 ring-white/20 flex bg-white/20 rounded-full items-center justify-center">
                                    <Lightbulb className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <span className="text-xs text-white/60">2-week delivery</span>
                        </div>
                    </div>
                    <div className="h-1.5 overflow-hidden relative z-10 bg-white/10 rounded-full mt-4">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "25%" }} />
                    </div>
                </motion.article>

                {/* Card 2 - Partner Time Saved */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-cover rounded-2xl p-5 backdrop-blur justify-between relative overflow-hidden"
                    style={{ backgroundImage: "url('/social-globe.png')", backgroundPosition: "center bottom" }}
                >
                    <div
                        className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-cover rounded-2xl"
                        style={{ backgroundImage: "url('/social-globe.png')", backgroundPosition: "center bottom", zIndex: -1 }}
                    />
                    <div className="space-y-5 relative z-10">
                        <div className="flex items-center gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-white tracking-tight">02. Social That Works</h3>
                                <p className="text-xs text-white/60 uppercase tracking-wider">Not Just Posts</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80">
                            You shouldn't be writing Twitter threads at 11pm. We handle your LinkedIn, X, and everywhere else — sounding like you, not some intern.
                        </p>
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-1">
                                <div className="h-6 w-6 rounded-full bg-white/20 ring-2 ring-white/20 flex items-center justify-center">
                                    <Clock className="h-3 w-3 text-white/70" />
                                </div>
                            </div>
                            <span className="text-xs text-white/60">15 min/month from you</span>
                        </div>
                    </div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "50%" }} />
                    </div>
                </motion.article>

                {/* Card 3 - Consistent Presence */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-cover rounded-2xl p-5 backdrop-blur grayscale justify-between relative overflow-hidden"
                    style={{ backgroundImage: "url('/brand-rings.png')", backgroundPosition: "center bottom" }}
                >
                    <div
                        className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-cover rounded-2xl grayscale"
                        style={{ backgroundImage: "url('/brand-rings.png')", backgroundPosition: "center bottom", zIndex: -1 }}
                    />
                    <div className="space-y-5 relative z-10">
                        <div className="flex items-center gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-white tracking-tight">03. Brand That Sticks</h3>
                                <p className="text-xs text-white/60 uppercase tracking-wider">Finally Consistent</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80">
                            Your deck says one thing. Your website says another. Your LinkedIn is from 2019. We tie it all together so founders actually remember who you are.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-white/60">
                                <div className="h-2 w-2 rounded-full bg-green-400" />
                                <span className="text-xs">Zero downtime</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <div className="h-2 w-2 rounded-full bg-blue-400" />
                                <span className="text-xs">24/7 coverage</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/60">
                                <div className="h-2 w-2 rounded-full bg-purple-400" />
                                <span className="text-xs">Reliable posting</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "75%" }} />
                    </div>
                </motion.article>

                {/* Card 4 - Growth Metrics */}
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 bg-cover rounded-2xl p-5 backdrop-blur grayscale justify-between relative overflow-hidden"
                    style={{ backgroundImage: "url('/data-analytics.png')", backgroundPosition: "center 20%" }}
                >
                    <div
                        className="absolute inset-0 transition-all duration-300 group-hover:blur-sm bg-cover rounded-2xl grayscale"
                        style={{ backgroundImage: "url('/data-analytics.png')", backgroundPosition: "center 20%", zIndex: -1 }}
                    />
                    <div className="space-y-5 relative z-10">
                        <div className="flex items-center gap-3">
                            <div>
                                <h3 className="text-lg font-semibold text-white tracking-tight">04. Real Results</h3>
                                <p className="text-xs text-white/60 uppercase tracking-wider">Not Vanity Metrics</p>
                            </div>
                        </div>
                        <p className="text-sm text-white/80">
                            We don't count likes. We count how many founders reached out because they saw your content. +60% inbound inquiries. 8-10 extra qualified meetings per quarter. Numbers that matter.
                        </p>
                        <div className="inline-flex gap-2 bg-white/10 rounded-full py-1.5 px-3 backdrop-blur items-center">
                            <BarChart3 className="h-3.5 w-3.5 text-white/70" />
                            <span className="text-xs text-white/70">Founder meetings, not followers</span>
                        </div>
                    </div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "100%" }} />
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
