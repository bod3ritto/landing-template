"use client";

import { motion } from "framer-motion";

const problems = [
    {
        title: "Pogorszenie Ostrości Wzroku",
        description: "Zamazany obraz niezależnie od odległości to sygnał, którego nie wolno ignorować. Pomożemy Ci dobrać odpowiednią korekcję do wady wzroku."
    },
    {
        title: "Cyfrowe Zmęczenie Oczu",
        description: "Długa praca przed ekranem wywołuje suchość, pieczenie i tzw. 'piasek pod powiekami'. Poznaj nasze metody łagodzenia tych uciążliwych objawów."
    },
    {
        title: "Problemy z Czytaniem (Prezbiopia)",
        description: "Musisz odsuwać telefon od twarzy, by przeczytać wiadomość? To naturalna kolej rzeczy. Dobierzemy dla Ciebie idealne okulary progresywne lub do czytania."
    }
];

export default function Problem() {
    return (
        <section id="problem" className="relative w-full py-24 bg-white overflow-hidden border-b border-zinc-50">
            <div className="container px-6 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900"
                    >
                        Z Czym się Zmagasz?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600"
                    >
                        Twoje oczy zasługują na najlepszą opiekę. Niezależnie od problemu, z jakim się zmagasz, nasi specjaliści pomogą Ci odzyskać komfort widzenia i radość z życia.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                            className="p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group"
                        >
                            <div className="w-12 h-12 bg-amber-50 text-amber-500 flex items-center justify-center rounded-xl mb-6 group-hover:scale-110 transition-transform">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-zinc-900">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
