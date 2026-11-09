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
        <section id="servicios" className="bg-gray-100 text-black px-16 py-16 lg:px-32">
            <div className="text-center text-6xl mb-12">
                <h2 className="font-bold font-roboto">Nuestros <span className="font-bold font-roboto text-green-800">Servicios</span></h2>
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </section>
    )
}