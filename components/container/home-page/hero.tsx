"use client";
import React, { useState } from "react";
import HeroWaveImage from "@/public/imgs/hero-wave.png";
import Image from "next/image";
import HeroBgImage from "@/public/imgs/hero-bg-img.png";
import HeroEllipsImage from "@/public/imgs/hero-ellips-img.png";
import Form from "@/components/shared/Form";

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden ">
      {/* Hero Background Wave Image */}
      <Image
        src={HeroWaveImage}
        alt="Wave Image"
        priority
        className="absolute w-full top-0 -z-20"
      />
      {/* Hero First Section */}
      <div className="container py-10 flex flex-col lg:flex-row justify-between items-center ">
        <h1 className="font-bold text-[120px] uppercase text-black flex flex-col leading-none">
          <span className="">craft</span>
          <span className="text-white text-shadow">inspire</span>
          <span className="italic">create</span>
        </h1>

        <Image src={HeroEllipsImage} priority alt="img" className="" />
      </div>

      {/* Hero Second Section */}
      <div className="container relative flex flex-col justify-end items-center ">
        <Image
          src={HeroBgImage}
          priority
          alt="Background Image"
          className="pb-32"
        />

        <div
          className="bg-white w-[85%] absolute mb-10 z-20"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
          }}
        >
          {/* Hero Form  */}
          <Form />
        </div>
      </div>
    </section>
  );
}
