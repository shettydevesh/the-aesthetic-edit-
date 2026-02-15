import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AestheticMatrix from "@/components/AestheticMatrix";
import CafeGrid from "@/components/CafeGrid";
import RadarComparison from "@/components/RadarComparison";
import VibeMatcher from "@/components/VibeMatcher";
import BookCafeCuratorial from "@/components/BookCafeCuratorial";

export default function Home() {
  const locations = ["Bandra West", "Juhu Tara Road", "Chapel Road", "Union Park", "Ranwar Village", "Versova"];

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Location Ticker — Marquee Animation */}
      <section className="py-5 border-y border-royal-blue/8 bg-royal-blue/[0.02] overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap gap-16 text-[10px] uppercase tracking-[0.4em] font-bold text-royal-blue/20">
          {[...locations, ...locations, ...locations].map((loc, i) => (
            <span key={i} className="flex items-center gap-4">
              <span className="w-1 h-1 bg-royal-gold/30 rounded-full" />
              {loc}
            </span>
          ))}
        </div>
      </section>

      <BookCafeCuratorial />

      {/* Soft gradient transition */}
      <div className="h-24 bg-gradient-to-b from-background via-royal-blue/[0.02] to-background" />

      <AestheticMatrix />

      {/* Soft gradient transition */}
      <div className="h-16 bg-gradient-to-b from-background via-royal-gold/[0.02] to-background" />

      <VibeMatcher />

      {/* Soft gradient transition */}
      <div className="h-16 bg-gradient-to-b from-background via-royal-blue/[0.02] to-background" />

      <CafeGrid />

      {/* Soft gradient transition */}
      <div className="h-16 bg-gradient-to-b from-background via-royal-gold/[0.02] to-background" />

      <RadarComparison />

      {/* Footer */}
      <footer className="py-20 bg-royal-blue text-background text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-royal-gold rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-blue-tint rounded-full blur-[120px]" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="font-serif text-3xl font-bold text-royal-gold mb-6">The Aesthetic Edit.</div>
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-background/40 mb-8">
            Curated with love · Mumbai Edition · 2026
          </p>
          <div className="flex justify-center gap-8 text-xs font-bold text-background/50">
            <a href="#" className="hover:text-royal-gold transition-colors duration-300">Privacy</a>
            <a href="#" className="hover:text-royal-gold transition-colors duration-300">How We Pick</a>
            <a href="#" className="hover:text-royal-gold transition-colors duration-300">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
