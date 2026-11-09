import ServiceCard from "./ServiceCard";

export default function Service() {

    const services = [
        { title: "Asesoramiento logístico", description: "Descripción del servicio." },
        { title: "Asesoramiento aduanal", description: "Descripción del servicio." },
        { title: "Fletes terrestres", description: "Descripción del servicio." },
        { title: "Previo de origen", description: "Descripción del servicio." },
        { title: "Manejo de mercancía general y peligrosa", description: "Descripción del servicio." },
        { title: "Renta de contenedores con pedimento", description: "Descripción del servicio." },
        { title: "Emplaye y Paletizado", description: "Descripción del servicio." }
    ]

    return (
        <div>
            <section id="servicios" className="bg-black text-white px-4 py-16 sm:px-8 lg:px-16">
                <div className="text-center">
                    <h2 className="text-5xl font-bold mb-8 font-display">Nuestros <span className="text-5xl font-bold mb-8 font-display text-green-700">Servicios</span></h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>
        </div>
    )
}