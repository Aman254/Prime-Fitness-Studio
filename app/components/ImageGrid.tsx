import Image from "next/image";
import React from "react";
import img1 from "./ui/assets/gymImages/gymImg1.jpg";
import img2 from "./ui/assets/gymImages/gymImg2.jpg";
import img3 from "./ui/assets/gymImages/gymImg3.jpg";
import img4 from "./ui/assets/gymImages/gymImg4.jpg";
import img5 from "./ui/assets/gymImages/gymImg5.jpg";
import img6 from "./ui/assets/gymImages/gymImg6.jpg";

export const ImageGrid = () => {
  return (
    <div className="container mx-auto px-5 py-2 mb-10 flex items-center bg-black">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={img1}
            />
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={img2}
            />
          </div>
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src={img3}
            />
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={img4}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={img5}
            />
          </div>
          <div className="w-1/2 p-1 md:p-2">
            <Image
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={img6}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
