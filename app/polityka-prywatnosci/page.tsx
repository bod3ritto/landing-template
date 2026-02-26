import React from "react";
import Link from "next/link";

export const metadata = {
    title: "Polityka Prywatności | Optyk Gruszka",
    description: "Polityka prywatności Zakładu Optycznego Gruszka w Czechowicach-Dziedzicach.",
};

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-zinc-50 py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-amber-500 mb-8 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                    Powrót do strony głównej
                </Link>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100">
                    <h1 className="text-3xl md:text-5xl font-bold mb-8 text-zinc-900 tracking-tight">Polityka Prywatności</h1>

                    <div className="prose prose-zinc max-w-none prose-p:text-zinc-600 prose-headings:text-zinc-900">
                        <h2 className="text-xl font-bold mt-8 mb-4">1. Postanowienia ogólne</h2>
                        <p>
                            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych przekazywanych przez Użytkowników w związku z korzystaniem z usług Zakładu Optycznego Gruszka.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">2. Administrator Danych Osobowych</h2>
                        <p>
                            Administratorem danych osobowych jest Zakład Optyczny Gruszka z siedzibą w Czechowicach-Dziedzicach przy ul. Stefana Żeromskiego 2.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">3. Cel i zakres zbierania danych</h2>
                        <p>
                            Dane osobowe przetwarzane są na podstawie zgody wyrażanej przez Użytkownika oraz w przypadkach, w których przepisy prawa upoważniają Administratora do przetwarzania danych osobowych w celu realizacji zawartej umowy (np. umówienia wizyty, wykonania okularów).
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">4. Prawa Użytkownika</h2>
                        <p>
                            Użytkownik ma prawo do dostępu do swoich danych, ich poprawiania, żądania ich usunięcia lub ograniczenia przetwarzania, a także prawo do wniesienia sprzeciwu wobec przetwarzania.
                        </p>

                        <h2 className="text-xl font-bold mt-8 mb-4">5. Pliki Cookies</h2>
                        <p>
                            Serwis używa plików cookies (tzw. ciasteczka) w celach statystycznych i funkcjonalnych. Użytkownik może samodzielnie zarządzać plikami cookies zmieniając ustawienia swojej przeglądarki internetowej.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
