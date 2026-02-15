"use client";

import { Cafe } from "@/data/cafes";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, Award } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import HighlightModal from "./HighlightModal";

interface CafeCardProps {
    cafe: Cafe;
}

export default function CafeCard({ cafe }: CafeCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <motion.div
                layout
                className="bg-white rounded-3xl overflow-hidden card-shadow border border-foreground/5 flex flex-col h-full group section-reveal"
            >
                {/* Hero Image */}
                <div className="relative h-52 overflow-hidden">
                    <Image
                        src={cafe.image}
                        alt={`${cafe.name} ambiance`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    {/* Gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Editor's Pick Badge */}
                    {cafe.editorsPick && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-royal-gold text-royal-blue px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm">
                            <Award size={12} />
                            Editor&apos;s Pick
                        </div>
                    )}

                    {/* Vibe Tag */}
                    {cafe.vibeTag && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                            {cafe.vibeTag}
                        </div>
                    )}

                    {/* Bottom overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                        <div>
                            <span className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/90 text-royal-blue backdrop-blur-sm">
                                {cafe.location}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/90 backdrop-blur-sm text-royal-blue px-2.5 py-1 rounded-lg shadow-sm">
                            <Star size={12} fill="currentColor" />
                            <span className="text-sm font-bold">{cafe.aestheticScore}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow relative">
                    <div className="mb-1">
                        <span className="text-[10px] font-medium text-foreground/40 uppercase tracking-widest">
                            {cafe.area}
                        </span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-royal-blue transition-colors duration-300 mb-3">{cafe.name}</h3>

                    <p className="text-sm text-foreground/60 leading-relaxed mb-5 font-light line-clamp-2">
                        {cafe.description}
                    </p>

                    <div>
                        <h4 className="text-[10px] font-bold text-foreground/30 uppercase tracking-[0.15em] mb-1.5 flex items-center gap-1.5">
                            <Star size={10} /> Best For
                        </h4>
                        <p className="text-xs text-foreground/70 font-medium leading-relaxed">{cafe.bestFor}</p>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-royal-blue/[0.03] border-t border-foreground/5 flex justify-between items-center">
                    <div className="flex flex-col">
                        <span className="text-[9px] text-foreground/35 uppercase font-bold tracking-wider">Avg for two</span>
                        <span className="text-sm font-serif font-bold text-foreground">₹{cafe.price}</span>
                    </div>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white bg-royal-blue px-4 py-2.5 rounded-xl hover:bg-royal-gold hover:text-royal-blue transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                    >
                        View Highlights
                        <ArrowUpRight size={13} />
                    </button>
                </div>
            </motion.div>

            <HighlightModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                cafe={cafe}
            />
        </>
    );
}
