import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className="min-h-100 flex items-center bg-white text-black px-8 py-16 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <Image
                        src="/zlo-black.webp"
                        alt="Logo"
                        width={600}
                        height={600}
                    />
                </div>
                <div>
                    <h1 className="text-5xl font-roboto font-bold mb-8">Conócenos</h1>
                    <p className="text-xl font-roboto">
                      Más que una empresa somos un equipo de trabajo especializado y competitivo que te ayudara a crear y fortalecer vínculos en el area logística y de transporte. Te apoyamos en ampliar tu visión de proyectos comerciales ademas siempre con una perspectiva de logística inversa y ahorro de recursos.
                    </p>

                </div>
            </div>
        </section>
    )
}