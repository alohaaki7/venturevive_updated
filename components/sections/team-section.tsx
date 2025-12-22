"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Linkedin, User } from "lucide-react";
import Link from "next/link";
import { GSAPHeading } from "@/components/ui/gsap-text";

const team = [
    {
        name: "Akmyrat Akatov",
        role: "Strategy & Brand",
        roleDescription: "Crafting brand identities that help VCs stand out and attract better deal flow.",
        linkedin: "https://linkedin.com/in/akmyrat-a-60129b17b",
    },
    {
        name: "Juma",
        role: "Development & Tech",
        roleDescription: "Building fast, modern websites that convert visitors into partners.",
        linkedin: "",
    },
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
                {children}
            </div>
        </motion.div>
    );
}

export function TeamSection() {
    return (
        <section id="team" className="py-24 relative z-10 overflow-hidden mx-8 sm:mx-16">
            <div className="text-center mb-16">
                <p className="text-xs uppercase text-blue-400 tracking-widest mb-2 font-sans font-semibold">
                    The Minds Behind
                </p>
                <GSAPHeading
                    as="h2"
                    className="text-[44px] sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] font-medium tracking-tighter font-sans text-blue-300"
                >
                    The Team.
                </GSAPHeading>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6" style={{ perspective: "1000px" }}>
                {team.map((member, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full sm:w-[380px]"
                    >
                        <TiltCard className="cursor-pointer">
                            {/* Dark Card */}
                            <div
                                className="rounded-2xl overflow-hidden backdrop-blur-md h-full min-h-[220px] transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
                                style={{
                                    background: "linear-gradient(180deg, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.95))",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                                }}
                            >
                                {/* Avatar with User Icon */}
                                <div className="p-6 pb-4 flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-xl bg-zinc-800 border border-white/10 flex items-center justify-center">
                                        <User className="w-7 h-7 text-white/60" />
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
                        </TiltCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
