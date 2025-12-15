"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Zap,
    Activity,
    BarChart3,
    Code,
    ShieldCheck,
    Lock,
    Github,
    ArrowRight,
    TrendingUp,
    Globe
} from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
    return (
        <section className="relative z-10 mx-4 sm:mx-8 md:mx-16 pt-24 pb-12">


            {/* Hero Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2.0, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-neutral-900/40 border border-white/5 rounded-[24px] backdrop-blur-md items-stretch"
            >
                {/* Visual / Image */}
                <div className="relative overflow-hidden rounded-[20px] min-h-[300px] md:min-h-[520px] order-first md:order-first">
                    <Image
                        src="/hero-main.webp"
                        alt="Abstract render"
                        fill
                        priority
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="bg-gradient-to-t from-black/60 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                    <div className="pointer-events-none absolute inset-0 opacity-20 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:28px_28px]"></div>

                    <div className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4 flex items-center gap-2">
                        <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg sm:rounded-xl bg-white/10 backdrop-blur flex-shrink-0 text-white">
                            <ShieldCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                        </span>
                        <p className="text-[10px] sm:text-xs text-neutral-200">Trusted by Top Funds</p>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col sm:p-6 md:p-8 pt-4 pr-4 pb-4 pl-4 justify-center">
                    <div className="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-400 mb-4">
                        <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span>Branding that closes deals</span>
                    </div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 2.3, ease: "easeOut" }}
                        className="text-[40px] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] font-medium tracking-tighter font-sans"
                    >
                        Your Fund Deserves <em className="italic text-blue-300">Better</em> Than a Template
                    </motion.h1>

                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/70 leading-relaxed max-w-lg">
                        Founders check you out before you check them out. We build websites that actually look like a $100M fund, handle your social so you're not posting from your iPhone at midnight, and make your brand something founders remember.
                    </p>

                    <div className="sm:mt-8 flex flex-col lg:flex-row lg:items-center mt-6 gap-x-3 gap-y-3 items-stretch">
                        {/* Primary Button */}
                        <Link href="#solutions" className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-black transition-transform active:scale-95 hover:scale-105">
                            <span>See Our Process</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>

                        {/* Secondary Button */}
                        <Link href="#portfolio" className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-medium text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95 text-center">
                            <span>View Our Work</span>
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-neutral-900/60 rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 border border-white/5">
                            <p className="text-[9px] sm:text-[10px] text-neutral-400">Websites</p>
                            <p className="text-base font-semibold text-white tracking-tight mt-0.5 sm:mt-1 sm:text-lg md:text-xl text-nowrap">2 weeks</p>
                            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400">Launch ready</p>
                        </div>
                        <div className="bg-neutral-900/60 rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 border border-white/5">
                            <p className="text-[9px] sm:text-[10px] text-neutral-400">Your Time</p>
                            <p className="text-base font-semibold text-white tracking-tight mt-0.5 sm:mt-1 sm:text-lg md:text-xl text-nowrap">15 min</p>
                            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400">Per month</p>
                        </div>
                        <div className="bg-neutral-900/60 rounded-[16px] sm:rounded-[20px] p-3 sm:p-4 border border-white/5">
                            <p className="text-[9px] sm:text-[10px] text-neutral-400">Inbound</p>
                            <p className="text-base font-semibold text-white tracking-tight mt-0.5 sm:mt-1 sm:text-lg md:text-xl text-nowrap">+60%</p>
                            <p className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-neutral-400">More founders</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Lower info cards */}
            <div className="mt-3 sm:mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* Feature Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative flex flex-col overflow-hidden bg-neutral-900/40 h-[320px] sm:h-[360px] md:h-[400px] rounded-[24px] sm:rounded-[32px] border border-white/10 justify-end group"
                >
                    <Image src="/hero-card1.webp" alt="Trust and Credibility" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                    <div className="relative p-5 sm:p-6 md:p-8">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 backdrop-blur text-emerald-400 flex-shrink-0 border border-emerald-500/20">
                                <ShieldCheck className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="text-lg font-semibold tracking-tight text-white">Trust & Credibility</h4>
                                <p className="mt-1 text-sm text-neutral-300 leading-relaxed max-w-xs">Use content to verify your expertise before the first meeting even happens.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Feature Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative flex flex-col overflow-hidden bg-neutral-900/40 h-[320px] sm:h-[360px] md:h-[400px] rounded-[24px] sm:rounded-[32px] border border-white/10 justify-end group"
                >
                    <Image src="/hero-card2.webp" alt="Global Reach" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="bg-gradient-to-t from-black/90 via-black/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
                    <div className="relative p-5 sm:p-6 md:p-8">
                        <div className="flex items-start gap-3">
                            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 backdrop-blur text-indigo-400 flex-shrink-0 border border-indigo-500/20">
                                <Globe className="w-5 h-5" />
                            </span>
                            <div>
                                <h4 className="text-lg font-semibold tracking-tight text-white">Global Reach</h4>
                                <p className="mt-1 text-sm text-neutral-300 leading-relaxed max-w-xs">Amplify your thesis to founders in every ecosystem, 24/7.</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
