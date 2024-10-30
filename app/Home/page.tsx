import React from "react";
import Navbar from "@/app/components/ui/Nabvar/Navbar";
import { Hero } from "../components/HeroSection";
import { Card } from "../components/Card";

import { ImageGrid } from "../components/ImageGrid";
import { Footer } from "../components/Footer";
import { Pricing } from "../components/Pricing";

export default function home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
      <ImageGrid />
      <Pricing />
      <Footer />
    </div>
  );
}
