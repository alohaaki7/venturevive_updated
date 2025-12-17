"use client";

import React, { useRef } from "react";
import { Clock, Lightbulb, BarChart3 } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GSAPHeading, GSAPParagraph } from "@/components/ui/gsap-text";

export function SolutionsSection() {
    // Refs for parallax on each card
    const card1Ref = useRef<HTMLElement>(null);
    const card2Ref = useRef<HTMLElement>(null);
    const card3Ref = useRef<HTMLElement>(null);
    const card4Ref = useRef<HTMLElement>(null);

    // Parallax transforms
    const { scrollYProgress: scroll1 } = useScroll({ target: card1Ref, offset: ["start end", "end start"] });
    const { scrollYProgress: scroll2 } = useScroll({ target: card2Ref, offset: ["start end", "end start"] });
    const { scrollYProgress: scroll3 } = useScroll({ target: card3Ref, offset: ["start end", "end start"] });
    const { scrollYProgress: scroll4 } = useScroll({ target: card4Ref, offset: ["start end", "end start"] });

    const y1 = useTransform(scroll1, [0, 1], ["0%", "-20%"]);
    const y2 = useTransform(scroll2, [0, 1], ["0%", "-20%"]);
    const y3 = useTransform(scroll3, [0, 1], ["0%", "-20%"]);
    const y4 = useTransform(scroll4, [0, 1], ["0%", "-20%"]);

    return (
        <section id="solutions" className="sm:p-8 ring-1 ring-white/10 bg-white/5 rounded-3xl mx-8 sm:mx-16 p-6 backdrop-blur">
            <div className="flex items-center gap-2 text-sm text-white/70">
                <span className="font-normal">What We Actually Do</span>
            </div>
            <div className="mt-2">
                <GSAPHeading
                    as="h2"
                    className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium text-white tracking-tighter"
                    highlight="Brand."
                    highlightClass="italic text-blue-300"
                >
                    Websites. Social. Brand.
                </GSAPHeading>
                <GSAPParagraph className="mt-1 text-sm sm:text-base text-white/70 font-normal">
                    Three things most VC firms get wrong. We fix all of them.
                </GSAPParagraph>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-4 mt-6">
                {/* Card 1 - Custom Websites */}
                <motion.article
                    ref={card1Ref}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="sm:p-6 flex flex-col min-h-[320px] group transition-all duration-300 ring-white/15 ring-1 bg-white/10 rounded-2xl p-5 backdrop-blur justify-between relative overflow-hidden"
                >
                    {/* Parallax Background */}
                    <motion.div
                        className="absolute inset-0 -inset-y-10 transition-all duration-500 group-hover:scale-105 bg-cover rounded-2xl"
                        style={{
                            backgroundImage: "url('/custom-website.jpg')",
                            backgroundPosition: "center 40px",
                            y: y1
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    <motion.div
                        className="space-y-5 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
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
                    </motion.div>
                    <div className="h-1.5 overflow-hidden relative z-10 bg-white/10 rounded-full mt-4">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "25%" }} />
                    </div>
                </motion.article>

                {/* Card 2 - Social That Works */}
                <motion.article
                    ref={card2Ref}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 rounded-2xl p-5 backdrop-blur justify-between relative overflow-hidden"
                >
                    {/* Parallax Background */}
                    <motion.div
                        className="absolute inset-0 -inset-y-10 transition-all duration-500 group-hover:scale-105 bg-cover rounded-2xl"
                        style={{
                            backgroundImage: "url('/social-globe.png')",
                            backgroundPosition: "center bottom",
                            y: y2
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    <motion.div
                        className="space-y-5 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
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
                    </motion.div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "50%" }} />
                    </div>
                </motion.article>

                {/* Card 3 - Brand That Sticks */}
                <motion.article
                    ref={card3Ref}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 rounded-2xl p-5 backdrop-blur grayscale justify-between relative overflow-hidden"
                >
                    {/* Parallax Background */}
                    <motion.div
                        className="absolute inset-0 -inset-y-10 transition-all duration-500 group-hover:scale-105 bg-cover rounded-2xl grayscale"
                        style={{
                            backgroundImage: "url('/brand-rings.png')",
                            backgroundPosition: "center bottom",
                            y: y3
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    <motion.div
                        className="space-y-5 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
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
                    </motion.div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "75%" }} />
                    </div>
                </motion.article>

                {/* Card 4 - Real Results */}
                <motion.article
                    ref={card4Ref}
                    initial={{ opacity: 0, y: 60, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="sm:p-6 flex flex-col min-h-[320px] ring-1 ring-white/15 group transition-all duration-300 bg-white/10 rounded-2xl p-5 backdrop-blur grayscale justify-between relative overflow-hidden"
                >
                    {/* Parallax Background */}
                    <motion.div
                        className="absolute inset-0 -inset-y-10 transition-all duration-500 group-hover:scale-105 bg-cover rounded-2xl grayscale"
                        style={{
                            backgroundImage: "url('/data-analytics.png')",
                            backgroundPosition: "center 20%",
                            y: y4
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl" />
                    <motion.div
                        className="space-y-5 relative z-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
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
                    </motion.div>
                    <div className="mt-4 h-1.5 bg-white/10 rounded-full overflow-hidden relative z-10">
                        <div className="h-full bg-white/40 rounded-full" style={{ width: "100%" }} />
                    </div>
                </motion.article>
            </div>
        </section>
    );
}
