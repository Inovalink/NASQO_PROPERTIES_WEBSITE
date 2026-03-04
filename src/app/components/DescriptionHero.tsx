"use client";

import React from "react";
import Image from "next/image";

export interface DescriptionHeroProps {
  /** Image source URL (e.g. /HomeAssets/Img31.jpg) */
  imageSrc: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Main title. Pass a string for one line, or an array of strings for multiple lines (e.g. ["Your Home,", "Simplified"]) */
  title: string | string[];
  /** Body/subtitle paragraph shown on the overlay */
  subtitle: string;
  /** Optional tagline shown at bottom-right (e.g. "Smart, Elegant") */
  tagline?: string;
}

function DescriptionHero({
  imageSrc,
  imageAlt = "Hero",
  title,
  subtitle,
  tagline,
}: DescriptionHeroProps) {
  const titleLines = Array.isArray(title) ? title : [title];

  return (
    <div className="about_description_hero">
      <div className="content">
        <div className="image_container relative overflow-hidden h-[50vh] z-0 rounded-3xl mb-[10%] xl:h-[90vh] xl:mt-[-20%]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
          />

          {/* Overlay text — visible only on lg, xl, 2xl */}
          <div className="absolute inset-0 z-10 hidden lg:flex flex-col justify-between p-6 lg:p-8 xl:p-10 2xl:p-18">
            <div className="flex flex-col gap-4 lg:gap-5 xl:gap-6 2xl:gap-55">
              <h2 className="font-bricolage font-bold text-white text-left leading-tight">
                {titleLines.map((line, i) => (
                  <span
                    key={i}
                    className="block lg:text-2xl xl:text-3xl 2xl:text-4xl"
                  >
                    {line}
                  </span>
                ))}
              </h2>
              <p className="font-mona text-white text-left max-w-4xl lg:text-sm xl:text-base 2xl:text-lg leading-relaxed opacity-95">
                {subtitle}
              </p>
            </div>
            {tagline && (
              <p className="font-bricolage font-bold text-white self-end lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {tagline}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DescriptionHero;
