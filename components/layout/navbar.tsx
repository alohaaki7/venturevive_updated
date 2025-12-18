"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ContactModal } from "@/components/ui/contact-modal";
import { motion } from "framer-motion";
import { usePreloader } from "@/components/ui/preloader-context";
import { TransitionLink } from "@/components/ui/transition-link";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isHomePage = pathname === "/";
    const { isPreloaderDone } = usePreloader();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1] // Smooth ease-out-expo
                }}
                className={`fixed top-4 left-0 right-0 z-50 text-white mx-4 sm:mx-8 md:mx-16 transition-all duration-300 ${isScrolled ? "translate-y-[-10px] opacity-0 md:opacity-100 md:translate-y-0" : ""}`}
            >
                <div className="w-full">
                    <div className="h-14 flex ring-1 ring-white/10 bg-slate-900/80 backdrop-blur-md rounded-full pr-2.5 pl-4 items-center justify-between shadow-lg">
                        <Link href="/" className="flex gap-2 items-center">
                            <img src="/logo.png" alt="VentureVive" className="h-7 w-auto" />
                            <span className="text-base font-semibold tracking-tight font-sans">VentureVive</span>
                        </Link>

                        {isHomePage && (
                            <nav className="hidden md:flex items-center gap-1 text-sm text-slate-300">
                                <Link href="#solutions" className="relative px-4 py-2 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl hover:border hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans group">
                                    <span className="relative z-10">Solutions</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </Link>
                                <Link href="#performance" className="relative px-4 py-2 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl hover:border hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans group">
                                    <span className="relative z-10">Results</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </Link>
                                <Link href="#team" className="relative px-4 py-2 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl hover:border hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans group">
                                    <span className="relative z-10">Team</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </Link>
                                <TransitionLink href="/case-studies" className="relative px-4 py-2 rounded-full overflow-hidden transition-all duration-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl hover:border hover:border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] font-sans group">
                                    <span className="relative z-10">Our Work</span>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                </TransitionLink>
                            </nav>
                        )}

                        <div className="hidden md:flex items-center gap-3">
                            <button
                                onClick={() => setIsContactOpen(true)}
                                className="relative inline-flex h-10 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out text-sm font-medium text-white bg-gradient-to-r from-white/10 to-white/5 border-white/20 border rounded-full px-6 backdrop-blur-xl items-center justify-center group hover:scale-105 hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                            >
                                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-white/5 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                </div>
                                <span className="relative z-10">Get in Touch</span>
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden mt-2 rounded-2xl ring-1 ring-white/10 bg-slate-900/95 backdrop-blur-md p-4 shadow-lg">
                            <nav className="flex flex-col gap-2">
                                {isHomePage && (
                                    <>
                                        <Link
                                            href="#solutions"
                                            onClick={closeMobileMenu}
                                            className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Solutions
                                        </Link>
                                        <Link
                                            href="#performance"
                                            onClick={closeMobileMenu}
                                            className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Results
                                        </Link>
                                        <Link
                                            href="#team"
                                            onClick={closeMobileMenu}
                                            className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Team
                                        </Link>
                                        <TransitionLink
                                            href="/case-studies"
                                            className="px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            Our Work
                                        </TransitionLink>
                                        <div className="h-px bg-white/10 my-2"></div>
                                    </>
                                )}
                                <button
                                    onClick={() => {
                                        closeMobileMenu();
                                        setIsContactOpen(true);
                                    }}
                                    className="px-4 py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/15 transition-colors text-center"
                                >
                                    Get in Touch
                                </button>
                            </nav>
                        </div>
                    )}
                </div>
            </motion.header>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
