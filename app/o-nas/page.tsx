import type { Metadata } from "next";
import AboutComponent from "@/src/components/About";
import Testimonials from "@/src/components/Testimonials";

export const metadata: Metadata = {
    title: "O Nas | Zakład Optyczny Gruszka Czechowice",
    description: "Poznaj nasz zespół optyków z Czechowic. Jesteśmy rzetelnymi specjalistami z wieloletnim doświadczeniem w optyce i doborze okularów.",
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start w-full bg-white pt-20">
            <div className="w-full py-16 bg-amber-50/30">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6">Poznaj Nas Bliżej</h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        Naszym priorytetem jest najwyższa jakość widzenia i bezpieczeństwo naszych pacjentów.
                    </p>
                </div>
            </div>

            <section className="w-full py-20 bg-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-zinc-900 mb-8">Nasza Historia</h2>
                    <div className="space-y-6 text-lg text-zinc-600 leading-relaxed text-justify md:text-left">
                        <p>
                            Początki <strong>Zakładu Optycznego Gruszka</strong> to przede wszystkim zaufanie naszych klientów z Czechowic-Dziedzic i okolic. Od lat doradzamy w doborze idealnych oprawek oraz zajmujemy się profesjonalnym badaniem ostrości widzenia.
                        </p>
                        <p>
                            Regularnie inwestujemy w najnowocześniejszy sprzęt diagnostyczny oraz ciągłe podnoszenie kwalifikacji naszego zespołu. Dzięki temu gwarantujemy badanie wzroku i dobór szkieł na najwyższym światowym poziomie.
                        </p>
                        <p>
                            Dziś nasze usługi to synonim prestiżu, bezbłędnej diagnostyki medycznej i najwyższej jakości opraw okularowych. Choć technologie się zmieniają, nasza misja pozostaje niezmienna: <em>chcemy, abyś spojrzał na świat wyraźniej</em>.
                        </p>
                    </div>
                </div>
            </section>

            <AboutComponent />
            <Testimonials />
        </main>
    );
}
