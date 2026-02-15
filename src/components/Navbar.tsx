"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = ""; };
        }
    }, [mobileOpen]);

    const scrollTo = (id: string) => {
        setMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "The Edit", id: "book-edit" },
        { label: "The Matrix", id: "matrix" },
        { label: "Directory", id: "directory" },
        { label: "Compare", id: "compare" },
        { label: "Match Vibe", id: "vibe-matcher" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
                    ? "bg-background/90 backdrop-blur-xl py-3 shadow-sm border-b border-royal-blue/10"
                    : "bg-transparent py-6"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-2xl font-serif font-bold text-royal-blue"
                    >
                        The Aesthetic Edit.
                    </motion.div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-10 text-xs uppercase tracking-[0.2em] font-medium text-foreground/60">
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * (i + 1), duration: 0.4 }}
                                onClick={() => scrollTo(item.id)}
                                className="relative hover:text-royal-blue transition-colors duration-300 group"
                            >
                                {item.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-royal-blue transition-all duration-300 group-hover:w-full" />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="md:hidden p-2 text-royal-blue"
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[45] bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-2"
                    >
                        {navItems.map((item, i) => (
                            <motion.button
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: i * 0.07 }}
                                onClick={() => scrollTo(item.id)}
                                className="text-royal-blue font-serif text-2xl py-3 hover:text-royal-gold transition-colors"
                            >
                                {item.label}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
