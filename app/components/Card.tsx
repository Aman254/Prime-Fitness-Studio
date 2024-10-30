"use client";
import React from "react";
import core from "./ui/assets/core.jpeg";
import chest from "./ui/assets/chest.jpeg";
import back from "./ui/assets/back.jpeg";
import legs from "./ui/assets/legs.jpeg";
import biceps from "./ui/assets/biceps.jpeg";
import triceps from "./ui/assets/triceps.jpeg";

import { PinConatinerCard } from "./PinConatinerCard";

export function Card() {
  return (
    <div className="mb-10">
      <div className="flex justify-around items-center text-center mt-20">
        <span className="text-3xl font-semibold">Explore Workouts</span>
      </div>
      <div
        className="w-full flex flex-wrap items-center md:gap-6 gap-20 justify-center mt-20
        bg-black  bg-grid-yellow-400/[0.2] py-10
       relative rounded-2xl"
      >
        <div className="mb-6">
          <PinConatinerCard
            title="Chest"
            description="A chest is the best day."
            image={chest}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/chest"
          />
        </div>
        <div className="mb-6">
          <PinConatinerCard
            title="Back"
            description="A back is the best day."
            image={back}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/back"
          />
        </div>
        <div className="mb-6">
          <PinConatinerCard
            title="Legs"
            description="A leg is the best day."
            image={legs}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/legs"
          />
        </div>
        <div className="mb-6">
          <PinConatinerCard
            title="Biceps"
            description="A bicep is the best day."
            image={biceps}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/biceps"
          />
        </div>
        <div className="mb-6">
          <PinConatinerCard
            title="Triceps"
            description="A tricep is the best day."
            image={triceps}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/triceps"
          />
        </div>
        <div className="mb-6">
          <PinConatinerCard
            title="Core"
            description="A abs is the best day."
            image={core}
            href="http://192.168.1.34:3000/workouts"
            hrefTitle="/workouts/core"
          />
        </div>
      </div>
    </div>
  );
}
