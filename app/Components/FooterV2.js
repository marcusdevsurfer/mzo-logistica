import Image from "next/image";

export default function FooterV2() {
    return (
        <footer className="bg-black text-white px-6 py-8 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto w-full text-center">
                {/* <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} MZO Logística. Todos los derechos reservados.</p> */}
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <Image
                            src="/zlo.webp"
                            alt="Logo zlo"
                            width={400}
                            height={80}
                        />
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Horarios</h4>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Contacto</h4>
                    </div>
                </div>
            </div>
        </footer>
    )
}