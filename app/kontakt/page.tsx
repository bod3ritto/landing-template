import type { Metadata } from "next";
import Contact from "@/src/components/Contact";

export const metadata: Metadata = {
    title: "Kontakt i Dojazd | Zakład Optyczny Gruszka",
    description: "Skontaktuj się z Zakładem Optycznym Gruszka w Czechowicach-Dziedzicach. Umów termin badania wzroku telefonicznie lub odwiedź nas.",
};

export default function ContactPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start w-full bg-white pt-20">
            <Contact />
        </main>
    );
}
