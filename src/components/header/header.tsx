import Link from "next/link";
import Image from "next/image";
import { Games } from "@/enums/games-descriptions";
import { Routes } from "@/enums/routes.enum";

export default function Header() {
    return (
        <header className="
            px-8 h-20
            flex items-center justify-between
            sticky top-0 z-50
            bg-[#171717]
            shadow-lg
        ">
            <div className="flex items-center h-full"> 
                <Image src="/assets/logo.png" alt="Logo" width={120} height={120} style={{ height: "auto" }} />
            </div>
            <nav className="
                h-full 
                flex items-center gap-8
                text-sm text-[#3367b0] hover:text-[#2b5796]">
                <Link href={Routes.ROTOMDLE} className="h-10 px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors">
                    {Games.ROTOMDLE}
                </Link>
                <Link href={Routes.REGIONDLE} className="h-10 px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors">
                    {Games.REGIONDLE}
                </Link>
                <Link href={Routes.TYPEODLE} className="h-10 px-4 inline-flex items-center justify-center rounded-md border border-[#3367b0] hover:bg-[#3367b0] hover:text-white transition-colors">
                    {Games.TYPEODLE}
                </Link>
            </nav>
        </header>
    )
}