import React from "react";

import { Spotlight } from "./ui/Spotlight";
import Image from "next/image";
import gymImg from "./ui/assets/gym.jpg";
import { FlipWords } from "./ui/flip-words";

const words = ["Strength", "Potential", "Results", "Discipline", "Growth"];

export function Hero() {
  return (
    <div>
      <div
        className="h-[40rem] w-full  flex md:items-center md:justify-center
      bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden"
      >
        <Image
          src={gymImg}
          alt="FGym"
          fill
          className="absoulte z-0 opacity-30 hero-image-cover"
        />

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="yellow"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-white bg-opacity-50">
            Where Power
            <br /> Meets {<FlipWords words={words} />}
          </h1>

          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            At Prime Fitness Studio, every drop of sweat leads to success. With
            expert trainers and a supportive community, we empower you to push
            your limits and achieve your fitness goals.
          </p>
        </div>
      </div>
    </div>
  );
}
