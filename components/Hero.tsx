"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";
import LogoWatermark from "./LogoWatermark";

export default function Hero() {
  const backgrounds: { type: "image" | "video"; src: string }[] = [
    { type: "image", src: "/diepe_reiniging.jpg" },
    { type: "image", src: "/kantoor.jpg" },
    { type: "image", src: "/raam_schoonmaak.jpg" },
    { type: "image", src: "/verhuis.jpg" },
    { type: "image", src: "/villa.jpg" },
    { type: "image", src: "/winkelcentrum.jpg" },
  ];
  const [bgIndex, setBgIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((i) => (i + 1) % backgrounds.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {backgrounds.map((bg, i) => (
            <motion.div
              key={bg.src}
              initial={{ opacity: 0 }}
              animate={{ opacity: i === bgIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: i === bgIndex ? 2 : 1 }}
            >
              {bg.type === "image" ? (
                <img
                  src={bg.src}
                  alt="Hero background"
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0 }}
                />
              ) : (
                <video
                  src={bg.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ position: "absolute", inset: 0 }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-[#3B4A7C]/95 via-[#3B4A7C]/85 to-[#6FA9C8]/85" />
            </motion.div>
          ))}
        </div>
      </div>

      <LogoWatermark position="bottom-right" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-medium">10+ jaar ervaring in schoonmaakdiensten</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Wij maken schoon.
            <br />
            <span className="text-[#6FA9C8]">Jij geniet.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto drop-shadow-md"
          >
            Professionele schoonmaak voor particulieren en bedrijven.
            Betrouwbaar, grondig en altijd met aandacht voor elk detail.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              asChild
              className="bg-white text-[#3B4A7C] hover:bg-gray-100 text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              <a href="mailto:vistacleaning.d@gmail.com?subject=Offerte aanvraag&body=Beste Vista Cleaning,%0D%0A%0D%0AIk wil graag een vrijblijvende offerte aanvragen voor:%0D%0A%0D%0ANaam:%0D%0ATelefoon:%0D%0AType dienst:%0D%0ADetails:%0D%0A%0D%0AMet vriendelijke groet">
                Gratis offerte aanvragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="bg-[#3B4A7C] text-white hover:bg-[#2A3560] text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-white"
            >
              <a href="#about">
                Meer informatie
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap justify-center gap-8 text-white"
          >
            <div className="text-center">
              <div className="text-4xl font-bold">10+</div>
              <div className="text-white/80">Jaar ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">400+</div>
              <div className="text-white/80">Tevreden klanten</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold">100%</div>
              <div className="text-white/80">Kwaliteitsgarantie</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
