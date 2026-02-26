import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import Faq from "@/src/components/Faq";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <Problem />
      <Faq />

      <section className="py-24 bg-amber-50 w-full text-center">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-zinc-900">Zadbaj o swój wzrok już dziś</h2>
          <p className="text-xl text-zinc-600 mb-8">
            Odkryj pełen zakres naszych usług, poznaj zespół doświadczonych specjalistów i umów wizytę.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/uslugi" className="px-8 py-4 rounded-full bg-amber-500 hover:bg-amber-400 text-white font-bold text-lg transition-all shadow-lg shadow-amber-500/30">
              Zobacz Nasze Usługi
            </Link>
            <Link href="/kontakt" className="px-8 py-4 rounded-full bg-white hover:bg-zinc-50 text-amber-600 font-bold text-lg transition-all border-2 border-amber-200 hover:border-amber-400">
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
