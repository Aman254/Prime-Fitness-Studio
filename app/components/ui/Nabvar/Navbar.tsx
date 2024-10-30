import Image from "next/image";
import React from "react";
import logo from "../assets/logo.jpeg";
import Link from "next/link";
import Banner from "./Banner";

export default function Navbar() {
  return (
    <>
      <Banner />
      <nav className="bg-black">
        <div className="flex items-center justify-between px-2 py-[12px] p-2">
          <div className="flex items-center justify-between">
            <Image
              src={logo}
              alt="Prime Fitness Studio"
              className="md:max-w-12 md:max-h-14 max-w-8 max-h-10"
            />
            <h3 className="px-4 md:text-xl text-[8px] font-bold">
              <Link href="/">Prime Fitness Studio</Link>
            </h3>
          </div>
          <div className="md:text-sm text-[9px] font-medium px-4">
            <Link
              href={"/"}
              className="hover:text-yellow-400 transition-all duration-300 ease-in-out transform hover:scale-105 px-2"
            >
              Home
            </Link>

            <Link
              href={"/workouts"}
              className="hover:text-yellow-400 transition-all px-2"
            >
              Workouts
            </Link>
            <Link
              href={"/"}
              className="hover:text-yellow-400 transition-all px-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
