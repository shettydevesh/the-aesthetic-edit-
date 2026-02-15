"use client";

import { cafes } from "@/data/cafes";
import { motion } from "framer-motion";
import { Star, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AestheticMatrix() {
    // Sort: best aesthetic score first
    const ranked = [...cafes].sort((a, b) => b.aestheticScore - a.aestheticScore);

    // "Best value" = highest aesthetic per ₹1000 spent
    const bestValue = [...cafes].sort((a, b) => (b.aestheticScore / b.price) - (a.aestheticScore / a.price))[0];

    // Medal colors
    const medals = ["🥇", "🥈", "🥉"];

    return (
        <section id="matrix" className="py-24 bg-royal-blue/[0.03] relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-royal-blue/[0.04] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-float-slow pointer-events-none" />

            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 leading-[1.2]">
                        The Prettiest <span className="italic text-shimmer">Ranked</span>
                    </h2>
                    <p className="text-foreground/60 font-light leading-relaxed max-w-xl mx-auto">
                        Our ranking based on interiors, ambiance, and overall aesthetic. Because looks matter (at least for cafes).
                    </p>
                </motion.div>

                {/* Top 3 Podium */}
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {ranked.slice(0, 3).map((cafe, i) => (
                        <motion.div
                            key={cafe.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={`relative bg-white rounded-3xl overflow-hidden card-shadow border group ${i === 0 ? 'border-royal-gold/30 ring-2 ring-royal-gold/20' : 'border-foreground/5'
                                }`}
                        >
                            {/* Image */}
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={cafe.image}
                                    alt={cafe.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                                {/* Medal */}
                                <div className="absolute top-3 left-3 text-2xl">{medals[i]}</div>

                                {/* Score */}
                                <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-royal-blue px-3 py-1.5 rounded-full shadow-sm">
                                    <Star size={13} fill="currentColor" />
                                    <span className="text-sm font-bold">{cafe.aestheticScore}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="p-5">
                                <div className="text-[10px] font-medium text-foreground/40 uppercase tracking-widest mb-1">{cafe.location} · {cafe.area}</div>
                                <h3 className="font-serif text-lg text-foreground mb-2">{cafe.name}</h3>
                                <p className="text-xs text-foreground/50 leading-relaxed line-clamp-2">{cafe.description}</p>
                                <div className="mt-3 pt-3 border-t border-foreground/5 flex justify-between items-center">
                                    <span className="text-xs text-foreground/40">₹{cafe.price} for two</span>
                                    {cafe.vibeTag && (
                                        <span className="text-[11px] text-foreground/50">{cafe.vibeTag}</span>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Remaining cafes — compact list */}
                <div className="bg-white rounded-2xl card-shadow border border-foreground/5 overflow-hidden">
                    <div className="px-6 py-4 border-b border-foreground/5">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-foreground/40">Full Rankings</h3>
                    </div>
                    {ranked.slice(3).map((cafe, i) => (
                        <motion.div
                            key={cafe.id}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="px-6 py-4 flex items-center gap-4 border-b border-foreground/5 last:border-0 hover:bg-royal-blue/[0.02] transition-colors"
                        >
                            <span className="text-sm font-bold text-foreground/25 w-6 text-center">#{i + 4}</span>
                            <div className="w-10 h-10 rounded-xl overflow-hidden relative flex-shrink-0">
                                <Image src={cafe.image} alt={cafe.name} fill className="object-cover" sizes="40px" />
                            </div>
                            <div className="flex-grow min-w-0">
                                <div className="font-medium text-sm text-foreground truncate">{cafe.name}</div>
                                <div className="text-[11px] text-foreground/40">{cafe.location} · ₹{cafe.price} for two</div>
                            </div>
                            <div className="flex items-center gap-1 text-royal-blue font-bold text-sm flex-shrink-0">
                                <Star size={12} fill="currentColor" />
                                {cafe.aestheticScore}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Best Value Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 bg-gradient-to-r from-royal-gold/10 via-royal-gold/5 to-transparent rounded-2xl p-6 flex items-center gap-4 border border-royal-gold/15"
                >
                    <div className="p-3 bg-royal-gold/15 rounded-xl">
                        <TrendingUp size={20} className="text-royal-gold" />
                    </div>
                    <div>
                        <div className="text-[10px] uppercase tracking-widest font-bold text-royal-gold mb-1 flex items-center gap-1.5">
                            <Sparkles size={10} /> Best Value Pick
                        </div>
                        <p className="text-sm text-foreground/70">
                            <strong className="text-foreground">{bestValue.name}</strong> gives you the most beauty for your money — scored {bestValue.aestheticScore}/10 at just ₹{bestValue.price} for two.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
