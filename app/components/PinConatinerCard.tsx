import React from "react";
import { PinContainer } from "./ui/3d-pin";
import Image, { StaticImageData } from "next/image";

interface PinContainerProps {
  image: string | StaticImageData;
  title: string;
  description: string;
  href?: string | "/";
  hrefTitle?: string;
}

export const PinConatinerCard: React.FC<PinContainerProps> = ({
  image,
  title,
  description,
  href,
  hrefTitle,
}) => {
  return (
    <PinContainer title={hrefTitle} href={href}>
      <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] h-[20rem] bg-black">
        <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
          {title}
        </h3>
        <div className="text-base !m-0 !p-0 font-normal">
          <span className="text-slate-500 ">{description}</span>
        </div>
        <div className="flex flex-1 w-full rounded-lg mt-4 relative overflow-hidden bg-gradient-to-br from-yellow-500 via-white to-black">
          <Image
            src={image}
            alt="Image"
            className="absolute inset-0 object-cover opacity-65"
          />
        </div>
      </div>
    </PinContainer>
  );
};
