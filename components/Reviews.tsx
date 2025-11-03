"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Lieve Hermans",
      role: "Particuliere klant",
      rating: 5,
      text: "Perfect werk! Mijn huis glanst na elke schoonmaakbeurt. Zeer betrouwbaar en vriendelijk.",
    },
    {
      name: "Marc Claes",
      role: "Bedrijfseigenaar",
      rating: 4,
      text: "Professioneel team dat al jaren ons kantoor onderhoudt. Goede prijs-kwaliteit verhouding.",
    },
    {
      name: "Anne Peeters",
      role: "Particuliere klant",
      rating: 5,
      text: "Aanrader! Ze denken mee en werken zeer grondig. Top resultaat elke keer.",
    },
    {
      name: "Jan Willems",
      role: "Appartementseigenaar",
      rating: 4,
      text: "Goede service voor onze VvE. Gemeenschappelijke ruimtes zien er altijd netjes uit.",
    },
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Wat onze klanten zeggen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            276 tevreden klanten gingen u voor
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400" />
            <Star className="w-8 h-8 fill-yellow-400 text-yellow-400 opacity-50" />
            <span className="text-2xl font-bold text-gray-700 ml-2">4.4</span>
            <span className="text-gray-600 ml-1">/ 5.0</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Quote className="w-10 h-10 text-[#6FA9C8] opacity-50" />
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-6 italic leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="border-t pt-4">
                    <p className="font-bold text-[#3B4A7C]">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.role}</p>
                  </div>
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
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            Sluit u aan bij onze tevreden klanten en ervaar het verschil
          </p>
        </motion.div>
      </div>
    </section>
  );
}
