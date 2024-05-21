import HeadingDescription from "@/components/shared/HeadingDescription";
import Heading from "@/components/shared/heading";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
// import { title } from "process";

export default function Services() {
  const cardData = [
    {
      title: "Brand Consultancy",
      description: "We denounce with righteous indignation dislike beguile",
    },
    {
      title: "Branding",
      description: "At vero eos et accusamus et dignissim ducimbl ditiis",
    },
    {
      title: "Website Design and Development",
      description: "To take trivial example which ever undertakes laborious",
    },
    {
      title: "Video/Animation/3D",
      description: "We denounce with righteous indignation dislike beguile",
    },
    {
      title: "PR",
      description: " At vero eos et accusamus et dignissim ducimbl ditiis",
    },
    {
      title: "Digital Marketing",
      description: "To take trivial example which ever undertakes laborious",
    },
  ];

  return (
    <section className="container pt-20 md:pt-0">
      <div className="flex flex-col items-center justify-center gap-[50px] bg-red-300 ">
        <div className=" flex flex-col gap-5 items-center text-center xl:w-[50%]">
          <Heading innerText="Our Services" />
          <HeadingDescription descriptionText="We Provide Amazing Web Design Solutions" />
        </div>
        {/* Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 ">
          {cardData.map((card, index) => (
            <div key={index} className="space-y-16 p-8 bg-acent">
              <h5 className="font-bold text-[26px] capitalize">
               {card.title}
              </h5>
              <div className="space-y-10">
                <p className="font-normal  md:text-[20px]">
                  {card.description}
                </p>
                <Link
                  href={"/"}
                  className="text-secondary flex gap-3 capitalize"
                >
                  read more <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
