"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplets, Recycle, Heart } from "lucide-react";

export default function Sustainability() {
  const ecoFeatures = [
    {
      icon: Leaf,
      title: "Eco-vriendelijke producten",
      description: "100% biologisch afbreekbare en milieuvriendelijke schoonmaakmiddelen",
    },
    {
      icon: Droplets,
      title: "Zuinig watergebruik",
      description: "Efficiënte technieken die water besparen zonder in te leveren op kwaliteit",
    },
    {
      icon: Recycle,
      title: "Duurzame materialen",
      description: "Herbruikbare microvezeldoeken en duurzame schoonmaaktools",
    },
    {
      icon: Heart,
      title: "Gezond & veilig",
      description: "Veilig voor kinderen, huisdieren en mensen met allergieën",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 px-6 py-3 rounded-full mb-6">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-green-700 font-semibold">Duurzaam schoonmaken</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Goed voor uw ruimte, goed voor de planeet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bij Vista Cleaning geloven we in hoogwaardige schoonmaak zonder de natuur te belasten.
            Daarom werken we uitsluitend met milieuvriendelijke producten en duurzame methodes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ecoFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#3B4A7C] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl max-w-5xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#3B4A7C] mb-4">
                Onze groene belofte
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Alle producten zijn gecertificeerd milieuvriendelijk</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Minimale CO2-uitstoot door efficiënte routeplanning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Geen agressieve chemicaliën of schadelijke dampen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Recycleren en correct afvalverwerking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Continue training in duurzame schoonmaaktechnieken</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#6FA9C8] to-green-400 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Schoon is gezond</h4>
              <p className="mb-6 leading-relaxed">
                Een schone omgeving draagt bij aan uw welzijn en productiviteit.
                Door te kiezen voor ecologische schoonmaak zorgt u niet alleen voor
                een gezondere leefomgeving, maar ook voor een betere toekomst.
              </p>
              <div className="bg-white/20 backdrop-blur rounded-xl p-4">
                <p className="text-sm opacity-90">
                  "Samen maken we het verschil voor een schonere, groenere wereld."
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
