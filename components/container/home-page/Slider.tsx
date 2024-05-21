import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import StarImage from "@/public/imgs/star-img.png";

export default function Slider() {
  return (
    <div className="mt-10">
      <div className=" py-10 xl:py-20 bg-secondary text-[40px] xl:text-[65px] font-light capitalize">
        <Marquee autoFill className="">
          <Image src={StarImage} priority alt="star image" className="mx-10"/>
          <div className="">Web Design & Development</div>
        </Marquee>
      </div>
    </div>
  );
}
