import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className="min-h-100 flex items-center bg-white text-black px-8 py-16 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex justify-center items-center">
                    <Image
                        className="rounded-xl saturate-100 contrast-100"
                        src="/about-us.jpeg"
                        alt="Logo"
                        width={400}
                        height={400}
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <h1 className="text-6xl font-roboto font-bold mb-8">Conócenos</h1>
                    <div className="text-xl font-roboto">
                        <p className="mb-6">
                            Más que una empresa somos un equipo de trabajo especializado y competitivo que te ayudara a crear y fortalecer vínculos en el area logística y de transporte. Te apoyamos en ampliar tu visión de proyectos comerciales ademas siempre con una perspectiva de logística inversa y ahorro de recursos.
                        </p>
                        <p className="mb-6">
                            Al estar ubicados en el Puerto de Manzanillo, el cual actualmente es el puerto mas importante del país, nos permite seguir enriqueciéndonos en temas logísticos y formar alianzas consolidadas.
                        </p>
                        <p>
                            Ponemos a tu disposición una variedad de servicios que son vitales para trasladar tus bienes de manera segura y optima.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    )
}