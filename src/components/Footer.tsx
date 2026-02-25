import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "../data/config";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-8 h-8 shrink-0">
                                <Image src="/icon.png" alt="Optyk Gruszka Logo" fill className="object-contain" sizes="32px" />
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Optyk Gruszka</span>
                        </Link>
                        <p className="max-w-md text-sm leading-relaxed mb-6">
                            Zakład Optyczny w Czechowicach-Dziedzicach. Profesjonalne badanie ostrości wzroku, diagnostyka oraz dobór najwyższej jakości okularów i soczewek kontaktowych. Zadbaj o swój wzrok z liderami rynku.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Nawigacja</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/" className="hover:text-amber-500 transition-colors">Strona Główna</Link></li>
                            <li><Link href="/uslugi" className="hover:text-amber-500 transition-colors">Nasze Usługi</Link></li>
                            <li><Link href="/cennik" className="hover:text-amber-500 transition-colors">Cennik</Link></li>
                            <li><Link href="/kontakt" className="hover:text-amber-500 transition-colors">Kontakt</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Kontakt</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                {clinicConfig.phone}
                            </li>
                            <li className="flex items-start gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                                {clinicConfig.address}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                    <p>&copy; {currentYear} {clinicConfig.name}. Wszelkie prawa zastrzeżone.</p>
                    <div className="flex gap-4">
                        <Link href="/polityka-prywatnosci" className="hover:text-white transition-colors">Polityka Prywatności</Link>
                        <Link href="/regulamin" className="hover:text-white transition-colors">Regulamin</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
