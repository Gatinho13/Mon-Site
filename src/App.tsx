import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Heritage from "./components/Heritage";
import Collections from "./components/Collections";
import Mestre from "./components/Mestre";
import Events from "./components/Events";
import Journal from "./components/Journal";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-[#ece4d2] min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Heritage />
        <Collections />
        <Mestre />
        <Events />
        <Journal />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
