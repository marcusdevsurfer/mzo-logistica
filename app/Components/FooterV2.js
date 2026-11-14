import Image from "next/image";

export default function FooterV2() {
    return (
        <footer className="bg-black text-white px-6 py-8 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto w-full text-center">
                {/* <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} MZO Logística. Todos los derechos reservados.</p> */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 font-source-sans">
                    <div className="col-span-1 sm:col-span-2 text-start">
                        <Image
                            className="mb-12"
                            src="/zlo.webp"
                            alt="Logo zlo"
                            width={400}
                            height={80}
                        />
                        <div className="flex items-center">
                            <Image
                                src="/svgs/pin.svg"
                                alt="Social Icon"
                                width={24}
                                height={24}
                            />
                            <p className="ms-1">Calle Conocida, Tapeixtles Manzanillo, Colima, México</p>
                        </div>
                    </div>
                    <div className="text-start">
                        <h4 className="text-lg font-bold mb-16">Horarios</h4>
                        <p className="">Lunes a Viernes: 8am - 8pm</p>
                        <p className="">Sábado 9am - 2pm</p>
                        <p className="">Domingo: 10am - 3pm</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold mb-2">Contacto</h4>
                        <p className="">comercializacion@logisticaytransporte.com</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}