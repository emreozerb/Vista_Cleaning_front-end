"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Chrome as Home, Building2, Sparkles, Sofa, Briefcase, Store, School, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import LogoWatermark from "./LogoWatermark";

export default function Services() {
  const [activeTab, setActiveTab] = useState("particulier");

  const particulierServices = [
    {
      icon: Home,
      title: "Huisschoonmaak",
      description: "Complete schoonmaak van uw woning, van keuken tot badkamer",
      features: ["Stofzuigen en dweilen", "Keuken reinigen", "Badkamer sanitair", "Ramen poets"],
      image: "https://images.pexels.com/photos/6195125/pexels-photo-6195125.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Sparkles,
      title: "Ramen wassen",
      description: "Kristalheldere ramen binnen en buiten",
      features: ["Binnen en buiten", "Kozijnen reinigen", "Streepvrij resultaat", "Tot 3 verdiepingen"],
      image: "./raam_schoonmaak.jpg",
    },
    {
      icon: Sofa,
      title: "Diepe reiniging",
      description: "Grondige schoonmaak van tapijten, meubels en gordijnen",
      features: ["Tapijten reinigen", "Banken & stoelen", "Gordijnen", "Matrasreiniging"],
      image: "./diepe_reiniging.jpg",
    },
    {
      icon: Home,
      title: "Verhuisschoonmaak",
      description: "Uw oude of nieuwe woning schitterend schoon",
      features: ["Complete woning", "Inclusief ramen", "Kasten binnen", "Opleverschoon"],
      image: "https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const zakelijkServices = [
    {
      icon: Building2,
      title: "Kantoorschoonmaak",
      description: "Professionele schoonmaak voor kantoorruimtes en bedrijfspanden",
      features: ["Dagelijkse schoonmaak", "Toiletten & pantry", "Vloeronderhoud", "Flexibele tijden"],
      image: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: Store,
      title: "Winkelschoonmaak",
      description: "Uw winkel altijd representatief voor klanten",
      features: ["Voor openingstijd", "Etalages reinigen", "Vloeren onderhouden", "Sanitair"],
      image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: School,
      title: "Onderwijs & zorg",
      description: "Hygiënische schoonmaak voor scholen en zorginstellingen",
      features: ["Desinfectie", "Klaslokalen", "Gemeenschappelijke ruimtes", "Gespecialiseerd team"],
      image: "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      icon: UsersIcon,
      title: "VvE schoonmaak",
      description: "Onderhoud van gemeenschappelijke ruimtes in appartementencomplexen",
      features: ["Trappenhuizen", "Entrees & hallen", "Liften", "Bergingen"],
      image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const services = activeTab === "particulier" ? particulierServices : zakelijkServices;

  return (
    <>
    <div id="particulier" className="absolute -mt-24" />
    <div id="zakelijk" className="absolute -mt-24" />
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Onze Diensten
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Op maat gemaakte schoonmaakoplossingen voor elke situatie
          </p>
        </motion.div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 h-14">
            <TabsTrigger value="particulier" id="particulier" className="text-lg data-[state=active]:bg-[#6FA9C8] data-[state=active]:text-white">
              Particulier
            </TabsTrigger>
            <TabsTrigger value="zakelijk" id="zakelijk" className="text-lg data-[state=active]:bg-[#3B4A7C] data-[state=active]:text-white">
              Zakelijk
            </TabsTrigger>
          </TabsList>

          <TabsContent value="particulier">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {particulierServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#6FA9C8] overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <LogoWatermark position="top-right" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-[#6FA9C8] rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#3B4A7C] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-[#6FA9C8] mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="zakelijk">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zakelijkServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-[#3B4A7C] overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url('${service.image}')` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      </div>
                      <LogoWatermark position="top-right" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 bg-[#3B4A7C] rounded-xl flex items-center justify-center">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-[#3B4A7C] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="text-[#3B4A7C] mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="bg-[#6FA9C8] hover:bg-[#5A94B3] text-white px-8 py-6 text-lg rounded-full">
            <a href="#contact">Vraag een offerte aan</a>
          </Button>
        </motion.div>
      </div>
    </section>
    </>
  );
}
