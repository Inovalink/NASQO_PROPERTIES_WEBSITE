import React from 'react'
import Button from './button'

function HeroComponent() {
  return (
    <div className='Main_Hero_Container relative w-screen h-screen bg-cover'
    style={{backgroundImage: `url(/HomeAssets/Img14.jpg)`}}
    >
      <div className="overlay_section inset-0 absolute bg-black/50 z-0" />

      <div className="relative z-10 flex flex-col items-left h-full text-white justify-center">
        <div className="hero-texts ml-[5%] md:ml-[5%]  2xl:ml-[10%] mt-0 xl:mt-[6%] 2xl:mt-[5%] font-bricolage">
          <p className='font-medium text-lg md:text-xl'>Palm Springs, CA</p>
          <div className="main_hero_caption text-6xl md:text-8xl xl:text-8xl tracking-tighter font-semibold mt-[10%] xl:mt-[3%]">
            <p className=''>Futuristic</p>
            <p>Haven</p>
          </div>
        </div>
        <div className="hero-buttons ml-[5%] 2xl:ml-[10%]  md:mx-[5%] mt-[10%] xl:mt-[1%] xl:w-[30%] 2xl:w-[30%] 2xl:mt-[1%] flex lg:flex-row flex-col gap-4 text-center">
          <Button text="Get in touch" variants="secondary" href="/properties"  />
          <Button text="View details" variants="outline" href="/properties"  />
        </div>
      </div>
     
    </div>
  )
}

export default HeroComponent