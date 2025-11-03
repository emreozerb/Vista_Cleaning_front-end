"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, CheckCircle2 } from "lucide-react";

export default function ServiceArea() {
  const regions = [
    "Heusden-Zolder",
    "Hasselt",
    "Genk",
    "Beringen",
    "Houthalen-Helchteren",
    "Zonhoven",
    "Diepenbeek",
    "Lummen",
    "Ham",
    "Leopoldsburg",
    "Hechtel-Eksel",
    "Peer",
    "Brussel"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
            <MapPin className="w-6 h-6 text-[#6FA9C8]" />
            <span className="text-[#3B4A7C] font-semibold">Actief in heel Limburg</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Ons werkgebied
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vista Cleaning is actief in Heusden-Zolder en omgeving.
            Wij bedienen graag particulieren en bedrijven in heel Limburg.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="shadow-xl bg-gradient-to-br from-[#6FA9C8]/5 to-blue-50">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#3B4A7C] mb-6">
                      Gemeenten die wij bedienen:
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {regions.map((region, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-center gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-[#6FA9C8] flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{region}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-[#3B4A7C] mb-4">
                      Buiten het werkgebied?
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Staat uw gemeente er niet bij? Geen probleem!
                      Neem contact met ons op en we kijken samen naar de mogelijkheden.
                      Voor grotere opdrachten komen we graag verder rijden.
                    </p>
                    <div className="space-y-4">
                      <a
                        href="tel:+32492569068"
                        className="flex items-center justify-center gap-2 bg-[#6FA9C8] hover:bg-[#5A94B3] text-white px-6 py-4 rounded-full transition-all hover:scale-105 font-semibold"
                      >
                        <MapPin className="w-5 h-5" />
                        Bel +32 492 56 90 68
                      </a>
                      <a
                        href="mailto:vistacleaning.d@gmail.com"
                        className="flex items-center justify-center gap-2 border-2 border-[#6FA9C8] text-[#6FA9C8] hover:bg-[#6FA9C8] hover:text-white px-6 py-4 rounded-full transition-all font-semibold"
                      >
                        Stuur een email
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12 bg-gradient-to-r from-[#6FA9C8] to-[#3B4A7C] rounded-2xl p-8 text-white"
          >
            <h4 className="text-2xl font-bold mb-3">Snelle service, lokaal bereikbaar</h4>
            <p className="text-lg opacity-90">
              Dankzij onze centrale locatie in Heusden-Zolder zijn wij snel ter plaatse
              in heel Limburg voor spoedklussen en regulier onderhoud.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
