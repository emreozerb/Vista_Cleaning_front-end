"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Over ons", href: "#about" },
    { label: "Particulier", href: "#particulier" },
    { label: "Zakelijk", href: "#zakelijk" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-10 h-10 overflow-hidden rounded">
            <Image
              src="/nav-logo.png"
              alt="Vista Cleaning"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <div className={`font-bold text-2xl ${isScrolled ? "text-[#3B4A7C]" : "text-white"}`}>
            <span className="text-[#6FA9C8]">Vista</span> CLEANING
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-medium transition-colors hover:text-[#6FA9C8] ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-[#6FA9C8] hover:bg-[#5A94B3] text-white">
            <a href="#contact">Offerte aanvragen</a>
          </Button>
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-gray-700" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-gray-700" : "text-white"} />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-[#6FA9C8] font-medium"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-[#6FA9C8] hover:bg-[#5A94B3] text-white w-full">
                <a href="#contact">Offerte aanvragen</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
