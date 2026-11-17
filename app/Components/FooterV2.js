import Image from "next/image";

export default function FooterV2() {
    return (
        <footer className="bg-black text-white px-6 py-8 sm:px-8 lg:px-16 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 font-source-sans w-full">
                    <div className="col-span-1 md:col-span-2 text-start min-w-0">
                        <div className="mb-6">
                            <Image
                                src="/zlo.webp"
                                alt="Logo zlo"
                                width={180}
                                height={250}
                            />
                        </div>
                        <div className="flex items-start gap-2 overflow-hidden">
                            <Image
                                src="/svgs/pin.svg"
                                alt="Social Icon"
                                width={24}
                                height={24}
                            />
                            <p className="text-sm sm:text-base wrap-break-word">Calle Conocida, Tapeixtles Manzanillo, Colima, México</p>
                        </div>
                    </div>
                    <div className="text-start min-w-0">
                        <div className="mb-6">
                            <h4 className="text-xl font-bold">Horarios</h4>
                        </div>
                        <p className="text-sm sm:text-base">Lunes a Viernes: 8am - 8pm</p>
                        <p className="text-sm sm:text-base">Sábado 9am - 2pm</p>
                        <p className="text-sm sm:text-base">Domingo: 10am - 3pm</p>
                    </div>
                    <div className="text-start min-w-0">
                        <div className="mb-6">
                            <h4 className="text-xl font-bold">Contacto</h4>
                        </div>
                        <div className="flex items-start gap-2 overflow-hidden">
                            <Image
                                src="/svgs/email.svg"
                                alt="Email Icon"
                                width={24}
                                height={24}
                            />
                            <p className="text-sm sm:text-base text-wrap">comercializacion@logisticaytransporte.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}