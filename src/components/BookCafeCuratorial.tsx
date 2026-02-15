"use client";

import { cafes } from "@/data/cafes";
import { motion } from "framer-motion";
import { BookOpen, Coffee, Heart, Volume2, Armchair, Sparkles } from "lucide-react";
import { useState } from "react";

export default function BookCafeCuratorial() {
    const [activeIntent, setActiveIntent] = useState<"work" | "date" | "coffee" | "buy">("work");

    const intents = {
        work: {
            label: "Deep Work",
            icon: BookOpen,
            cafeId: 8, // Leaping Windows
            insight: "Best visited on a weekday afternoon when it's quieter. Head to the basement for total focus."
        },
        date: {
            label: "Date Night",
            icon: Heart,
            cafeId: 2, // Fable
            insight: "Beautiful ambiance for a shared meal — think wine, fairy lights, and a cozy vibe."
        },
        coffee: {
            label: "Great Coffee",
            icon: Coffee,
            cafeId: 1, // Subko
            insight: "Amazing brewing and stunning interiors. Get there early (around 8 AM) to beat the crowd."
        },
        buy: {
            label: "Book Discovery",
            icon: Sparkles,
            cafeId: 9, // Title Waves
            insight: "Huge book collection with a chill cafe inside. Great for browsing and discovering your next read."
        }
    };

    const activeCafe = cafes.find(c => c.id === intents[activeIntent].cafeId);
    const ActiveIcon = intents[activeIntent].icon;

    return (
        <section id="book-edit" className="py-24 px-4 md:px-8 lg:px-12 bg-background">
            <div className="max-w-[90rem] mx-auto bg-royal-blue rounded-[3rem] text-background overflow-hidden relative section-reveal shadow-2xl">
                {/* Background Texture/Gradient */}
                <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                    <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-royal-gold rounded-full blur-[150px] mix-blend-overlay" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-tint rounded-full blur-[120px] mix-blend-soft-light" />
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                </div>

                <div className="container mx-auto px-6 py-20 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-royal-gold mb-6 block">
                            Our Top Picks • 2026
                        </span>
                        <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">Best Cafe For <br /> <span className="italic text-royal-gold">Every Mood</span></h2>
                        <p className="text-background/80 max-w-2xl mx-auto font-light text-balance leading-loose text-lg">
                            Whether you want to work in peace, impress on a date, or just find the best coffee — here's <span className="text-white font-medium border-b border-royal-gold/30 pb-1">our pick for each mood</span>.
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-16 items-start">
                        {/* Left: The Strategist's Guide (Navigation) */}
                        <div className="lg:col-span-4 space-y-6">
                            <h3 className="font-serif text-3xl mb-8 italic text-white/90">What&apos;s Your Mood?</h3>
                            {(Object.entries(intents) as [keyof typeof intents, typeof intents["work"]][]).map(([key, data]) => (
                                <button
                                    key={key}
                                    onClick={() => setActiveIntent(key as any)}
                                    className={`w-full text-left p-6 rounded-2xl transition-all duration-500 flex items-center gap-6 group border border-transparent ${activeIntent === key
                                        ? "bg-background text-royal-blue shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] scale-105"
                                        : "bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border-white/5"
                                        }`}
                                >
                                    <div className={`p-4 rounded-full transition-colors duration-300 ${activeIntent === key ? "bg-royal-blue text-white" : "bg-white/10 text-current"}`}>
                                        <data.icon size={22} />
                                    </div>
                                    <div>
                                        <div className={`font-bold uppercase tracking-[0.15em] text-[11px] mb-1 ${activeIntent === key ? "text-royal-blue" : "text-current"}`}>
                                            {data.label}
                                        </div>
                                        <div className={`text-lg font-serif ${activeIntent === key ? "text-royal-blue font-medium" : "text-current italic opacity-70"}`}>
                                            {cafes.find(c => c.id === data.cafeId)?.name}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Right: The Venue Spotlight */}
                        <div className="lg:col-span-8">
                            {activeCafe && (
                                <motion.div
                                    key={activeCafe.id}
                                    initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="bg-background text-royal-blue rounded-[2.5rem] p-6 md:p-14 shadow-2xl relative overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
                                            <div>
                                                <div className="flex gap-3 mb-4">
                                                    <span className="bg-royal-blue text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                        {intents[activeIntent].label}
                                                    </span>
                                                    <span className="border border-royal-blue/20 text-royal-blue text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                                                        {activeCafe.location}
                                                    </span>
                                                </div>
                                                <h3 className="font-serif text-3xl md:text-5xl text-royal-blue mb-3 leading-none">{activeCafe.name}</h3>
                                                <p className="text-sm font-bold text-royal-gold uppercase tracking-[0.2em]">{activeCafe.area}</p>
                                            </div>
                                            <div className="text-right hidden md:block">
                                                <div className="text-5xl font-serif font-bold text-royal-gold">{activeCafe.aestheticScore}</div>
                                                <div className="text-[9px] uppercase font-bold text-royal-blue/40 tracking-[0.25em] mt-1">Aesthetic<br />Score</div>
                                            </div>
                                        </div>

                                        <blockquote className="text-xl md:text-2xl font-serif italic text-royal-blue/80 mb-10 border-l-[3px] border-royal-gold pl-8 leading-relaxed">
                                            &quot;{intents[activeIntent].insight}&quot;
                                        </blockquote>

                                        <p className="text-royal-blue/70 leading-relaxed mb-10 font-light text-lg">
                                            {activeCafe.description}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8 p-8 bg-royal-blue/5 rounded-3xl mb-10">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-royal-blue/50 mb-3">
                                                    <Volume2 size={16} /> How Noisy?
                                                </h4>
                                                <p className="text-base font-medium text-royal-blue">{activeCafe.noiseLevel || "Moderate"} Levels</p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-royal-blue/50 mb-3">
                                                    <Armchair size={16} /> Reading Comfort
                                                </h4>
                                                <p className="text-base font-medium text-royal-blue">{activeCafe.readingComfort || "Moderate"} Comfort</p>
                                            </div>
                                            <div className="md:col-span-2 pt-4 border-t border-royal-blue/5">
                                                <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-royal-blue/50 mb-3">
                                                    <Sparkles size={16} /> Heads Up
                                                </h4>
                                                <p className="text-sm italic text-royal-blue/70">{activeCafe.cons}</p>
                                            </div>
                                        </div>

                                        <div className="w-full pt-8 border-t border-royal-blue/10 flex flex-wrap justify-between items-end gap-6">
                                            <div>
                                                <span className="text-[10px] uppercase font-bold text-royal-blue/40 tracking-[0.2em] block mb-2">Cost for Two</span>
                                                <span className="font-serif text-3xl text-royal-blue">₹{activeCafe.price}</span>
                                            </div>
                                            <button className="bg-royal-blue text-white px-8 py-4 rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-royal-gold transition-colors shadow-lg shadow-royal-blue/20">
                                                See Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
