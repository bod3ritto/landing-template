"use client";

import { motion } from "framer-motion";
import { clinicConfig } from "../data/config";

export default function Contact() {
    return (
        <section id="contact" className="relative w-full py-24 bg-white overflow-hidden border-t border-zinc-100">
            <div className="container px-6 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900"
                    >
                        Umów Badanie Wzroku
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-zinc-600"
                    >
                        Skontaktuj się z nami bezpośrednio lub zarezerwuj termin wygodnie online, kiedy tylko zechcesz.
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-zinc-100">

                    <div className="w-full lg:w-1/2 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-zinc-900">Dane Kontaktowe</h3>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-1">Zadzwoń do nas</p>
                                        <a href={`tel:${clinicConfig.phone.replace(/\s+/g, '')}`} className="text-xl font-bold text-zinc-900 hover:text-amber-600 transition-colors">
                                            {clinicConfig.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500 mb-1">Odwiedź gabinet</p>
                                        <p className="text-lg font-medium text-zinc-900">
                                            {clinicConfig.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h4 className="font-bold text-zinc-900 mb-4">Godziny otwarcia</h4>
                                <div className="flex justify-between text-zinc-600 border-b border-zinc-100 pb-2 mb-2">
                                    <span>Poniedziałek - Piątek:</span>
                                    <span className="font-medium text-zinc-900">10:00 - 17:00</span>
                                </div>
                                <div className="flex justify-between text-zinc-600 border-b border-zinc-100 pb-2 mb-2">
                                    <span>Sobota:</span>
                                    <span className="font-medium text-zinc-900">Zamknięte</span>
                                </div>
                                <div className="flex justify-between text-zinc-600">
                                    <span>Niedziela:</span>
                                    <span className="font-medium text-zinc-900">Zamknięte</span>
                                </div>
                            </div>
                        </div>

                        <a
                            href={clinicConfig.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl bg-[#1877F2] hover:bg-[#1864D9] text-white font-bold text-center transition-all shadow-md flex items-center justify-center gap-2"
                        >
                            <span>Odwiedź Nasz Facebook</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" /></svg>
                        </a>
                    </div>

                    <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden bg-zinc-100 min-h-[400px]">
                        <iframe
                            src={clinicConfig.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={false}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lokalizacja kliniki"
                            className="w-full h-full min-h-[400px]"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
}
