"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { clinicConfig } from "../../../src/data/config";

export default function DoborOkularow() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section - Matching Homepage */}
            <section className="relative w-full bg-white text-zinc-900" style={{ height: '100vh' }}>
                {/* Background photo */}
                <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
                    <Image
                        src="/service_glasses.png"
                        alt="Dobór okularów"
                        fill
                        priority
                        className="object-cover object-center"
                        sizes="100vw"
                    />
                </div>
                <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/80 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-20">
                    <div className="flex flex-col items-center text-center max-w-4xl w-full">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200"
                        >
                            Styl i Precyzja
                        </motion.span>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-zinc-900"
                        >
                            Profesjonalny <span className="text-amber-500">Dobór Okularów</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg md:text-xl text-zinc-700 mb-10 max-w-2xl"
                        >
                            Nasi doświadczeni doradcy pomogą Ci w wyborze idealnych oprawek dopasowanych do Twojego stylu i kształtu twarzy.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                        >
                            <a
                                href={clinicConfig.booksyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center"
                            >
                                Umów wizytę
                            </a>
                            <Link
                                href="/uslugi"
                                className="px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-amber-600 font-bold text-lg transition-all border-2 border-amber-200 hover:border-amber-400 flex items-center justify-center"
                            >
                                Wróć do usług
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-zinc-400"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest mb-1">Przewiń</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                    </motion.div>
                </motion.div>
            </section>

            {/* Detailed Info Section */}
            <section className="pt-32 pb-48 px-6 bg-white overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    <div className="max-w-3xl mb-24">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-zinc-900 mb-8 leading-tight"
                        >
                            Styl, Który <br />
                            <span className="text-amber-500">Podkreśli Twoją Osobowość</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-600 leading-relaxed"
                        >
                            Nasi doświadczeni doradcy pomogą Ci w wyborze idealnych oprawek dopasowanych do Twojego unikalnego stylu, typu urody i kształtu twarzy, zapewniając przy tym maksymalną wygodę noszenia każdego dnia.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                        {[
                            {
                                title: "Najnowsze Kolekcje",
                                desc: "Oferujemy szeroki wybór modnych oprawek od renomowanych światowych producentów, stale aktualizując naszą ofertę."
                            },
                            {
                                title: "Szkła Progresywne",
                                desc: "Zaawansowane rozwiązania optyczne dopasowane do Twojego trybu życia, zapewniające ostre widzenie na każdą odległość."
                            },
                            {
                                title: "Ochrona Blue Control",
                                desc: "Soczewki z filtrami światła niebieskiego, które chronią Twoje oczy podczas długiej pracy przed monitorem i smartfonem."
                            },
                            {
                                title: "Korekcja Słoneczna",
                                desc: "Okulary przeciwsłoneczne z Twoją korekcją lub praktyczne nakładki magnetyczne typu clip-on dla pełnej wygody."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="p-10 aspect-square rounded-[3rem] bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:shadow-amber-500/10 transition-all group flex flex-col items-center justify-center text-center"
                            >
                                <div className="w-12 h-12 bg-white text-amber-500 flex items-center justify-center rounded-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-zinc-900">{item.title}</h3>
                                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                    {/* Massive white space before footer */}
                    <div className="h-64 bg-white"></div>
                </div>
            </section >
        </main >
    );
}
