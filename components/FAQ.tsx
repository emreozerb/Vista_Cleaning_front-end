"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "Hoe snel kunnen jullie starten?",
      answer: "Voor spoedopdrachten kunnen wij vaak binnen 24-48 uur starten. Voor reguliere diensten plannen we graag een vrijblijvend kennismakingsgesprek in om uw wensen te bespreken en een passend schoonmaakschema op te stellen.",
    },
    {
      question: "Werken jullie met ecologische schoonmaakmiddelen?",
      answer: "Ja! Wij gebruiken uitsluitend milieuvriendelijke en biologisch afbreekbare schoonmaakmiddelen die veilig zijn voor mens, dier en milieu. Kwaliteit en duurzaamheid gaan bij ons hand in hand.",
    },
    {
      question: "Zijn jullie verzekerd?",
      answer: "Ja, wij beschikken over een volledige aansprakelijkheidsverzekering. Mocht er onverhoopt schade ontstaan tijdens onze werkzaamheden, dan bent u volledig gedekt.",
    },
    {
      question: "Wat zijn de kosten van jullie diensten?",
      answer: "De kosten zijn afhankelijk van het type dienst, de grootte van de ruimte en de frequentie. Wij maken graag een vrijblijvende offerte op maat voor uw situatie. Neem contact met ons op voor een scherp en eerlijk prijsvoorstel.",
    },
    {
      question: "Werken jullie ook in het weekend?",
      answer: "Ja, wij bieden flexibele diensten aan, ook in de avonduren en tijdens het weekend. Zo zorgen we ervoor dat wij minimaal overlast veroorzaken en op een moment schoonmaken dat voor u het beste uitkomt.",
    },
    {
      question: "Moet ik een contract afsluiten?",
      answer: "Voor eenmalige schoonmaak is geen contract nodig. Voor periodieke diensten werken wij met flexibele contracten waarbij u altijd één maand opzegtermijn heeft. Geen langdurige verplichtingen!",
    },
    {
      question: "Brengen jullie eigen materiaal mee?",
      answer: "Ja, wij komen volledig uitgerust met professioneel schoonmaakmateriaal en -middelen. U hoeft zich nergens zorgen over te maken, wij zorgen voor alles wat nodig is.",
    },
    {
      question: "Wat gebeurt er als ik niet tevreden ben?",
      answer: "Klanttevredenheid staat bij ons voorop. Als u niet 100% tevreden bent, komen wij kosteloos terug om het goed te maken. Wij streven altijd naar perfectie en staan garant voor onze kwaliteit.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#3B4A7C] mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Heeft u een vraag? Bekijk hier de antwoorden op de meest gestelde vragen
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-xl px-6 border-2 border-gray-200 hover:border-[#6FA9C8] transition-colors"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-[#3B4A7C] hover:text-[#6FA9C8] py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-4">
            Staat uw vraag er niet tussen?
          </p>
          <a
            href="tel:+32492569068"
            className="text-[#6FA9C8] hover:text-[#5A94B3] font-semibold text-lg underline"
          >
            Bel ons op +32 492 56 90 68
          </a>
        </motion.div>
      </div>
    </section>
  );
}
