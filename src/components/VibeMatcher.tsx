"use client";

import { cafes, Cafe } from "@/data/cafes";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Heart, Sparkles, Coffee, Utensils } from "lucide-react";

type Question = {
    id: number;
    text: string;
    options: { label: string; value: string; icon: any; emoji: string; desc: string }[];
};

const questions: Question[] = [
    {
        id: 1,
        text: "What's the vibe today?",
        options: [
            { label: "Dreamy Date", value: "Romantic", icon: Heart, emoji: "💕", desc: "Candlelit, quiet, swoon-worthy" },
            { label: "Solo Deep Work", value: "Quiet", icon: Coffee, emoji: "📖", desc: "Quiet corner with great coffee" },
            { label: "A Day Out", value: "Trendy", icon: Sparkles, emoji: "✨", desc: "Trendy, lively, Insta-worthy" },
        ]
    },
    {
        id: 2,
        text: "What matters most?",
        options: [
            { label: "Aesthetic & Photos", value: "Aesthetic", icon: Sparkles, emoji: "📸", desc: "Gorgeous interiors & plating" },
            { label: "Amazing Coffee", value: "Coffee", icon: Coffee, emoji: "☕", desc: "Specialty brews, latte art" },
            { label: "Incredible Food", value: "Food", icon: Utensils, emoji: "🍽️", desc: "Memorable dishes & flavors" },
        ]
    }
];

export default function VibeMatcher() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [result, setResult] = useState<Cafe | null>(null);

    const handleAnswer = (value: string) => {
        const newAnswers = [...answers, value];
        setAnswers(newAnswers);

        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            const match = findMatch(newAnswers);
            setResult(match);
            setStep(step + 1);
        }
    };

    const findMatch = (ans: string[]): Cafe => {
        let matches = cafes;

        if (ans[0] === 'Quiet') {
            matches = matches.filter(c => c.noiseLevel === "Low" || c.type.includes("Quiet"));
        } else if (ans[0] === 'Romantic') {
            matches = matches.filter(c => c.type.includes("Romantic"));
        } else if (ans[0] === 'Trendy') {
            matches = matches.filter(c => c.type.includes("Trendy") || c.noiseLevel === "High");
        }

        if (ans[1] === 'Aesthetic') {
            return matches.sort((a, b) => b.aestheticScore - a.aestheticScore)[0] || cafes[0];
        }
        if (ans[1] === 'Coffee') {
            return matches.sort((a, b) => b.metrics[1] - a.metrics[1])[0] || cafes[0];
        }
        if (ans[1] === 'Food') {
            return matches.sort((a, b) => b.metrics[0] - a.metrics[0])[0] || cafes[0];
        }

        return matches[0] || cafes[0];
    };

    const totalSteps = questions.length;

    return (
        <section id="vibe-matcher" className="py-24 container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-royal-blue/[0.04] via-royal-gold/[0.02] to-royal-blue/[0.04] border border-royal-blue/10 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
                <div className="relative z-10">
                    <AnimatePresence mode="wait">
                        {step < questions.length ? (
                            <motion.div
                                key={`quiz-${step}`}
                                initial={{ opacity: 0, x: 50, filter: "blur(6px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -50, filter: "blur(6px)" }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-royal-blue mb-3 block">✨ Find Your Spot</span>

                                {/* Progress Bar */}
                                <div className="flex justify-center gap-2 mb-8">
                                    {Array.from({ length: totalSteps }).map((_, i) => (
                                        <div
                                            key={i}
                                            className={`h-1.5 rounded-full transition-all duration-500 ${i <= step ? 'w-10 bg-royal-blue' : 'w-6 bg-royal-blue/15'
                                                }`}
                                        />
                                    ))}
                                </div>

                                <h2 className="font-serif text-3xl md:text-5xl mb-10 text-foreground">{questions[step].text}</h2>
                                <div className="grid md:grid-cols-3 gap-5">
                                    {questions[step].options.map((opt) => (
                                        <motion.button
                                            key={opt.value}
                                            whileHover={{ scale: 1.04, y: -4 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => handleAnswer(opt.value)}
                                            className="bg-background p-6 rounded-2xl shadow-sm border border-royal-blue/8 hover:border-royal-blue/30 hover:shadow-lg hover:shadow-royal-blue/8 group transition-all duration-300 text-left"
                                        >
                                            <div className="text-2xl mb-3">{opt.emoji}</div>
                                            <span className="text-sm font-bold text-foreground block mb-1">{opt.label}</span>
                                            <span className="text-[11px] text-foreground/40 font-light leading-snug">{opt.desc}</span>
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <Sparkles className="mx-auto mb-6 text-royal-gold" size={48} />
                                </motion.div>
                                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-royal-gold mb-4 block">Your Perfect Match</span>
                                <h2 className="font-serif text-4xl md:text-6xl mb-4 text-foreground">{result?.name}</h2>
                                {result?.vibeTag && (
                                    <div className="inline-block bg-royal-blue/8 text-royal-blue px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                                        {result.vibeTag}
                                    </div>
                                )}
                                <p className="text-foreground/50 max-w-lg mx-auto mb-10 font-light leading-relaxed">
                                    Based on your vibe, we think you&apos;ll love {result?.name} in {result?.location}.
                                    {" "}{result?.bestFor}
                                </p>
                                <button
                                    onClick={() => {
                                        setStep(0);
                                        setAnswers([]);
                                        setResult(null);
                                    }}
                                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-royal-blue/40 hover:text-royal-blue transition-colors"
                                >
                                    ↻ Start Over
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Decorative floating blobs */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-royal-blue/[0.04] rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/2 animate-float" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-royal-gold/[0.05] rounded-full blur-2xl -z-10 translate-y-1/2 -translate-x-1/2 animate-float-delay" />
            </div>
        </section>
    );
}
