"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-40"
          >
            <div className="relative">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-[#6FA9C8] rounded-full opacity-30 blur-lg"
              />
              <Button
                size="lg"
                asChild
                className="relative bg-[#6FA9C8] hover:bg-[#5A94B3] text-white rounded-full shadow-2xl px-6 py-7 group"
              >
                <a href="tel:+32492569068">
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  <span className="hidden sm:inline">Bel ons</span>
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 left-6 z-40"
          >
            <Button
              onClick={scrollToTop}
              size="lg"
              variant="outline"
              className="bg-white hover:bg-gray-100 rounded-full shadow-2xl p-4"
            >
              <ChevronUp className="w-6 h-6 text-[#3B4A7C]" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
