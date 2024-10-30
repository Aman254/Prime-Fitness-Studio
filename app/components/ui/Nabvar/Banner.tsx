import React from "react";

export default function Banner() {
  return (
    <div
      className="text-center py-[3px] bg-gradient-to-r from-yellow-400 via-orange-400
    to-red-400 text-black underline transition-all duration-300 ease-in-out transform
    hover:scale-105 cursor-pointer hover:brightness-110"
    >
      <span className="py-2 text-sm font-medium">
        Join now to <strong>get 20% off</strong> on your{" "}
        <strong>First Month</strong>
      </span>
    </div>
  );
}
