import Header from "./Components/Header";
import { Video } from "./Components/Video";
export default function Home() {
  return (
    <main
      id="inicio"
      className="relative isolate grid min-h-svh w-full grid-rows-[auto_1fr] overflow-hidden bg-black font-sans"
    >
      <Video />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/10 to-black/35"
      />
      <Header />
    </main>
  );
}
