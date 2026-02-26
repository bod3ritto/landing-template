"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        title: "Badanie Ostrości Wzroku",
        description: "Kompleksowe badanie komputerowe wzroku i manualne za pomocą foroptera. Pełna ocena wady refrakcji w profesjonalnym gabinecie.",
        icon: "eye",
        href: "/uslugi/badanie-wzroku"
    },
    {
        title: "Dobór Okularów",
        description: "Pomagamy w wyborze szkieł korekcyjnych, progresywnych oraz powłok filtrujących światło niebieskie. Ogromny wybór modnych oprawek.",
        icon: "glasses",
        href: "/uslugi/dobor-okularow"
    },
    {
        title: "Dobór Soczewek",
        description: "Nauczymy Cię zakładać, zdejmować i pielęgnować soczewki kontaktowe. Bezpieczne i wygodne rozwiązania dla aktywnych.",
        icon: "contact",
        href: "/uslugi/dobor-soczewek"
    }
];

export default function Services() {
    return (
        <section id="services" className="relative w-full py-24 bg-zinc-50/50 overflow-hidden">
            {/* Subtle background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/50 to-transparent pointer-events-none" />

            <div className="container px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900"
                        >
                            Nasze Usługi
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-zinc-600"
                        >
                            Kompleksowe podejście do Twojego wzroku – od precyzyjnego badania lekarskiego po profesjonalny dobór najwyższej jakości okularów i soczewek.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link href="/kontakt" className="hidden md:inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-500 transition-colors">
                            Umów Wizytę <span aria-hidden="true">&rarr;</span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-300 border border-zinc-100 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Link href={service.href} className="block w-full h-full p-8">
                                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform duration-500 text-amber-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-amber-600 transition-colors">{service.title}</h3>
                                    <p className="text-zinc-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                    <div className="w-10 h-1 bg-amber-500 rounded-full group-hover:w-full transition-all duration-300"></div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
