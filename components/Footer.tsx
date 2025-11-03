"use client";

import { motion } from "framer-motion";
import { Droplet, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#3B4A7C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Droplet className="w-8 h-8 text-[#6FA9C8]" fill="currentColor" />
              <div className="font-bold text-2xl">
                <span className="text-[#6FA9C8]">Vista</span> CLEANING
              </div>
            </div>
            <p className="text-white/80 mb-4">
              Professionele schoonmaakdiensten voor particulieren en bedrijven sinds 2013.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#6FA9C8] rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#6FA9C8] rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#6FA9C8] rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Diensten</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#particulier" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Huisschoonmaak
                </Link>
              </li>
              <li>
                <Link href="#particulier" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Ramen wassen
                </Link>
              </li>
              <li>
                <Link href="#zakelijk" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Kantoorschoonmaak
                </Link>
              </li>
              <li>
                <Link href="#zakelijk" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Winkelschoonmaak
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-[#6FA9C8] transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Hoensbroeckstraat 45</li>
              <li>3550 Heusden-Zolder</li>
              <li className="pt-2">
                <a href="tel:+32492569068" className="hover:text-[#6FA9C8] transition-colors">
                  +32 492 56 90 68
                </a>
              </li>
              <li>
                <a href="mailto:vistacleaning.d@gmail.com" className="hover:text-[#6FA9C8] transition-colors">
                  vistacleaning.d@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <p className="text-white/80 text-sm">
              Copyright © {currentYear} Vista Cleaning - BTW: 1010.919.548 | Vista Designer BV. All Rights Reserved.
            </p>
            <p className="text-white/60 text-xs">
              Created by <span className="text-[#6FA9C8] font-semibold">OGL Studio</span>
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 right-8 w-32 h-1 bg-gradient-to-r from-[#6FA9C8] to-transparent rounded-full hidden lg:block"
        />
      </div>
    </footer>
  );
}
