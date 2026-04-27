import Link from "next/link";
import Image from "next/image";
import { Games } from "@/enums/games-descriptions";
import { Routes } from "@/enums/routes.enum";

export default function Header() {
    return (
        <header className="
            shrink-0 w-full px-4 py-3 md:px-8 md:h-20
            flex flex-col gap-3 md:flex-row md:gap-0 md:items-center md:justify-between
            fixed top-0 left-0 z-[2000]
            bg-[#171717]
            shadow-sm
        ">
            <Link href="/" className="flex items-center h-full justify-center md:justify-start">
                <Image
                    src="/assets/logo.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="w-[96px] md:w-[120px] h-auto"
                />
            </Link>
            <nav className="
                w-full md:w-auto
                h-full 
                flex items-center justify-center md:justify-end gap-1.5 md:gap-4 lg:gap-8
                text-[10px] md:text-sm text-[#3367b0] hover:text-[#2b5796]">
                <Link href={Routes.ROTOMDLE} className="h-8 md:h-10 px-2 md:px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors whitespace-nowrap leading-none">
                    {Games.ROTOMDLE}
                </Link>
                <Link href={Routes.REGIONDLE} className="h-8 md:h-10 px-2 md:px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors whitespace-nowrap leading-none">
                    {Games.REGIONDLE}
                </Link>
                <Link href={Routes.TYPEODLE} className="h-8 md:h-10 px-2 md:px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors whitespace-nowrap leading-none">
                    {Games.TYPEODLE}
                </Link>
            </nav>
        </header>
    )
}