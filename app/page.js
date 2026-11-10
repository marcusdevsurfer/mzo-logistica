import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
export default function Home() {
  return (
    <main className="w-full font-sans">
      {/* <div className="bg-amber-300 text-black font-bold text-center">
        Esta pagina esta en desarrollo, podría presentar errores 🚧
      </div> */}
      <section
        id="inicio"
        className="relative isolate grid min-h-svh w-full grid-rows-[auto_1fr] overflow-hidden bg-black"
      >
        <Video />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-linear-to-b from-black/70 via-black/10 to-black/35"
        />
        <Header />
      </section>
      <AboutUs />
      <Services />
      <Footer />
    </main>
  );
}
