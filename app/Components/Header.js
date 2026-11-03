import Image from "next/image";

export default function Header() {
    return (
        <div className="absolute top-0 left-0 w-full min-h-24 flex items-center justify-center bg-black py-8 px-4">
            <Image
                className="w-75 h-auto cursor-pointer"
                src="/zlo.webp"
                alt="Logo zlo"
                width={100}
                height={100}
            />

            <div className="ml-4 flex items-center cursor-pointer">
                <a className="text-white ml-4 hover:text-green-400 transition-colors duration-100">
                    Inicio
                </a>
                <a className="text-white ml-4 hover:text-green-400 transition-colors duration-100">
                    Sobre nosotros
                </a>
                <a className="text-white ml-4 hover:text-green-400 transition-colors duration-100">
                    Servicios
                </a>
                <a className="text-white ml-4 hover:text-green-400 transition-colors duration-100">
                    Contacto
                </a>
            </div>

        </div>
    )
}