import React from 'react'
import HeroComponent from './components/HeroComponent'
import Metrics from './components/Metrics'
import SectionTags from './components/SectionTags'
import { coreValuesData } from './Data/AppData'
import { coreValueProps } from './Types/types'
import { Eye, Flag } from 'lucide-react'
import Image from 'next/image'

function HomePage() {
  const coreValues: coreValueProps[] = coreValuesData;
  return (
    <div>
      <HeroComponent />
    {/* About Section */}

    <div className="about_section_container">
    <div className="about_section_main_content mx-[5%] mt-[10%] flex flex-col md:flex-row md:gap-[6%] 2xl:mx-[10%] lg:gap-[2%] xl:items-center xl:gap-0">


            {/* Left section */}
            <div className="left_section md:flex md:flex-col md:justify-between 2xl:w-1/2 ">
                <SectionTags
                name="about us"
                imageSrc="/Main_Assets/Tag_Icon_blue.svg"
                header="Assisting individuals in locating the appropriate real estate." 
                subtext="Donec porttitor euismod dignissim. Nullam a lacinia ipsum, nec dignissim purus. Nulla convallis ipsum molestie nibh malesuada, ac malesuada leo volutpat."
                
                />
                <div className="core_values">
                    {coreValues.map((coreValue) => {
                        const Icon = coreValue.icon;
                        return (
                            <div className="core_value_card flex items-center md:w-[80%] lg:w-[80%] xl:w-[65%] gap-[4%] px-[4%] py-[4%] bg-white rounded-3xl shadow-lg my-[4%]">
                                <div className="core_value_icon">
                                    <Icon className='w-8 h-auto text-[#4361EE]' />
                                </div>
                                <div className="card_title">
                                    <p className='font-bricolage tracking-tighter font-semibold text-lg lg:text-2xl xl:text-xl text-[#4361EE] '>{coreValue.title}</p>
                                    <p className='font-mona tracking-tight text-neutral-500 lg:text-lg xl:text-sm'>{coreValue.subtext}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Right section */}

            <div className="right_section md:flex md:flex-col md:justify-between   xl:flex xl:items-end  2xl:w-1/2 2xl:mt-[7%]
">
                <div className="section_container border border-neutral-200 py-[3%] px-[3%] rounded-4xl xl:w-[85%] mt-[20%] xl:mt-0 2xl:mb-[4%]">
                    <div className="banner_container relative overflow-hidden rounded-3xl w-full xl:w-full h-[30vh] md:h-[20vh] xl:h-[30vh] 2xl:h-[30vh]">
                        <Image
                        src="/HomeAssets/Img15.jpg"
                        alt="banner"
                        fill 
                        priority
                        className='w-full h-full object-cover'
                        />
                    </div>
                    <div className="vision_mission_container flex flex-col xl:flex-row xl:gap-[4%] xl:w-full">
                        <div className="vision_statement bg-[#f3f3f3e2] mt-[4%] py-[7%] px-[7%] rounded-3xl ">
                            <Eye className='w-5 h-auto text-[#4361EE]' />
                            <p className='font-bricolage tracking-tigher font-semibold'>Our vision</p>
                            <p className='text-sm md:text-xs text-neutral-500 font-mona'>A trusted real estate brand leading the market, simplifying property ownership for everyone, while building strong and thriving communities</p>
                        </div>
                        <div className="mission_statement bg-[#f3f3f3e2] mt-[4%] xl:mt-[4%] py-[7%] px-[7%] rounded-3xl">
                            <Flag className='w-5 h-auto text-[#4361EE]' />
                            <p className='font-bricolage tracking-tigher font-semibold'>Our Mission</p>
                            <p className='text-sm md:text-xs text-neutral-500 font-mona'>Reliable property solutions delivered with professionalism, connecting clients with the right opportunities, and maintaining integrity in every transaction.</p>
                        </div>
                    </div>
                </div>

                <div className="metrics_container mb-[6%] gap-4 grid grid-cols-2 xl:w-[85%] ">
                    <Metrics
                    title="120+"
                    subtext="Projects Completed"
                    />
                    <Metrics
                    title="250+"
                    subtext="Happy Clients"
                    />
                    <Metrics
                    title="$10M+"
                    subtext="Project Value"
                    />
                    <Metrics
                    title="90%"
                    subtext="Properties Sold"
                    />
                </div>
            </div>



           
        </div>
    </div>


    </div>
  )
}

export default HomePage
