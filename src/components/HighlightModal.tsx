"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Coffee, CheckCircle, AlertCircle, Star, MapPin } from "lucide-react";
import { Cafe } from "@/data/cafes";
import Image from "next/image";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface HighlightModalProps {
    isOpen: boolean;
    onClose: () => void;
    cafe: Cafe;
}

function ModalContent({ isOpen, onClose, cafe }: HighlightModalProps) {
    // Lock scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = ""; };
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
                    >
                        {/* Hero Image */}
                        <div className="relative h-48 shrink-0 overflow-hidden">
                            <Image
                                src={cafe.image}
                                alt={cafe.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 512px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors backdrop-blur-sm"
                            >
                                <X size={18} className="text-white" />
                            </button>

                            {/* Vibe tag */}
                            {cafe.vibeTag && (
                                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-medium shadow-sm">
                                    {cafe.vibeTag}
                                </span>
                            )}

                            {/* Bottom info on image */}
                            <div className="absolute bottom-4 left-4 right-4">
                                <h2 className="font-serif text-2xl md:text-3xl text-white mb-1 drop-shadow-lg">{cafe.name}</h2>
                                <div className="flex items-center gap-2 text-white/80 text-xs">
                                    <MapPin size={12} />
                                    <span>{cafe.location} · {cafe.area}</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Stats Bar */}
                        <div className="flex border-b border-foreground/5 shrink-0">
                            <div className="flex-1 py-3 px-4 text-center border-r border-foreground/5">
                                <div className="flex items-center justify-center gap-1 text-royal-blue font-bold text-lg">
                                    <Star size={14} fill="currentColor" />
                                    {cafe.aestheticScore}
                                </div>
                                <div className="text-[9px] uppercase tracking-widest text-foreground/35 font-bold mt-0.5">Vibe Score</div>
                            </div>
                            <div className="flex-1 py-3 px-4 text-center border-r border-foreground/5">
                                <div className="font-bold text-lg text-foreground">₹{cafe.price}</div>
                                <div className="text-[9px] uppercase tracking-widest text-foreground/35 font-bold mt-0.5">For Two</div>
                            </div>
                            <div className="flex-1 py-3 px-4 text-center">
                                <div className="font-bold text-lg text-foreground">{cafe.noiseLevel || "Medium"}</div>
                                <div className="text-[9px] uppercase tracking-widest text-foreground/35 font-bold mt-0.5">Noise</div>
                            </div>
                        </div>

                        {/* Scrollable Content */}
                        <div className="overflow-y-auto p-6 space-y-5 flex-1">
                            {/* Description */}
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {cafe.description}
                            </p>

                            {/* Best For */}
                            <div className="bg-royal-blue/[0.04] rounded-2xl p-4">
                                <div className="text-[10px] uppercase tracking-widest font-bold text-royal-blue/50 mb-2">✨ Best For</div>
                                <p className="text-sm font-medium text-foreground">{cafe.bestFor}</p>
                            </div>

                            {/* Must Try */}
                            <div>
                                <h3 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-foreground/35 mb-3">
                                    <Coffee size={12} className="text-royal-gold" /> Must-Try Orders
                                </h3>
                                <div className="bg-royal-gold/[0.06] border border-royal-gold/10 p-4 rounded-xl">
                                    <p className="text-sm font-medium text-foreground">{cafe.mustOrder}</p>
                                </div>
                            </div>

                            {/* Pros & Cons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div>
                                    <h3 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-green-600/70 mb-2">
                                        <CheckCircle size={11} /> The Good
                                    </h3>
                                    <p className="text-xs text-foreground/65 leading-relaxed bg-green-50/60 p-3 rounded-xl border border-green-100/60">
                                        {cafe.pros}
                                    </p>
                                </div>
                                <div>
                                    <h3 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-red-500/70 mb-2">
                                        <AlertCircle size={11} /> Heads Up
                                    </h3>
                                    <p className="text-xs text-foreground/65 leading-relaxed bg-red-50/60 p-3 rounded-xl border border-red-100/60">
                                        {cafe.cons}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default function HighlightModal({ isOpen, onClose, cafe }: HighlightModalProps) {
    if (typeof window === "undefined") return null;

    return createPortal(
        <ModalContent isOpen={isOpen} onClose={onClose} cafe={cafe} />,
        document.body
    );
}
