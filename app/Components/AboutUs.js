import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className="min-h-screen flex items-center bg-white px-6 py-20 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Imagen - Izquierda */}
                    <div className="flex justify-center items-center">
                        <div className="relative w-full max-w-md">
                            <Image
                                className="rounded-lg shadow-lg object-cover w-full h-auto"
                                src="/about-us.jpeg"
                                alt="Equipo de MZO Logística"
                                width={450}
                                height={450}
                            />
                            {/* Pequeño detalle verde en la esquina */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-lg opacity-10"></div>
                        </div>
                    </div>

                    {/* Contenido - Derecha */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-4">
                            <div className="w-8 h-1 bg-green-500 rounded-full mb-3"></div>
                            <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Quiénes Somos</h2>
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 font-roboto leading-tight">
                            Conócenos
                        </h1>
                        
                        <div className="space-y-6 text-gray-700 font-roboto text-base lg:text-lg leading-relaxed">
                            <p>
                                Más que una empresa somos un equipo de trabajo especializado y competitivo que te ayudará a crear y fortalecer vínculos en el área logística y de transporte. Te apoyamos en ampliar tu visión de proyectos comerciales, siempre con una perspectiva de logística inversa y ahorro de recursos.
                            </p>
                            <p>
                                Al estar ubicados en el Puerto de Manzanillo, el cual actualmente es el puerto más importante del país, nos permite seguir enriqueciéndonos en temas logísticos y formar alianzas consolidadas.
                            </p>
                            <p>
                                Ponemos a tu disposición una variedad de servicios que son vitales para trasladar tus bienes de manera segura y óptima.
                            </p>
                        </div>

                        {/* Botón */}
                        <div className="mt-10">
                            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition-colors duration-300">
                                Conoce nuestros servicios
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}