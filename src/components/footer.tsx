import Image from "next/image";

export default function Footer() {
    return (
        <footer className="
            mt-auto shrink-0 px-8 h-20
            flex items-center justify-center
        ">
            <div className="flex items-center h-full">
                <Image src="/assets/logo.png" alt="Logo" width={120} height={120} style={{ height: "auto" }} />
            </div>
        </footer>
    )
}