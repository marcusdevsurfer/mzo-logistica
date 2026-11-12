import AboutUs from "./Components/AboutUs";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Video from "./Components/Video";
import Footer from "./Components/Footer";
import FooterV2 from "./Components/FooterV2";
export default function Home() {
  return (
    <main className="w-full font-sans">
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
      {/* <FooterV2 /> */}
      <Footer />
    </main>
  );
}
