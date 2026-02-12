import React from 'react'
import { ArrowUpRight } from 'lucide-react';


interface metricsProps {
    title: string;
    subtext: string;
}

const Metrics: React.FC<metricsProps> = ({ title, subtext}) => {
    return (
        <div className='relative metrics_Card border border-neutral-200 py-[8%] px-[8%] rounded-2xl w-full flex flex-col '>
            <div className="absolute top-0 right-0 m-[5%] icon rounded-full border border-neutral-200  w-[15%] h-[30%] p-[2%] flex items-center">
                <ArrowUpRight className='w-5 h-auto text-[#4361EE]' />
            </div>
            <div className="text-value leading-2">
                <p className='font-bricolage tracking-tigher font-semibold text-4xl'>{title}</p>
                <p className='font-mona tracking-tight text-neutral-500 text-xs'>{subtext}</p>
            </div>
        </div>
    )
}

export default Metrics
