import React from "react";
import PrimeVideoLogo from "@/public/imgs/prime-video-logo.png";
import ClientLogo from "@/public/imgs/client-logo.png";
import ClientLogo2 from "@/public/imgs/client-logo2.png";
import AmazonLogo from "@/public/imgs/amazon-logo.png";
import Glogo from "@/public/imgs/g-logo.png";
import Paintinglogo from "@/public/imgs/painting-logo.png";
import Image from "next/image";

export default function Clients() {
  return (
    <div className="container flex flex-col items-center gap-[70px] py-20 bg-orange-300 ">
      <h3 className="font-medium text-xl xl:text-2xl capitalize">
        We Have 1520+Global Clients
      </h3>
      <div className="w-full flex flex-wrap justify-center items-center gap-5 md:justify-between">
      <Image src={ClientLogo} alt="Client Logo 1" priority className="bg-blue-200" />
        <Image src={PrimeVideoLogo} alt="Prime Video Logo" priority className="bg-blue-200" />
        <Image src={ClientLogo2} alt="Client Logo 2" priority className="bg-blue-200" />
        <Image src={Paintinglogo} alt="Painting Logo" priority className="bg-blue-200"/>
        <Image src={Glogo} alt="G Logo" priority className="bg-blue-200" />
        <Image src={AmazonLogo} alt="Amazon Logo" priority className="bg-blue-200" />
      </div>
    </div>
  );
}
