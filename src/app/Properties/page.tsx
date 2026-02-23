"use client";

import React, { useState } from "react";
import Button from "../components/button";
import Image from "next/image";

const HERO_IMAGES = [
  "/HomeAssets/Img9.jpg",
  "/HomeAssets/Img10.jpg",
  "/HomeAssets/Img14.jpg",
  "/HomeAssets/Img15.jpg",
];

function PropertiesPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-screen h-screen bg-cover bg-center transition-all duration-500 ease-in-out">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
          style={{ backgroundImage: `url(${HERO_IMAGES[activeIndex]})` }}
        />
        <div className="overlay_section absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 flex flex-col h-[85vh] min-h-[500px]">
          {/* Hero content - title and CTA */}
          <div className="flex flex-1 flex-col justify-center text-white ">
            <div className="hero-texts ml-[5%] md:ml-[5%] 2xl:ml-[10%] font-bricolage">
              <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl 2xl:mt-[15%] font-semibold tracking-tight">
                Grace City Prime Lands
              </h1>
              <div className="mt-6 md:mt-8 2xl:mt-10 xl:w-[50%] 2xl:w-[35%]">
                <Button
                  text="Get in touch"
                  variants="secondary"
                  href="/Contact"
                />
              </div>
            </div>
          </div>

          {/* Image cards - bottom right */}
          <div className="relative z-10 flex justify-end gap-3 px-[5%] pb-8 md:pb-10 xl:pb-0 2xl:px-[10%] 2xl:pb-0">
            {HERO_IMAGES.map((src, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 2xl:w-22 2xl:h-22 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? "ring-1 ring-white ring-offset-2 ring-offset-transparent scale-105"
                    : "opacity-100"
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <Image
                  src={src}
                  alt={`Property view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, (max-width: 1280px) 112px, 128px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
