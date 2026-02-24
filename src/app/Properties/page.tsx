"use client";

import React, { useState } from "react";
import Button from "../components/button";
import Image from "next/image";
import SectionTags from "../components/SectionTags";
import {
  CctvIcon,
  FenceIcon,
  WifiIcon,
  BusFrontIcon,
  CableIcon,
  ShowerHeadIcon,
  FootprintsIcon,
  WavesIcon,
} from "lucide-react";

const HERO_IMAGES = [
  "/PropertiesAssets/Img1.jpg",
  "/PropertiesAssets/Img2.jpg",
  "/PropertiesAssets/Img3.jpg",
  "/PropertiesAssets/Img4.jpg",
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
              <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl xl:mt-[15%] 2xl:mt-[15%] font-semibold tracking-tight">
                Grace City Prime Lands
              </h1>
              <div className="mt-6 md:mt-8 2xl:mt-10 xl:w-[40%] 2xl:w-[35%]">
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
                className={`relative w-20 h-20 md:w-24 md:h-24 xl:w-20 xl:h-20 2xl:w-22 2xl:h-22 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden shrink-0 transition-all duration-300 ${
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

      {/* Properties Description Section */}
      <div className="description-container">
        <div className="content mx-[5%] 2xl:mx-[10%]">
          <div className="section_TAG">
            <SectionTags
              name="Services"
              imageSrc="/Main_Assets/Tag_Icon_blue.svg"
              header="Grace City Prime Lands"
            />

            <div className="price_tag font-bricolage font-bold text-2xl xl:text-5xl text-[#4361EE] mt-[-13%]	xl:mt-[-12%]">
              $10,000
            </div>
          </div>

          <div className="main_desc_container lg:px-[5%] 2xl:px-[3%] lg:my-[5%] lg:border lg:border-neutral-200 lg:rounded-3xl lg:bg-neutral-50">
            <div className="description_content font-mona text-base my-[10%] xl:my-[4%] xl:text-xl">
              Grace City Prime Land is where life offers you the opportunity to
              blend nature seamlessly with the conveniences of modern living. It
              is a carefully planned 500-acre eco-friendly community located in
              the lush, serene enclave of Aburi, in the Eastern Region. This
              development offers fully serviced plots, designed to provide a
              sustainable and organic lifestyle, freeing you from the burdens of
              infrastructure development. Grace City Prime Land is more than
              just a residential area; it's a model community birthed from the
              high demand of our discerning clientele. Responding to countless
              requests, RKE has stepped in to create a space where essential
              infrastructure- including electricity, water, asphalt roads,
              sidewalks, a green park, efficient drainage, a secure gate post,
              parameter fence wall and ambient street lights – is already in
              place. This means you can focus on building your dream home and
              embracing a holistic way of life from day one, without the stress
              of coordinating these essential amenities yourself. Grace City
              Prime Land offers a unique opportunity to own fully serviced plots
              with convenient and affordable payment terms. The community is
              within reasonable proximity to major landmarks and amenities, and
              just a 40-minute drive from the airport, this is your chance to
              move into a community that takes away the burden of infrastructure
              worries. Embrace the ease of holistic and organic living at Grace
              City Prime Land, where your dream lifestyle becomes a reality.
            </div>

            <div className="lowerside flex flex-col lg:flex-row lg:w-full">
              <div className="amenities_container bg-[#191723] p-[7%] xl:p-[4%] lg:w-[50%] rounded-3xl flex flex-col text-center">
                <div className="header text-white font-bricolage font-semibold text-2xl pb-[4%] 2xl:text-4xl">
                  Community Amenities
                </div>

                <div className="amenities_list flex flex-col xl:grid xl:grid-cols-2 xl:grid-flow-col xl:grid-rows-4 gap-4 xl:gap-2 border border-[#4361EE] p-[5%] xl:p-[3%] rounded-2xl">
                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>

                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>

                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>


                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>

                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>


                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>


                   <div className="flex items-center gap-2">
                     <div className="amenity_item bg-[#4361EE] w-9 h-9 shrink-0 rounded-full flex items-center justify-center">
                       <CctvIcon className="text-white w-6 h-auto"/>
                     </div>
                     <div className="name font-mona text-white text-base">
                       Security Gate P ost
                     </div>
                   </div>
                </div>
              </div>
              <div className="maps_container bg-white lg:w-[50%] rounded-3xl p-[5%] shadow-lg flex flex-col gap-4">
                <h3 className="text-[#191723] font-bricolage font-semibold text-2xl">
                  Location Details
                </h3>
                <div className="relative w-full aspect-video max-h-[240px] rounded-2xl overflow-hidden bg-gray-100">
                  <iframe
                    title="Map - East Legon, Accra"
                    src="https://www.google.com/maps?q=East+Legon,Accra,Ghana&z=15&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[#191723] font-mona font-semibold text-lg">
                    East Legon-Accra
                  </p>
                  <Button
                    text="Download Brochure"
                    variants="primary"
                    href="#"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;
