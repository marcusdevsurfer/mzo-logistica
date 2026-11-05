import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="sobre-nosotros" className="bg-black/80 text-white px-4 py-16 sm:px-8 lg:px-16">
            {/* <h1 className="text-4xl font-bold mb-4">Sobre Nosotros</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center">
                <div className="flex flex-col justify-center items-center">
                    <Image
                        src="zlo.webp"
                        alt="Logo"
                        width={500}
                        height={300}
                    />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="mt-4">
                        <h3 className="text-3xl font-bold">Vision</h3>
                        <p>
                            Nuestra vision es crear una estrategia logistica mediante enlaces directos para evitar demoras en el proceso o impactos negativos en las tarifas del producto final.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-3xl font-bold">Mision</h3>
                        <p>
                            Darle a nuestros clientes la solucion logistica mas eficiente acorde las necesidades de cada proyecto, es por eso que trabajamos todo el tiempo en forma interdisciplinaria, buscando siempre un ganar-ganar.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}