"use client";

import { motion } from "framer-motion";
import { Award, Shield, Users, Clock } from "lucide-react";
import LogoWatermark from "./LogoWatermark";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Gecertificeerde professionals",
      description: "Ons team bestaat uit getrainde en gecertificeerde schoonmaakspecialisten",
    },
    {
      icon: Shield,
      title: "100% kwaliteitsgarantie",
      description: "Niet tevreden? We komen terug tot u volledig tevreden bent",
    },
    {
      icon: Users,
      title: "Klantgericht werken",
      description: "Persoonlijke aandacht en maatwerk voor elke klant",
    },
    {
      icon: Clock,
      title: "Flexibele planning",
      description: "Schoonmaak op het moment dat het u uitkomt",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Over Vista Cleaning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Met meer dan 10 jaar ervaring zijn wij uw betrouwbare partner voor
            professionele schoonmaakdiensten in Heusden-Zolder en omgeving.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div
            className="h-96 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1200')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3B4A7C]/80 to-transparent" />
            <LogoWatermark position="bottom-right" />
            <div className="relative h-full flex items-center px-12">
              <div className="max-w-xl text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Ervaring en kwaliteit
                </h3>
                <p className="text-lg opacity-90">
                  Ons professionele team zorgt ervoor dat elk project met de grootste
                  zorg en aandacht wordt uitgevoerd. Wij gebruiken alleen milieuvriendelijke
                  producten en moderne apparatuur.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#6FA9C8] to-[#3B4A7C] rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3B4A7C] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
