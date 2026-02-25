"use client";

import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Jan Kowalski",
        role: "Kierowca zawodowy",
        text: "Mocno obawiałem się jazdy nocą z powodu odblasków. Badanie i dobór odpowiednich okularów z powłoką antyrefleksyjną u Optyka Gruszki całkowicie odmieniły mój komfort pracy na drodze.",
        rating: 5
    },
    {
        name: "Anna Nowak",
        role: "Pracownik IT",
        text: "Codziennie spędzam po 10 godzin przed monitorem. Zespół specjalistów dobrał mi świetne okulary 'do komputera', dzięki którym pieczenie i ból głowy całkowicie zniknęły. Szczerze polecam!",
        rating: 5
    },
    {
        name: "Marek Wiśniewski",
        role: "Emeryt",
        text: "Badałem wzrok w wielu miejscach, ale tutaj spotkałem się z największym profesjonalizmem i cierpliwością. Mam wreszcie idealnie dobrane okulary progresywne, z którymi znowu mogę czytać bez problemu.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative w-full py-24 bg-white overflow-hidden border-y border-zinc-50">

            <div className="container relative z-10 px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900"
                    >
                        Opinie Naszych Pacjentów
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600"
                    >
                        Najlepszym dowodem naszej skuteczności są dziesiątki pacjentów, którzy odzyskali komfort ostrego widzenia.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 * index }}
                            className="bg-zinc-50 border border-zinc-200 shadow-sm p-8 rounded-2xl flex flex-col h-full"
                        >
                            <div className="flex gap-1 mb-6 text-amber-500">
                                {[...Array(item.rating)].map((_, i) => (
                                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                ))}
                            </div>
                            <p className="text-zinc-700 italic mb-8 flex-grow leading-relaxed">
                                &quot;{item.text}&quot;
                            </p>
                            <div>
                                <p className="font-bold text-lg text-zinc-900">{item.name}</p>
                                <p className="text-sm text-zinc-500">{item.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
