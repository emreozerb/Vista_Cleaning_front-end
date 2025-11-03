"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Building2, Home, Store, Truck } from "lucide-react";
import Image from "next/image";

export default function Gallery() {
  const projects = [
    {
      title: "Kantoorruimte Hasselt",
      type: "Zakelijk",
      description: "Complete kantoorschoonmaak voor 500m² kantoorruimte",
      icon: Building2,
      gradient: "from-[#3B4A7C] via-[#4A5C8C] to-[#5A6E9C]",
      stats: "500m²",
      image: "/kantoor.jpg",
    },
    {
      title: "Luxe villa Genk",
      type: "Particulier",
      description: "Grondige schoonmaak van villa met 5 slaapkamers",
      icon: Home,
      gradient: "from-[#6FA9C8] via-[#7FB9D8] to-[#8FC9E8]",
      stats: "5 kamers",
      image: "/villa.jpg",
    },
    {
      title: "Winkelcentrum Heusden",
      type: "Zakelijk",
      description: "Dagelijkse schoonmaak gemeenschappelijke ruimtes",
      icon: Store,
      gradient: "from-[#4A5C8C] via-[#5A7CAC] to-[#6A8CBC]",
      stats: "Dagelijks",
      image: "/winkelcentrum.jpg",

    },
    {
      title: "Verhuisschoonmaak",
      type: "Particulier",
      description: "Opleverschoon appartement na verbouwing",
      icon: Truck,
      gradient: "from-[#7FB9D8] via-[#6FA9C8] to-[#5F99B8]",
      stats: "Turnkey",
      image: "/verhuis.jpg",

    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#6FA9C8]/10 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-[#6FA9C8]" />
            <span className="text-[#3B4A7C] font-semibold">Onze projecten</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Trots op ons werk
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bekijk een selectie van onze recent uitgevoerde schoonmaakprojecten.
            Van particuliere woningen tot grote kantoorpanden.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group border-2 hover:border-[#6FA9C8]">
                    <div
                      className={`relative h-56 flex flex-col items-center justify-center overflow-hidden ${!project.image ? `bg-gradient-to-br ${project.gradient}` : ""}`}
                      style={
                        project.image
                          ? { backgroundImage: `url('${project.image}')`, backgroundSize: "cover", backgroundPosition: "center" }
                          : undefined
                      }
                    >
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImRvdHMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')] opacity-30" />

                  <div className="absolute top-4 left-4">
                    <div className="text-5xl font-bold text-white/30">{index + 1}</div>
                  </div>

                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className={`text-sm font-bold ${project.type === 'Zakelijk' ? 'text-[#3B4A7C]' : 'text-[#6FA9C8]'}`}>
                      {project.type}
                    </span>
                  </div>

                  <div className="relative z-10 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl mb-4 shadow-xl"
                    >
                      <project.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full inline-block shadow-lg">
                      <span className="text-sm font-bold text-gray-800">{project.stats}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30">
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                    />
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-[#3B4A7C] mb-2 group-hover:text-[#6FA9C8] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-[#3B4A7C] to-[#6FA9C8] rounded-3xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold mb-4">
            Voor- en na foto's beschikbaar
          </h3>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Wilt u meer voorbeelden zien van ons werk? Neem contact met ons op
            en wij laten u graag meer foto's zien van onze projecten.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-[#3B4A7C] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-xl"
          >
            Bekijk meer voorbeelden
          </a>
        </motion.div>
      </div>
    </section>
  );
}
