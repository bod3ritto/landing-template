import type { Metadata } from "next";
import Services from "@/src/components/Services";

export const metadata: Metadata = {
    title: "Nasze Usługi Okulistyczne | Zakład Optyczny Gruszka",
    description: "Zapoznaj się z pozycjami w ofercie Zakładu Optycznego Gruszka. Oferujemy badanie wzroku dla dorosłych i dzieci, dobór soczewek i okularów.",
};

export default function ServicesPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start w-full bg-white pt-20">
            <div className="w-full py-16 bg-amber-50/50">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-zinc-900 mb-6">Pełen Zakres Usług</h1>
                    <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                        Oferujemy diagnostykę na najwyższym poziomie, korzystając ze specjalistycznego sprzętu medycznego.
                    </p>
                </div>
            </div>
            <Services />
        </main>
    );
}
