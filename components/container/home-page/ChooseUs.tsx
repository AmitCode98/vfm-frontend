import React from "react";
import Image from "next/image";
import ChooseUsLeftBgImg from "@/public/imgs/chooseUs-left-bg.jpg.png";
import Heading from "@/components/shared/heading";
import HeadingDescription from "@/components/shared/HeadingDescription";
// import { IoIosCheckmark } from "react-icons/io";
// import { IoCheckmarkCircle } from "react-icons/io5";
import { Check } from "lucide-react";

export default function ChooseUs() {
  return (
    <section className="container py-20 bg-lime-200">
      <div className="flex flex-col xl:flex-row justify-between items-center gap-[50px] xl:gap-[100px]">
        <Image src={ChooseUsLeftBgImg} alt="img" className="" />
        <div className="w-full xl:w-[50%] bg-purple-50 flex flex-col gap-[50px]">
          <div className="flex flex-col gap-6">
            <Heading innerText="why choose us" />
            <HeadingDescription descriptionText="We Provide Services In One Places" />
          </div>

          {/*choose us step  */}
          <div className="flex flex-col gap-5">
            <div className="flex gap-6 bg-red-200">
              <div className="flex flex-col gap-4  bg-red-30 w-fit justify-center items-center">
                <div className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center font-bold text-white ">
                  <Check />
                </div>
                <div className="h-20 w-[3px] bg-gradient-to-b from-secondary  to-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-semibold text-[22px]">
                  competitive rates
                </h3>
                <p className="text-base text-muted">
                  We denounce with righteous indignation and dislike beguiled
                  demoralized charms
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-red-200">
              <div className="flex flex-col gap-4  bg-red-30 w-fit justify-center items-center">
                <div className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center font-bold text-white ">
                  <Check />
                </div>
                <div className="h-20 w-[3px] bg-gradient-to-b from-secondary  to-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-semibold text-[22px]">
                  No Contracts Needed
                </h3>
                <p className="text-base text-muted">
                  To take trivial example, which eundertakes laborious physical
                  exercise except
                </p>
              </div>
            </div>
            <div className="flex gap-6 bg-red-200">
              <div className="flex flex-col gap-4  bg-red-30 w-fit justify-center items-center">
                <div className="w-9 h-9 bg-secondary rounded-full flex items-center justify-center font-bold text-white ">
                  <Check />
                </div>
                <div className="h-20 w-[3px] bg-transparent"></div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-semibold text-[22px]">
                  Powerful Terminal Lines
                </h3>
                <p className="text-base text-muted">
                  At vero eos et accusamus eto dignissimos duc blanditiis
                  praesentium volupta
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
