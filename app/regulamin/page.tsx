import React from "react";
import Link from "next/link";

export const metadata = {
    title: "Regulamin | Optyk Gruszka",
    description: "Regulamin świadczenia usług Zakładu Optycznego Gruszka w Czechowicach-Dziedzicach.",
};

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-zinc-50 py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    Powrót do strony głównej
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-900 tracking-tight">Regulamin</h1>

                    <div className="prose prose-zinc max-w-none prose-p:text-zinc-600 prose-headings:text-zinc-900">
                        <h2 className="text-xl font-bold mt-8 mb-4">1. Zakres usług</h2>
                        <p>
                            Zakład Optyczny Gruszka świadczy usługi w zakresie profesjonalnego badania wzroku, doboru okularów korekcyjnych, przeciwsłonecznych oraz soczewek kontaktowych. Oferujemy również drobne naprawy oraz serwis okularów.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">2. Zasady umawiania wizyt</h2>
                        <p>
                            Wizyty można umawiać telefonicznie, osobiście w salonie lub korzystając z dostępnych formularzy kontaktowych. Prosimy o informowanie o ewentualnym odwołaniu wizyty z odpowiednim wyprzedzeniem.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">3. Realizacja zamówień</h2>
                        <p>
                            Czas realizacji zamówienia na okulary ustalany jest indywidualnie i zależy od dostępności wybranych komponentów. Informujemy klientów niezwłocznie po przygotowaniu zamówienia do odbioru.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">4. Gwarancja i Reklamacje</h2>
                        <p>
                            Na wszystkie oferowane produkty udzielana jest gwarancja zgodna z obowiązującymi przepisami prawa oraz warunkami producenta. Reklamacje należy zgłaszać osobiście w naszym punkcie, dostarczając wadliwy produkt.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">5. Postanowienia końcowe</h2>
                        <p>
                            Korzystając z usług Zakładu Optycznego Gruszka powierzasz nam swój wzrok. Dokładamy wszelkich starań, aby opieka nad Twoim zdrowiem stała na najwyższym poziomie. O wszelkich zmianach regulaminu będziemy informować na bieżąco na naszej stronie internetowej.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
