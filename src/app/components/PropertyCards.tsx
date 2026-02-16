import React from 'react'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

type CardSize = "small" | "large";

interface PropertyCardsProps {
    title?: string;
    subtext?: string;
    imageSrc: string;
    href: string;
    alt: string;
    cardSize?: CardSize;
    className?: string;
}

const sizeStyles: Record<CardSize, string> = {
    small: "h-[40vh] md:h-[35vh] xl:h-[40vh] 2xl:h-[50vh]",
    large: "h-[20vh]",
};

const PropertyCards: React.FC<PropertyCardsProps> = ({
    title,
    subtext,
    imageSrc,
    href,
    alt,
    cardSize = "small",
    className = ""
}) => {
  return (
    <div
      className={`image_container group relative overflow-hidden w-full ${sizeStyles[cardSize]} rounded-3xl my-[10%] md:my-[5%] ${className}`}
    >
        <Link href={href}>
            <Image
                src={imageSrc}
                alt={alt}
                fill
                className='w-full h-full object-cover'
            />

            <div className='overlay_section absolute inset-0 bg-black/50 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

            <div className="content_container absolute w-full h-full px-[10%] py-[13%] flex items-end flex-col justify-between">
                <div className="arrow_container bg-white p-[3%] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className='w-6 h-auto text-black' />
                </div>

                <div className="text_container flex flex-col items-left w-full left-[10%] gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="title font-bricolage text-2xl font-semibold text-white">{title}</p>
                    <p className="subtext font-mona text-white tracking-tight leading-5">{subtext}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default PropertyCards
