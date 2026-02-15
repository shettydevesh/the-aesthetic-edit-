"use client";

import { cafes } from "@/data/cafes";
import { useState } from "react";
import CafeCard from "./CafeCard";
import { motion, AnimatePresence } from "framer-motion";

export default function CafeGrid() {
    const [filter, setFilter] = useState("all");
    const categories = ["all", "Bandra", "Juhu", "Romantic", "Casual", "Work"];

    const filteredCafes = filter === "all"
        ? cafes
        : cafes.filter(c => c.location === filter || c.type.includes(filter));

    return (
        <section id="directory" className="py-24 container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">The Curated <span className="italic text-shimmer">Directory</span></h2>
                <p className="text-foreground/60 max-w-xl mx-auto font-light text-balance">
                    Filter by vibe or location. Tap any card to see what we loved (and what we didn&apos;t).
                </p>
            </motion.div>

            <div className="flex md:flex-wrap md:justify-center gap-3 mb-16 overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 md:px-8 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all duration-300 whitespace-nowrap snap-start flex-shrink-0 ${filter === cat
                            ? "bg-royal-blue text-white shadow-lg shadow-royal-blue/20"
                            : "bg-background border border-royal-blue/10 text-foreground/40 hover:border-royal-blue hover:text-royal-blue"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                <AnimatePresence mode="wait">
                    {filteredCafes.map((cafe, i) => (
                        <motion.div
                            key={cafe.id}
                            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            layout
                        >
                            <CafeCard cafe={cafe} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </section>
    );
}
