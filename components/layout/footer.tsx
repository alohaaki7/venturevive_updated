"use client";

import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

// Magnetic effect hook
function useMagnetic(strength: number = 0.3) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;
        x.set(deltaX);
        y.set(deltaY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { ref, xSpring, ySpring, handleMouseMove, handleMouseLeave };
}

// Staggered text animation component
function AnimatedText({ text, className }: { text: string; className?: string }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
        }),
    };

    const child = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.span
            className={className}
            variants={container as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            style={{ display: "inline-flex", flexWrap: "wrap" }}
        >
            {words.map((word, index) => (
                <motion.span
                    variants={child as any}
                    key={index}
                    style={{ marginRight: "0.3em", display: "inline-block" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
}

// Moving gradient text component
function GradientText({ children }: { children: React.ReactNode }) {
    return (
        <motion.span
            className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-transparent bg-[length:200%_auto]"
            animate={{
                backgroundPosition: ["0% center", "200% center"],
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
            }}
        >
            {children}
        </motion.span>
    );
}

export function Footer() {
    const magnetic = useMagnetic(0.4);
    const [emailHovered, setEmailHovered] = useState(false);

    return (
        <footer className="relative z-10">
            <div className="mx-8 sm:mx-16 mb-16 mt-8 sm:mt-10">
                <div className="relative overflow-hidden rounded-[40px] ring-1 ring-white/10 bg-white/5 text-white p-6 sm:p-8 backdrop-blur">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(255,255,255,0.06),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_120%,rgba(255,255,255,0.05),transparent_60%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0d_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]"></div>
                    </div>

                    <div className="relative">
                        {/* Magnetic heading with staggered text */}
                        <motion.div
                            ref={magnetic.ref}
                            onMouseMove={magnetic.handleMouseMove}
                            onMouseLeave={magnetic.handleMouseLeave}
                            style={{ x: magnetic.xSpring, y: magnetic.ySpring }}
                            className="cursor-default"
                        >
                            <h2 className="text-[10vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-sans">
                                <span className="block">
                                    <AnimatedText text="Ready to build" />
                                </span>
                                <span className="block">
                                    <motion.span
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                    >
                                        <GradientText>
                                            your <em className="italic">digital legacy</em>?
                                        </GradientText>
                                    </motion.span>
                                </span>
                            </h2>
                        </motion.div>

                        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:items-end">
                            {/* Email with hover underline animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                            >
                                <p className="text-sm text-white/60 font-sans">Get Started</p>
                                <a
                                    href="mailto:hello@venturevive.io"
                                    className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-sans group relative"
                                    onMouseEnter={() => setEmailHovered(true)}
                                    onMouseLeave={() => setEmailHovered(false)}
                                >
                                    <motion.span
                                        animate={{ rotate: emailHovered ? [0, -10, 10, -10, 0] : 0 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <Mail className="w-5 h-5 stroke-[1.5] flex-shrink-0" />
                                    </motion.span>
                                    <span className="relative">
                                        <span className="break-all">hello@venturevive.io</span>
                                        {/* Animated underline */}
                                        <motion.span
                                            className="absolute bottom-0 left-0 h-[2px] bg-blue-400"
                                            initial={{ width: 0 }}
                                            animate={{ width: emailHovered ? "100%" : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        />
                                    </span>
                                </a>
                            </motion.div>

                            {/* Social with scale/glow hover */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                <p className="text-sm text-white/60 font-sans">Follow Along</p>
                                <div className="flex flex-wrap gap-3 mt-2 items-center">
                                    <motion.a
                                        href="https://www.linkedin.com/company/venturevive"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 relative"
                                        whileHover={{
                                            scale: 1.15,
                                            boxShadow: "0 0 25px rgba(59, 130, 246, 0.5), 0 0 50px rgba(59, 130, 246, 0.3)"
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="mt-6 pt-6 border-t border-white/10"
                        >
                            <p className="text-center md:text-left text-xs text-white/50 font-sans">
                                © 2025 VentureVive — Crafted with care in San Francisco
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
