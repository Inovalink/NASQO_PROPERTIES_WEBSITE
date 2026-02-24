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

const DISCOVER_PROPERTIES = [
  { id: "1", name: "Rico Lands", imageSrc: "/PropertiesAssets/Img1.jpg", price: "$78,000" },
  { id: "2", name: "Young Road Lands", imageSrc: "/PropertiesAssets/Img2.jpg", price: "$78,000" },
  { id: "3", name: "Crime City Lands", imageSrc: "/PropertiesAssets/Img3.jpg", price: "$78,000" },
  { id: "4", name: "Good Grain Lands", imageSrc: "/PropertiesAssets/Img4.jpg", price: "$78,000" },
];

const DISCOVER_DESCRIPTION =
  "Royal Kingdom Estate ensures efficient land acquisition processes, minimizing bureaucratic obstacles to foster trust and transparency with our clients, while providing expert guidance, secure documentation, and reliable support that guarantees long-term property value and client satisfaction.";

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

          <div className="main_desc_container lg:px-[5%] 2xl:px-[3%] 2xl:text-neutral-500 lg:my-[5%] lg:border lg:border-neutral-200 lg:rounded-3xl lg:bg-neutral-50">
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

            <div className="lowerside flex flex-col gap-4 lg:flex-row lg:w-full 2xl:gap-12 xl:mt-[10%] xl:mb-[54]">
              <div className="amenities_container bg-[#191723] p-[7%] xl:p-[4%] lg:w-[50%] rounded-3xl flex flex-col text-center">
                <div className="header text-white font-bricolage font-semibold text-2xl pb-[4%] 2xl:text-4xl">
                  Community Amenities
                </div>

                <div className="amenities_list flex flex-col xl:grid xl:grid-cols-2 xl:grid-flow-col xl:grid-rows-5 gap-4 xl:gap-2 border border-[#4361EE] p-[5%] xl:p-[3%] rounded-2xl">
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
              <div className="maps_container bg-white lg:w-[50%] rounded-3xl p-[5%] xl:p-[2.5%] 2xl:p-[2%] shadow-lg flex flex-col gap-3 xl:gap-4">
                <h3 className="text-[#191723] font-bricolage font-semibold text-xl sm:text-2xl">
                  Location Details
                </h3>
                <div className="relative w-full rounded-2xl overflow-hidden bg-gray-100 h-[220px] min-h-[200px] sm:h-[260px] sm:min-h-[240px] xl:h-[300px] 2xl:h-[340px]">
                  <iframe
                    title="Map - East Legon, Accra"
                    src="https://www.google.com/maps?q=East+Legon,Accra,Ghana&z=15&output=embed"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="flex flex-col items-center gap-3 xl:flex-row xl:justify-between xl:items-center xl:gap-4">
                  <p className="text-[#191723] font-mona font-semibold text-base sm:text-lg text-center xl:text-left">
                    East Legon-Accra
                  </p>
                  <div className="w-full flex justify-center xl:w-auto xl:flex-initial">
                    <Button
                      text="Download Brochure"
                      variants="primary"
                      href="#"
                      className="whitespace-nowrap w-auto min-w-[180px] sm:min-w-[200px] xl:min-w-[220px] 2xl:min-w-[240px] xl:px-8 2xl:px-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Discover more Properties */}
      <section className="mx-[5%] 2xl:mx-[10%] mt-16 xl:mt-24 2xl:mt-28 pb-16 xl:pb-24">
        <div className="max-w-[1600px]">
          <SectionTags
            name="Service"
            imageSrc="/Main_Assets/Tag_Icon_blue.svg"
            header="Discover more Properties like this"
            subtext="We began with a vision to help you discover premium properties that perfectly match your lifestyle and aspirations."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mt-8 xl:mt-10">
            {DISCOVER_PROPERTIES.map((property) => (
              <div
                key={property.id}
                className="services_card_container h-full border border-neutral-300 rounded-3xl"
              >
                <div className="image_container relative overflow-hidden w-full h-[30vh] md:h-[20vh] xl:h-[30vh] 2xl:h-[30vh] z-0 rounded-3xl flex items-center justify-center">
                  <Image
                    src={property.imageSrc}
                    alt={property.name}
                    fill
                    className="w-full h-full object-cover z-10"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="overlay inset-0 absolute bg-black/50 z-10" />
                  <div className="title absolute bottom-[10%] capitalize font-bricolage font-semibold text-white text-3xl z-20">
                    {property.name}
                  </div>
                </div>
                <div className="subtext_button_container p-[6%]">
                  <div className="subtext font-mona text-base leading-5 line-clamp-3">
                    {DISCOVER_DESCRIPTION}
                  </div>
                  <div className="button_container mt-[6%] flex flex-wrap items-center justify-between gap-3">
                    <span className="font-bricolage font-bold text-[#191723] text-lg xl:text-xl">
                      {property.price}
                    </span>
                    <Button
                      text="Get in touch"
                      variants="primary"
                      href="/Contact"
                      className="min-w-[180px] w-auto shrink-0"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PropertiesPage;
