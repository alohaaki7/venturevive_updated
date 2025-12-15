"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";

export default function CaseStudiesPage() {
    return (
        <div className="pt-32 pb-24 mx-8 sm:mx-16">
            {/* Header */}
            <div className="mb-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-xs uppercase text-blue-400 tracking-widest mb-2 font-semibold">
                        Our Work
                    </p>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tighter">
                        Case Studies
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl">
                        Real projects. Real results. Click to see them live.
                    </p>
                </motion.div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {caseStudies.map((study, i) => (
                    <motion.a
                        key={i}
                        href={study.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="group block"
                    >
                        <div
                            className="rounded-2xl p-6 h-full backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-white/20"
                            style={{
                                background: "linear-gradient(180deg, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.95))",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                            }}
                        >
                            {/* Preview image */}
                            <div className="h-40 rounded-xl bg-white/5 mb-4 flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-white/10 transition-colors relative">
                                {study.image ? (
                                    <img
                                        src={study.image}
                                        alt={study.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                ) : (
                                    <ExternalLink className="w-8 h-8 text-white/20 group-hover:text-white/40 transition-colors" />
                                )}
                            </div>

                            {/* Tags */}
                            <div className="flex gap-2 mb-3">
                                {study.tags.map((tag, j) => (
                                    <span
                                        key={j}
                                        className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Content */}
                            <h3 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                                {study.name}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed">
                                {study.description}
                            </p>

                            {/* Link indicator */}
                            <div className="mt-4 flex items-center gap-2 text-white/40 group-hover:text-blue-400 transition-colors">
                                <span className="text-sm">View Live</span>
                                <ExternalLink className="w-4 h-4" />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Empty state message */}
            {caseStudies.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-white/40">Case studies coming soon...</p>
                </div>
            )}
        </div>
    );
}
