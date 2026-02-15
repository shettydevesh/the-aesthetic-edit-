"use client";

import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 -z-20 bg-gradient-to-br from-background via-blue-tint/15 to-background animate-gradient" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block px-5 py-2 mb-8 text-[10px] uppercase tracking-[0.3em] font-bold text-royal-blue bg-royal-blue/8 rounded-full border border-royal-blue/15"
                    >
                        ✨ Bandra · Juhu · Versova
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="font-serif text-5xl md:text-8xl text-foreground leading-[1.1] mb-8"
                    >
                        Your Guide to <br />
                        <span className="italic text-shimmer">Mumbai&apos;s Prettiest Cafes</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/50 font-light leading-relaxed mb-12"
                    >
                        From dreamy date spots to aesthetic coffee havens — we&apos;ve curated
                        the most beautiful cafes for every mood & moment.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.6 }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto"
                    >
                        <button
                            onClick={() => document.getElementById("directory")?.scrollIntoView({ behavior: "smooth" })}
                            className="w-full sm:w-auto px-10 py-4 bg-royal-blue text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-royal-gold hover:text-royal-blue transition-all duration-300 hover:shadow-lg hover:shadow-royal-gold/20 hover:-translate-y-0.5"
                        >
                            Explore Cafes
                        </button>
                        <button
                            onClick={() => document.getElementById("vibe-matcher")?.scrollIntoView({ behavior: "smooth" })}
                            className="w-full sm:w-auto px-10 py-4 border-2 border-royal-blue/20 text-royal-blue hover:border-royal-blue hover:bg-royal-blue hover:text-white rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:-translate-y-0.5"
                        >
                            Match Your Vibe ✨
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Softer Decorative Floating Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-[500px] h-[500px] bg-royal-blue/[0.04] rounded-full blur-3xl -z-10 animate-float" />
            <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[400px] h-[400px] bg-royal-gold/[0.06] rounded-full blur-3xl -z-10 animate-float-delay" />
        </section>
    );
}
