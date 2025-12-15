"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Calendar, Send, Twitter, Linkedin } from "lucide-react";

export function ContactSection() {
    return (
        <section
            className="pt-24 pb-24 relative z-10"
            id="contact"
        >
            <div className="mx-8 sm:mx-16">
                <div className="text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-100">
                        <Mail className="h-4 w-4" />
                        Let's Work Together
                    </span>
                    <h2 className="mt-4 text-4xl sm:text-6xl tracking-tight font-semibold text-white">
                        Ready to <em className="italic font-medium text-neutral-200">collaborate?</em>
                    </h2>
                    <p className="mt-4 text-neutral-400 text-lg max-w-2xl mx-auto">
                        Whether you need a website, social media strategy, or complete brand overhaul — let's talk.
                    </p>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur"
                    >
                        <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                        {/* 
                            TO RECEIVE FORM SUBMISSIONS:
                            1. Go to formspree.io and create a free account
                            2. Create a new form and copy your form ID
                            3. Replace YOUR_FORM_ID below with your actual form ID
                            Example: action="https://formspree.io/f/xrgvnkpl"
                        */}
                        <form
                            action="https://formspree.io/f/YOUR_FORM_ID"
                            method="POST"
                            className="space-y-6"
                        >
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
                                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 border border-white/20 px-6 py-3 text-neutral-100 hover:bg-white/15 transition"
                            >
                                <span className="font-medium">Send Message</span>
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-white/10 border-white/10 p-3 shadow-lg flex items-center justify-center">
                                    <Mail className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Email</h3>
                                    <a href="mailto:hello@venturevive.io" className="text-neutral-400 hover:text-white transition-colors">
                                        hello@venturevive.io
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
                        >
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-xl bg-white/10 border-white/10 p-3 shadow-lg flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white">Schedule a Call</h3>
                                    <p className="text-neutral-400">Book a free consultation</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur"
                        >
                            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://twitter.com/venturevive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://linkedin.com/company/venturevive"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-neutral-400 hover:text-white hover:bg-white/15 transition"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
