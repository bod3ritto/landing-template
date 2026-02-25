"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative w-full py-24 bg-zinc-50/50 overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-white relative shadow-2xl">
                            <Image
                                src="/about.png"
                                alt="Profesjonalny optometrysta podczas pracy w gabinecie"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover object-center"
                            />
                        </div>
                        {/* Badge overlay */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring" }}
                            className="absolute -bottom-8 -right-8 w-32 h-32 bg-amber-500 rounded-full flex flex-col items-center justify-center text-white border-8 border-zinc-50 shadow-xl"
                        >
                            <span className="text-3xl font-black">15+</span>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-50 text-center px-2">lat doświadczenia</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="w-full lg:w-1/2"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900">
                            Dbamy o Twój Wzrok
                        </h2>
                        <p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                            Jesteśmy zespołem doświadczonych optometrystów i specjalistów ochrony wzroku. W naszym eleganckim gabinecie łączymy najnowszą wiedzę medyczną z zaawansowanym sprzętem diagnostycznym, by precyzyjnie oceniać zdrowie Twoich oczu.
                        </p>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            Naszą misją w Zakładzie Optycznym Gruszka jest nie tylko zapewnienie perfekcyjnej ostrości widzenia, ale też edukacja i profilaktyka. Wierzymy, że wczesne wykrycie problemów i dobór odpowiedniej korekcji pozwala uniknąć wielu poważniejszych schorzeń w przyszłości.
                        </p>

                        <ul className="grid sm:grid-cols-2 gap-4">
                            {[
                                "Najnowocześniejszy sprzęt",
                                "Dyplomowani specjaliści",
                                "Szeroki wybór opraw",
                                "Badania bez kolejek",
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                                    </div>
                                    <span className="font-semibold text-zinc-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
