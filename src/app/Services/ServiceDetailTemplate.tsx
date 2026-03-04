"use client";

import React, { useState, useMemo, useEffect } from "react";
import Button from "../components/button";
import Image from "next/image";
import SectionTags from "../components/SectionTags";
import Faq from "../components/Faq";
import { faqData, servicesPageData } from "../Data/AppData";
import type { ServicesPageItem } from "../Types/types";

const DEFAULT_HERO_IMAGES = [
  "/PropertiesAssets/Img1.jpg",
  "/PropertiesAssets/Img2.jpg",
  "/PropertiesAssets/Img3.jpg",
  "/PropertiesAssets/Img4.jpg",
  "/PropertiesAssets/Img5.jpg",
  "/PropertiesAssets/Img6.jpg",
];

const DISCOVER_DESCRIPTION =
  "NASQO Properties offers a full suite of professional services to support your real estate and construction needs. From land acquisition to interior design, we bring expertise, transparency, and quality to every project.";

interface ServiceDetailTemplateProps {
  slug: string;
}

export default function ServiceDetailTemplate({
  slug,
}: ServiceDetailTemplateProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const service = useMemo(
    () => servicesPageData.find((s) => s.slug === slug),
    [slug],
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-20">
        <p className="text-neutral-600 text-lg">Service not found: {slug}</p>
      </div>
    );
  }

  const heroImages = service.heroImages?.length
    ? service.heroImages
    : service.imageSrc
      ? [service.imageSrc]
      : DEFAULT_HERO_IMAGES;
  const displayTitle = service.heroTitle ?? "Service";
  const otherServices = servicesPageData.filter((s) => s.slug !== service.slug);

  // Automatically rotate through hero images every few seconds,
  // while still allowing users to override via the thumbnail buttons.
  useEffect(() => {
    if (!heroImages.length) return;

    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [heroImages.length]);

  return (
    <div>
      {/* Hero Section */}
      {/* Layer multiple hero images and fade them in/out via opacity for a smooth crossfade animation. */}
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Each image covers the hero; only the one matching activeIndex is fully opaque. */}
        {heroImages.map((src, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: activeIndex === index ? 1 : 0,
              zIndex: 0,
            }}
            aria-hidden={activeIndex !== index}
          />
        ))}
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-black/35"
          aria-hidden
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/90"
          aria-hidden
        />

        <div className="relative z-10 flex flex-col h-[85vh] min-h-[500px]">
          <div className="flex flex-1 flex-col justify-center text-white ">
            <div className="hero-texts ml-[5%] md:ml-[5%] 2xl:ml-[10%] font-bricolage">
              <h1 className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl xl:mt-[15%] 2xl:mt-[15%] font-semibold tracking-tight">
                {displayTitle}
              </h1>
              <div className="mt-6 md:mt-8 2xl:mt-10 xl:w-[40%] 2xl:w-[35%]">
                <Button
                  text="Get in touch"
                  variants="secondary"
                  href={service.ctoHref ?? "/Contact"}
                />
              </div>
            </div>
          </div>

          {/* Thumbnail controls: let users manually pick an image, with a subtle ring and scale animation on the active one. */}
          <div className="relative z-10 flex justify-end gap-3 px-[5%] pb-8 md:pb-10 xl:pb-0 2xl:px-[10%] 2xl:pb-0">
            {heroImages.map((src, index) => (
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
                  alt={`${displayTitle} view ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 96px, (max-width: 1280px) 112px, 128px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Description Section */}
      <div className="description-container w-full overflow-x-hidden">
        <div className="content mx-4 sm:mx-[5%] lg:mx-[6%] 2xl:mx-[10%] max-w-full">
          <div className="section_TAG w-full sm:w-[90%] 2xl:w-[40%]">
            <SectionTags
              name={service.SectionTag ?? "Services"}
              imageSrc="/Main_Assets/Tag_Icon_blue.svg"
              header={displayTitle}
            />
          </div>

          <div className="main_desc_container px-4 py-6 sm:px-6 sm:py-8 lg:px-[5%] lg:py-[5%] 2xl:px-[3%] 2xl:py-0 2xl:text-neutral-500 lg:my-[5%] lg:border-2 lg:border-neutral-300 lg:rounded-4xl lg:-50">
            <div className="description_content font-mona text-sm sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl 2xl:font-semibold 2xl:leading-8 2xl:tracking-tight my-6 sm:my-8 lg:my-[6%] xl:my-[4%] leading-relaxed">
              {service.description}
            </div>

            {/* {service.additionalInfo && (
              <div className="mt-6 sm:mt-8 lg:mt-10 xl:mt-12 pt-6 sm:pt-8 xl:pt-10 border-t border-neutral-200">
                <p className="font-mona text-sm sm:text-base xl:text-lg text-neutral-600 leading-relaxed bg-neutral-100/80 rounded-2xl p-4 sm:p-5 xl:p-6 border border-neutral-200/80">
                  {service.additionalInfo}
                </p>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Discover more Services */}
      <section className="mx-auto mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-8 pb-10 sm:pb-12 md:pb-16 xl:pb-24 w-[95%] sm:w-[90%] max-w-full 2xl:w-[80%] min-w-0 overflow-x-hidden box-border">
        <div className="w-full min-w-0">
          <div className="section_tag_container w-full 2xl:w-[50%]">
            <SectionTags
              name="Services"
              imageSrc="/Main_Assets/Tag_Icon_blue.svg"
              header="Discover more Services"
              subtext="From land acquisition to interior design, we offer a complete suite of professional services to support your real estate and construction needs."
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 mt-6 sm:mt-8 xl:mt-10 w-full min-w-0">
            {otherServices.map((s) => {
              const name = s.heroTitle ?? "Service";
              const img =
                s.heroImages?.[0] ?? s.imageSrc ?? "/PropertiesAssets/Img1.jpg";
              return (
                <div
                  key={s.id}
                  className="services_card_container h-full border border-neutral-300 rounded-2xl sm:rounded-3xl w-full min-w-0 overflow-hidden"
                >
                  <div className="image_container relative overflow-hidden w-full h-[28vh] min-h-[180px] sm:h-[26vh] md:h-[28vh] xl:h-[36vh] 2xl:h-[42vh] z-0 flex items-center justify-center">
                    <Image
                      src={img}
                      alt={name}
                      fill
                      className="w-full h-full object-cover z-10"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="overlay inset-0 absolute bg-black/50 z-10" />
                    <div className="title absolute bottom-[10%] left-[5%] right-[5%] capitalize font-bricolage font-semibold text-white text-xl sm:text-2xl lg:text-3xl z-20">
                      {name}
                    </div>
                  </div>
                  <div className="subtext_button_container p-4 sm:p-[5%] lg:p-[6%]">
                    <div className="subtext font-mona text-sm sm:text-base leading-5 line-clamp-3">
                      {DISCOVER_DESCRIPTION}
                    </div>
                    <div className="button_container mt-4 sm:mt-[6%]">
                      <Button
                        text="View details"
                        variants="primary"
                        href={`/Services/${s.slug}`}
                        className="min-w-[140px] sm:min-w-[180px] w-auto shrink-0"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="faq_section_container mx-4 sm:mx-[5%] 2xl:mx-[10%] py-8 sm:py-[8%] lg:py-[10%] xl:py-[8%] pb-12 sm:pb-16 xl:pb-24">
        <Faq
          faqs={faqData}
          imageSrc={heroImages[0] ?? "/PropertiesAssets/Img1.jpg"}
        />
      </div>
    </div>
  );
}
