import Link from "next/link";
import { Mail, Calendar, Twitter, Linkedin, Instagram, Dribbble, Globe } from "lucide-react";

export function Footer() {
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
                        <h2 className="text-[10vw] sm:text-[12vw] lg:text-[9vw] leading-[0.9] font-semibold tracking-tighter font-sans">
                            <span className="block">Ready to build</span>
                            <span className="block text-blue-300">your <em className="italic">digital legacy</em>?</span>
                        </h2>

                        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:items-end">
                            {/* Email */}
                            <div>
                                <p className="text-sm text-white/60 font-sans">Get Started</p>
                                <a
                                    href="mailto:hello@venturevive.io"
                                    className="mt-2 inline-flex items-center gap-3 text-xl sm:text-2xl font-medium tracking-tight text-white font-sans hover:text-white/80 transition-colors"
                                >
                                    <Mail className="w-5 h-5 stroke-[1.5] flex-shrink-0" />
                                    <span className="break-all">hello@venturevive.io</span>
                                </a>
                            </div>

                            {/* Call */}
                            <div>
                                <p className="text-sm text-white/60 font-sans">Schedule a Call</p>
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 hover:bg-white/90 text-sm font-medium text-gray-900 tracking-tight bg-white border-white/10 border rounded-full mt-2 py-3 px-5 transition-colors duration-200"
                                >
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-sans">Book a Meeting</span>
                                </a>
                            </div>

                            {/* Social */}
                            <div>
                                <p className="text-sm text-white/60 font-sans">Follow Along</p>
                                <div className="flex flex-wrap gap-3 mt-2 items-center">
                                    <a
                                        href="https://www.linkedin.com/company/venturevive"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-900 border border-white/10 hover:bg-white/90 transition-colors duration-200"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <p className="text-center md:text-left text-xs text-white/50 font-sans">
                                © 2025 VentureVive — Crafted with care in San Francisco
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
