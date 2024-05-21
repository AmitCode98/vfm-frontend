import React from "react";
import SingleArrowIcon from "@/public/icons/single-arrow.svg";
import Image from "next/image";

interface HeadingProps {
  innerText: string;
}

const Heading: React.FC<HeadingProps> = ({ innerText }) => {
  return (
    <div className="flex items-center gap-4">
      <Image src={SingleArrowIcon} alt="img" priority />
      <h1 className="text-lg font-medium text-secondary capitalize ">
        {innerText}
      </h1>
    </div>
  );
}

export default Heading;