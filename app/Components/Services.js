import ServiceCard from "./ServiceCard";

export default function Service() {

    const services = [
        { title: "Asesoramiento logístico", icon: "/svgs/asesoramiento-logistico.svg" },
        { title: "Asesoramiento aduanal", icon: "/svgs/asesoramiento-aduanal.svg" },
        { title: "Fletes terrestres", icon: "/svgs/fletes-terrestres.svg" },
        // { title: "Previo de origen", icon: "/svgs/previo-origen.svg" },
        { title: "Manejo de mercancía general y peligrosa", icon: "/svgs/manejo-mercancia.svg" },
        { title: "Renta de contenedores con pedimento", icon: "/svgs/renta-contenedores.svg" },
        { title: "Emplaye y Paletizado", icon: "/svgs/emplaye-paletizado.svg" }
    ]

    return (
        <section id="servicios" className="bg-gray-50 text-black px-6 py-20 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto w-full">
                {/* Header */}
                <div className="mb-16">
                    <div className="mb-3">
                        <div className="w-8 h-1 bg-green-900 rounded-full mb-3"></div>
                        <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Soluciones logísticas</h3>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-roboto text-black">
                        Nuestros Servicios
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    )
}