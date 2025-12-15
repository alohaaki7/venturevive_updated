"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import Link from "next/link";

const team = [
    {
        name: "Akmyrat Akatov",
        initials: "AA",
        role: "Strategy & Brand",
        roleDescription: "Crafting brand identities that help VCs stand out and attract better deal flow.",
        gradient: "from-blue-500 via-purple-500 to-pink-500",
        linkedin: "https://linkedin.com/in/akmyrat-a-60129b17b",
    },
    {
        name: "Jumamyrat",
        initials: "JM",
        role: "Development & Tech",
        roleDescription: "Building fast, modern websites that convert visitors into partners.",
        gradient: "from-cyan-500 via-blue-500 to-indigo-500",
        linkedin: "",
    },
];

export function TeamSection() {
    return (
        <section id="team" className="py-24 relative z-10 overflow-hidden mx-8 sm:mx-16">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <p className="text-xs uppercase text-blue-400 tracking-widest mb-2 font-sans font-semibold">
                    The Minds Behind
                </p>
                <h2 className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium tracking-tighter font-sans">
                    <span className="text-blue-300">The Team.</span>
                </h2>
            </motion.div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        className="w-full sm:w-[380px]"
                        style={{ transform: "none" }}
                    >
                        {/* Dark Card */}
                        <div
                            className="rounded-2xl overflow-hidden backdrop-blur-md h-full min-h-[220px]"
                            style={{
                                background: "linear-gradient(180deg, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.95))",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                            }}
                        >
                            {/* Gradient Avatar with Initials */}
                            <div className="p-6 pb-4 flex items-center gap-4">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center shadow-lg`}>
                                    <span className="text-white font-bold text-lg tracking-tight">{member.initials}</span>
                                </div>
                                <div>
                                    <div className="text-white font-medium">{member.name}</div>
                                    <div className="text-blue-400 text-sm font-medium">{member.role}</div>
                                </div>
                            </div>

                            {/* Role Description */}
                            <div className="px-6 pb-4">
                                <p className="text-sm leading-relaxed text-white/60">
                                    {member.roleDescription}
                                </p>
                            </div>

                            {/* LinkedIn Link */}
                            {member.linkedin && (
                                <div className="px-6 pb-5 pt-3 border-t border-white/10">
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-blue-400 transition-colors"
                                    >
                                        <Linkedin size={16} />
                                        <span>Connect on LinkedIn</span>
                                    </Link>
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
