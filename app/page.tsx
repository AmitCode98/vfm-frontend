import Slider from "@/components/container/home-page/Slider";
import Hero from "@/components/container/home-page/hero";
import HeroGradientImage from "@/public/imgs/hero-gradient-img.png";
import Image from "next/image";
import AboutUs from "@/components/container/home-page/aboutUs";
import Services from "@/components/container/home-page/Services";
import ChooseUs from "@/components/container/home-page/ChooseUs";
import SaysClients  from "@/components/container/home-page/SaysClients";
import Clients from "@/components/container/home-page/Clients";
import ContactUs from "@/components/container/home-page/ContactUs";

export default function Home() {
  return (
    <main className="flex-grow pt-24 relative overflow-hidden">
      <Image
        src={HeroGradientImage}
        alt="img"
        className="absolute top-0 right-0"
      />
      <Hero />
      <Slider />
      <AboutUs />
      <Services />
      <ChooseUs />
      <SaysClients />
      <Clients/>
      <ContactUs/>
    </main>
  );
}
