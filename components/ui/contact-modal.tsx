"use client";

import React, { useState } from "react";
import { X, Send, Mail, Calendar, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            // Replace YOUR_FORM_ID with your Formspree form ID
            await fetch("https://formspree.io/f/YOUR_FORM_ID", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });
            setIsSubmitted(true);
            setTimeout(() => {
                onClose();
                setIsSubmitted(false);
            }, 2000);
        } catch {
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-4xl px-4"
                    >
                        <div className="relative rounded-3xl border border-white/20 bg-black/60 backdrop-blur-2xl p-6 sm:p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-10"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Header */}
                            <div className="text-center mb-8">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100">
                                    <Mail className="h-4 w-4" />
                                    Let's Work Together
                                </span>
                                <h2 className="mt-4 text-3xl sm:text-4xl tracking-tight font-semibold text-white">
                                    Ready to <em className="italic font-medium text-neutral-200">collaborate?</em>
                                </h2>
                                <p className="mt-2 text-neutral-400 text-sm max-w-md mx-auto">
                                    Whether you need help with websites, social, or branding — we're here to help.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="text-5xl mb-4">✓</div>
                                    <h3 className="text-xl font-semibold text-white">Thanks!</h3>
                                    <p className="text-white/60 mt-2">We'll be in touch soon.</p>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Contact Form */}
                                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                                        <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-300 mb-2">Name</label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        required
                                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                                                        placeholder="Your name"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-medium text-neutral-300 mb-2">Email</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        required
                                                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                                                        placeholder="your@email.com"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-300 mb-2">What do you need?</label>
                                                <select
                                                    name="service"
                                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                                                >
                                                    <option value="website">Website</option>
                                                    <option value="social">Social Media</option>
                                                    <option value="brand">Full Branding</option>
                                                    <option value="all">Everything</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-neutral-300 mb-2">Message</label>
                                                <textarea
                                                    rows={4}
                                                    name="message"
                                                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-neutral-100 placeholder-neutral-400 focus:border-white/20 focus:outline-none focus:ring-1 focus:ring-white/20"
                                                    placeholder="Tell us about your fund..."
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-neutral-100 hover:bg-white/15 transition disabled:opacity-50"
                                            >
                                                <span className="font-medium">{isSubmitting ? "Sending..." : "Send Message"}</span>
                                                <Send className="h-4 w-4" />
                                            </button>
                                        </form>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="space-y-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 p-3 shadow-lg flex items-center justify-center">
                                                    <Mail className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                                    <p className="text-neutral-400">hello@venturevive.io</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
                                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                                            <div className="flex items-center gap-4">
                                                <a
                                                    href="https://linkedin.com/company/venturevive"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition"
                                                >
                                                    <Linkedin className="h-5 w-5" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
