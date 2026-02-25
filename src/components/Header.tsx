"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "../data/config";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 shadow-sm">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-10 h-10 shrink-0">
                        <Image src="/icon.png" alt="Optyk Gruszka Logo" fill className="object-contain" sizes="40px" />
                    </div>
                    <span className="font-bold text-xl text-zinc-900 tracking-tight hidden sm:block">Optyk <span className="text-amber-500">Gruszka</span></span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-zinc-600 hover:text-amber-500 transition-colors">Strona główna</Link>
                    <Link href="/o-nas" className="text-sm font-medium text-zinc-600 hover:text-amber-500 transition-colors">O nas</Link>
                    <Link href="/uslugi" className="text-sm font-medium text-zinc-600 hover:text-amber-500 transition-colors">Usługi</Link>
                    <Link href="/cennik" className="text-sm font-medium text-zinc-600 hover:text-amber-500 transition-colors">Cennik</Link>
                    <Link href="/kontakt" className="text-sm font-medium text-zinc-600 hover:text-amber-500 transition-colors">Kontakt</Link>
                    <a href={clinicConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-white text-sm font-bold rounded-full transition-all shadow shadow-amber-500/20">
                        Odwiedź Facebooka
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-zinc-600"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-zinc-100 shadow-lg px-6 py-4 flex flex-col gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-600 font-medium border-b border-zinc-50">Strona główna</Link>
                    <Link href="/o-nas" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-600 font-medium border-b border-zinc-50">O nas</Link>
                    <Link href="/uslugi" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-600 font-medium border-b border-zinc-50">Usługi</Link>
                    <Link href="/cennik" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-600 font-medium border-b border-zinc-50">Cennik</Link>
                    <Link href="/kontakt" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-600 font-medium border-b border-zinc-50">Kontakt</Link>
                    <a href={clinicConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center py-3 mt-2 bg-amber-500 text-white font-bold rounded-xl">
                        Odwiedź Facebooka
                    </a>
                </div>
            )}
        </header>
    );
}
