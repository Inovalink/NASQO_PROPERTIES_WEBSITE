import React from 'react'
import Image from 'next/image'

interface SectionTagsProps {
  name: string;
  imageSrc: string;
  className?: string
  header: string;
  subtext?: string
}

const SectionTags: React.FC<SectionTagsProps> = ({ name, imageSrc, className, header, subtext }) => {
  return (
    <div className="main_container flex  flex-col gap-[3%] my-[10%]">
      <div className="tag-text-container flex items-center gap-3">
        <Image
        src={imageSrc}
        alt={name}
        width={20}
        height={20}
        className='w-[3%] h-auto'
        />
        <p className='font-bricolage capitalize font-semibold'>{name}</p>

      </div>
      <div className="header font-bricolage text-2xl font-semibold tracking-tighter leading-7 py-[3%]">
        {header}
      </div>
      <div className="subtext font-mona text-neutral-500 leading-5">
        {subtext}
      </div>
    </div>
  )
}

export default SectionTags
