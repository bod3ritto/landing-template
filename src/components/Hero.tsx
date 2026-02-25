"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { clinicConfig } from "../data/config";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex items-center justify-center bg-white text-zinc-900 overflow-hidden pt-48 md:pt-64 pb-24">
            {/* Background decoration - Photo overlay */}
            <div className="absolute inset-0 z-0 opacity-40 mix-blend-multiply">
                <Image
                    src="/hero.png"
                    alt="Optyk Gruszka w Czechowicach-Dziedzicach"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white to-transparent z-0" />

            <div className="container relative z-10 px-6 mx-auto flex flex-col items-center text-center max-w-4xl">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-amber-600 font-bold tracking-widest uppercase mb-4 text-sm bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200"
                >
                    {clinicConfig.name}
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-zinc-900"
                >
                    Spójrz na Świat <span className="text-amber-500">Wyraźniej</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-zinc-700 mb-10 max-w-2xl"
                >
                    Zaufaj ekspertom w dziedzinie narządu wzroku. Oferujemy kompleksowe badania, diagnostykę i dobór idealnych okularów dla Ciebie w sercu {clinicConfig.city}.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <a
                        href={clinicConfig.facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg transition-all shadow-lg shadow-amber-500/30 flex items-center justify-center gap-2"
                    >
                        <span>Odwiedź naszego Facebooka</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </a>

                    <Link
                        href="/uslugi"
                        className="px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-amber-600 font-bold text-lg transition-all border-2 border-amber-200 hover:border-amber-400"
                    >
                        Sprawdź ofertę
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
