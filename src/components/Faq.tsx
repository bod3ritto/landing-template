"use client";

import { useState } from "react";

const faqs = [
    {
        question: "Jak przygotować się do badania wzroku?",
        answer: "Na badanie wzroku warto przyjść wypoczętym. Zabierz ze sobą dotychczas używane okulary i ewentualną dokumentację medyczną. Prosimy również o niezakładanie twardych soczewek kontaktowych przynajmniej na 24h przed wizytą.",
    },
    {
        question: "Czy badanie wzroku u optyka jest darmowe?",
        answer: "Tak, w naszym salonie dla klientów decydujących się na wykonanie kompletnych okularów (oprawki + szkła) standardowe badanie ostrości wzroku jest całkowicie bezpłatne.",
    },
    {
        question: "Jak długo czeka się na gotowe okulary?",
        answer: "Czas oczekiwania jest bardzo krótki. W przypadku najpopularniejszych rodzajów soczewek, okulary mogą być gotowe nawet w ciągu kilku godzin. Dla szkieł o nietypowych parametrach czas ten wynosi zazwyczaj 2-3 dni robocze.",
    },
    {
        question: "Czy przyjmujecie recepty od innych lekarzy okulistów?",
        answer: "Oczywiście! Zrealizujemy każdą ważną receptę okularową. Nasz wykwalifikowany personel pomoże dopasować wymarzone oprawki oraz doradzi optymalne rozwiązania jeśli chodzi o wybór soczewek okularowych.",
    },
    {
        question: "Czy można umówić się na wizytę online lub telefonicznie?",
        answer: "Tak, zalecamy wcześniejsze umawianie wizyt, co gwarantuje przyjęcie o dogodnej dla Państwa godzinie. W tym celu zachęcamy do kontaktu telefonicznego.",
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white w-full" id="faq">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900 tracking-tight">Często Zadawane Pytania</h2>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        Poznaj odpowiedzi na najpopularniejsze pytania i sprawdź, co warto wiedzieć przed wizytą.
                    </p>
                </div>

                <div className="space-y-10">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden"
                            >
                                <button
                                    className="w-full px-8 py-6 text-left flex justify-between items-center focus:outline-none cursor-pointer hover:bg-zinc-50 transition-colors"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    type="button"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-bold text-xl text-zinc-900">{faq.question}</span>
                                    <span className={`flex-shrink-0 ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                    </span>
                                </button>
                                {isOpen && (
                                    <div className="px-8 pb-6">
                                        <p className="text-zinc-600 text-lg leading-relaxed pt-2 border-t border-zinc-100">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
