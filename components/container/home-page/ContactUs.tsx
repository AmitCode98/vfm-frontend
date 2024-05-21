import React from "react";
import BlackArrow from "@/public/icons/black-single-arrow.svg";
import Image from "next/image";
import Form from "@/components/shared/Form";

export default function ContactUs() {
  return (
    <section className="container py-20 bg-lime-300">
      <div className="flex flex-col items-center gap-6 ">
        <div className="flex justify-center items-center gap-5 bg-red-400">
          <Image src={BlackArrow} alt="img" priority />
          <h3 className="text-lg font-medium capitalize">work with us</h3>
        </div>
        <div className="bg-blue-400 w-full xl:w-[60%]">
          <h1 className="text-[40px] xl:text-[48px] font-semibold text-center text-[#181818]">
            Have Any Projects In Mind? Feel Free to Contact Us
          </h1>
        </div>
        <div >
          <Form />
        </div>
      </div>
    </section>
  );
}
