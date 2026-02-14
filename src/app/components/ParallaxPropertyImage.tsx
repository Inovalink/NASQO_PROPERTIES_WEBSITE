"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useLenis } from "./providers/LenisProvider";

const PARALLAX_SPEED = 0.15;

interface ParallaxPropertyImageProps {
  imageSrc: string;
  alt: string;
}

const ParallaxPropertyImage: React.FC<ParallaxPropertyImageProps> = ({
  imageSrc,
  alt,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerCenter = rect.top + rect.height / 2;
      const viewportCenter = window.innerHeight / 2;
      const distance = viewportCenter - containerCenter;
      setOffsetY(distance * PARALLAX_SPEED);
    };

    lenis.on("scroll", handleScroll);
    handleScroll();

    return () => {
      lenis.off("scroll", handleScroll);
    };
  }, [lenis]);

  return (
    <div
      ref={containerRef}
      className="image_container relative overflow-hidden w-full h-[40vh] xl:h-[88vh] 2xl:h-[86vh] rounded-3xl"
    >
      <div
        className="absolute top-[-10%] left-0 right-0 bottom-[-10%]"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Image
          src={imageSrc}
          alt={alt}
          fill
          className="object-cover z-0"
        />
      </div>
    </div>
  );
};

export default ParallaxPropertyImage;
