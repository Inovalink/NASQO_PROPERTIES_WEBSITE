import React from 'react'
import Link from 'next/link'
import clsx from 'clsx';

interface ButtonProps {
    text: string;
    variants: "primary" | "secondary" | "outline";
    href: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, variants, href, className }) => {

    const baseStyles = "inline-block w-[60%] md:w-[40%] lg:w-[25%] xl:w-[14%] 2xl:w-[10%] rounded-full text-2xl md:text-3xl xl:text-xl font-bricolage py-3 md:py-[3%] xl:py-[1%] px-6 xl:px-[1%] transition-all duration-200 hover:opacity-90"

    const variantStyles: Record<"primary" | "secondary" | "outline", string> = {
        primary: 'bg-[#4361EE] text-white',
        secondary: 'bg-white text-black',
        outline: 'bg-transparent border-2 border-white text-white'
    }

    return (
        <Link 
            href={href} 
            className={clsx(baseStyles, variantStyles[variants], className)}
        >
            {text}
        </Link>
    )
}

export default Button;