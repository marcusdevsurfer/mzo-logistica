import Image from "next/image";

export default function Header() {
    return (
        <header className="relative z-20 grid w-full grid-cols-1 items-center gap-4 bg-black/80 px-4 py-4 sm:grid-cols-[auto_1fr] sm:px-8 lg:px-16">
            <Image
                className="mx-auto h-auto w-32 cursor-pointer sm:mx-0 sm:w-40"
                loading="eager"
                src="/zlo.webp"
                alt="Logo zlo"
                width={200}
                height={80}
            />

            <nav aria-label="Navegación principal" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end sm:gap-x-6">
                <a href="#inicio" className="text-white hover:text-[#86BF59] sm:text-base font-roboto font-bold transition-all duration-100 ">
                    Inicio
                </a>
                <a href="#sobre-nosotros" className="text-white hover:text-[#86BF59] sm:text-base font-roboto font-bold transition-all duration-100 ">
                    Sobre nosotros
                </a>
                <a href="#servicios" className="text-white hover:text-[#86BF59] sm:text-base font-roboto font-bold transition-all duration-100 ">
                    Servicios
                </a>
                <a href="#contacto" className="text-white hover:text-[#86BF59] sm:text-base font-roboto font-bold transition-all duration-100">
                    Contacto
                </a>
            </nav>
        </header>
    )
}