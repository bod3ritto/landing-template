import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cennik Badań Wzroku i Opraw | Zakład Optyczny Gruszka",
    description: "Sprawdź cennik usług optycznych w Zakładzie Optycznym Gruszka. Transparentne ceny badań, okularów korekcyjnych i soczewek.",
};

const pricing = [
    { name: "Podstawowe komputerowe badanie wzroku", price: "0 zł (przy zakupie okularów)" },
    { name: "Pełne badanie optometryczne (foropter)", price: "150 zł" },
    { name: "Aplikacja i nauka zakładania soczewek", price: "200 zł" },
    { name: "Badanie dna oka", price: "180 zł" },
    { name: "Wizyta kontrolna (do 3 miesięcy)", price: "80 zł" },
];

export default function PricingPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start w-full bg-white pt-20">
            <section className="w-full py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6">Transparentny Cennik</h1>
                        <p className="text-xl text-zinc-600">
                            Dbamy o to, by całkowity koszt terapii i doboru szkieł był dla Ciebie przewidywalny. Poniżej przedstawiamy ramowe ceny naszych usług.
                        </p>
                    </div>

                    <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-sm">
                        {pricing.map((item, index) => (
                            <div key={index} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 border-b border-zinc-100 hover:bg-zinc-50 transition-colors last:border-0">
                                <span className="font-semibold text-zinc-900 text-lg mb-2 sm:mb-0">{item.name}</span>
                                <span className="text-amber-600 font-bold text-xl">{item.price}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center bg-amber-50 p-6 rounded-2xl text-amber-800 text-sm">
                        * Ceny oprawek okularowych oraz szkieł korekcyjnych ustalane są indywidualnie po dobraniu odpowiedniej korekcji. Dysponujemy oprawkami w cenach od 199 zł.
                    </div>
                </div>
            </section>
        </main>
    );
}
