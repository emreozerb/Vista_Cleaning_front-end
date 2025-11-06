"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      content: "+32 492 12 03 94",
      link: "tel:32492120394",
    },
    {
      icon: Mail,
      title: "Email",
      content: "vistacleaning.d@gmail.com",
      link: "mailto:vistacleaning.d@gmail.com",
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Hoensbroeckstraat 45, 3550 Heusden-Zolder",
      // link: "https://maps.google.com/?q=Hoensbroeckstraat+45+3550+Heusden-Zolder",
    },
    {
      icon: Clock,
      title: "Openingstijden",
      content: "Ma-Vr: 08:00 - 18:00, Za: 09:00 - 14:00",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Neem contact op
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Klaar voor een schitterend schoon resultaat? Vraag vandaag nog een vrijblijvende offerte aan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-[#3B4A7C] mb-6">
                  Vraag een offerte aan
                </h3>
                <form className="space-y-6">
                  <div>
                    <Label htmlFor="name">Naam</Label>
                    <Input
                      id="name"
                      placeholder="Uw volledige naam"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="uw.email@voorbeeld.com"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Telefoon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+32 XXX XX XX XX"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service-type">Type dienst</Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Kies een optie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particulier">Particulier</SelectItem>
                        <SelectItem value="zakelijk">Zakelijk</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea
                      id="message"
                      placeholder="Vertel ons meer over uw wensen..."
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#6FA9C8] hover:bg-[#5A94B3] text-white py-6 text-lg rounded-full"
                  >
                    Verstuur aanvraag
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#6FA9C8] to-[#3B4A7C] rounded-xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#3B4A7C] mb-1">
                          {info.title}
                        </h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-gray-600 hover:text-[#6FA9C8] transition-colors"
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <Card className="bg-gradient-to-br from-[#6FA9C8] to-[#3B4A7C] text-white shadow-xl">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">BTW nummer</h4>
                <p className="text-xl">1010.919.548</p>
                <p className="mt-4 opacity-90">Vista Designer BV</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
