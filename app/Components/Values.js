import Image from "next/image";

export default function Values() {
    return (
        <section id="values" className="bg-black/80 text-white px-4 py-16 sm:px-8 lg:px-16">
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
                        <h3 className="font-display text-3xl">Visión</h3>
                        <p>
                            Nuestra visión es crear una estrategia logística mediante enlaces directos para evitar demoras en el proceso o impactos negativos en las tarifas del producto final.
                        </p>
                    </div>
                    <div className="mt-4">
                        <h3 className="font-display text-3xl">Misión</h3>
                        <p>
                            Darle a nuestros clientes la solución logística más eficiente acorde a las necesidades de cada proyecto, es por eso que trabajamos todo el tiempo en forma interdisciplinaria, buscando siempre un ganar-ganar.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}