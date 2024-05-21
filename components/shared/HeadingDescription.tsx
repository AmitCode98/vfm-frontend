import React from "react";

interface HeadingDescriptionProps {
  descriptionText: string;
}

const HeadingDescription: React.FC<HeadingDescriptionProps> = ({
  descriptionText,
}) => {
  return <h2 className=" font-semibold text-[40px] xl:text-[48px]  bg-blue-200">{descriptionText}</h2>;
};

export default HeadingDescription;
