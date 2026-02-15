"use client";

import { cafes, Cafe } from "@/data/cafes";
import { useState, useMemo } from "react";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export default function RadarComparison() {
    const [cafe1Idx, setCafe1Idx] = useState(0);
    const [cafe2Idx, setCafe2Idx] = useState(1);

    const c1 = cafes[cafe1Idx];
    const c2 = cafes[cafe2Idx];

    const data = useMemo(() => ({
        labels: ['Food Quality', 'Coffee', 'Ambiance', 'Service', 'Comfort'],
        datasets: [
            {
                label: c1.name,
                data: c1.metrics,
                backgroundColor: 'rgba(239, 191, 4, 0.3)',
                borderColor: '#EFBF04',
                pointBackgroundColor: '#EFBF04',
                pointBorderColor: '#FFF9F0',
                pointHoverBackgroundColor: '#FFF9F0',
                pointHoverBorderColor: '#EFBF04',
                borderWidth: 3,
            },
            {
                label: c2.name,
                data: c2.metrics,
                backgroundColor: 'rgba(171, 189, 242, 0.3)',
                borderColor: '#ABBDF2',
                pointBackgroundColor: '#ABBDF2',
                pointBorderColor: '#FFF9F0',
                pointHoverBackgroundColor: '#FFF9F0',
                pointHoverBorderColor: '#ABBDF2',
                borderWidth: 3,
            },
        ],
    }), [c1, c2]);

    const options = {
        scales: {
            r: {
                angleLines: { color: 'rgba(255, 249, 240, 0.1)' },
                grid: { color: 'rgba(255, 249, 240, 0.1)' },
                pointLabels: {
                    color: '#FFF9F0',
                    font: { family: 'Lato', size: 11, weight: 700 as const }
                },
                ticks: { display: false, maxTicksLimit: 5 },
                suggestedMin: 5,
                suggestedMax: 10
            }
        },
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    color: '#FFF9F0',
                    font: { family: 'Lato', size: 12, weight: 400 as const },
                    usePointStyle: true,
                    padding: 25
                }
            }
        },
        maintainAspectRatio: false,
    };

    return (
        <section id="compare" className="py-24 bg-royal-blue text-white overflow-hidden relative">
            {/* Decorative */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-royal-gold/[0.06] rounded-full blur-[120px] pointer-events-none animate-float-slow" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-tint/[0.08] rounded-full blur-[100px] pointer-events-none animate-float-delay" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 lg:order-1"
                    >
                        <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-12 border border-white/20 h-[400px] md:h-[500px] shadow-2xl">
                            <Radar data={data} options={options} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2"
                    >
                        <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-[1.2]">Side by <br /><span className="italic text-royal-gold">Side</span></h2>
                        <p className="text-white/60 font-light leading-relaxed mb-12 text-balance">
                            Can&apos;t decide between two faves? Compare them on everything that matters — food, coffee, vibes, and comfort.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-royal-gold">Select Cafe A</label>
                                <div className="relative">
                                    <select
                                        value={cafe1Idx}
                                        onChange={(e) => setCafe1Idx(Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-royal-gold outline-none appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                                    >
                                        {cafes.map((c, i) => <option key={c.id} value={i} className="text-foreground bg-white">{c.name}</option>)}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <Sparkles size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40">Select Cafe B</label>
                                <div className="relative">
                                    <select
                                        value={cafe2Idx}
                                        onChange={(e) => setCafe2Idx(Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/10 rounded-xl p-4 text-sm focus:ring-2 focus:ring-royal-gold outline-none appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                                    >
                                        {cafes.map((c, i) => <option key={c.id} value={i} className="text-foreground bg-white">{c.name}</option>)}
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                        <Sparkles size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/10 rounded-2xl p-8 border border-white/10 backdrop-blur-md"
                        >
                            <h4 className="font-serif text-2xl text-royal-gold mb-4 italic">The Verdict</h4>
                            <p className="text-sm text-white/90 leading-relaxed font-light">
                                {c1.metrics[2] > c2.metrics[2]
                                    ? `${c1.name} wins on vibes — it's the prettier pick for a date or special outing.`
                                    : `${c2.name} has the better aesthetic — a gorgeous setting for any occasion.`}
                                {" "}
                                {c1.metrics[0] > c2.metrics[0]
                                    ? `But if you're hungry, ${c1.name} serves better food.`
                                    : `Food-wise though, ${c2.name} takes the crown.`}
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
