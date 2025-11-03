"use client";

import { Droplet } from "lucide-react";

interface LogoWatermarkProps {
  position?: "top-right" | "bottom-right" | "bottom-left" | "top-left";
}

export default function LogoWatermark({ position = "bottom-right" }: LogoWatermarkProps) {
  const positionClasses = {
    "top-right": "top-4 right-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-left": "top-4 left-4",
  };

  return (
    <div className={`absolute ${positionClasses[position]} z-10`}>
      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
        <Droplet className="w-5 h-5 text-[#6FA9C8]" fill="currentColor" />
        <div className="font-bold text-sm">
          <span className="text-[#6FA9C8]">Vista</span>
          <span className="text-[#3B4A7C]"> CLEANING</span>
        </div>
      </div>
    </div>
  );
}
