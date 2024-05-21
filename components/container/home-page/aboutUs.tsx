import React from "react";
import CircleImg from "@/public/imgs/circle-img.png";
import AboutUsBgImg from "@/public/imgs/aboutUs-bg-img.png";
import { ArrowUpRight } from "lucide-react";

import SingleArrowIcon from "@/public/icons/single-arrow.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/heading";
import HeadingDescription from "@/components/shared/HeadingDescription";

export default function aboutUs() {
  return (
    <section className=" bg-blue-400">
      <div className=" grid md:grid-cols-2 mt-20">
        <div className="relative">
          <Image src={AboutUsBgImg} alt="img" priority className="" />
          <Image
            src={CircleImg}
            alt="img"
            priority
            className="absolute top-0 left-10 rotate"
          />
        </div>
        <div className="flex flex-col gap-14 2xl:w-[75%] bg-red-500">
          <div className="space-y-6 container ">
            <Heading innerText={"about us"} />

            <HeadingDescription descriptionText="Our Main Goal to Satisfied local & Global Clients" />
          </div>
          <div className="space-y-6 pl-[10%]">
            <p className=" text-[16px] xl:text-[18px]">
              unde omnis iste natus error sit voluptat emey accusantium
              doloremque laudantium totam aperiam eaque quabillo inventore
              veritatisey quasi architecto beatae dictasunt Sed ut unde omnis
              iste natus error sit voluptat emey accusantium doloremque
              laudantium totam aperiam eaque quabillo inventore veritatisey
              quasi architecto beatae dictasunt
            </p>
            <Button className="">
              learn more <ArrowUpRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
