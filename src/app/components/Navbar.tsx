'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, MoveRight } from 'lucide-react'

function Navbar() {
        
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
      {
        id: 1, path: '/', name: 'Home' 
      },
      {
        id: 2, path: '/About', name: 'About' 
      },
      {
        id: 3, path: '/Properties', name: 'Properties' 
      },
      {
        id: 4, path: '/Contact', name: 'Contact' 
      },
    ]

  return (



    <div className='main_navbar_container fixed top-0 left-0 right-0 z-50 w-full'>
      <header>
        <nav className="">

          {/* NavLogo*/}
          <div className={`main_navbar_nav flex justify-between items-center ${isOpen? 'flex ' : ''}} px-6 md:px-[2%] xl:py-[2%] py-6 md:py-[5%] bg-black/30 backdrop-blur-sm`}>
              <div className={`nav_logo ${isOpen ? 'absolute left-[9%] top-[6%] z-10 ': ''}`}>
                  <Image
                  src= {`${isOpen ? '/Main_Assets/Main_Logo_Black.svg' : '/Main_Assets/Main_Logo.svg'}`}
                  alt="logo"
                  width={100}
                  height={100}
                  className={`w-[93%] h-auto lg:w-[] mx-[40%] object-contain ${isOpen ? '': ''}`}
                  />
              </div>


              {/* Desktop Navigation List */}

              <div className="hidden px-[4%] md:flex  lg:flex xl:flex large_screen_nav_list items-center gap-[5%] mr-[5%]">
                {navLinks.map((link) => (
                  <div key={link.id} className="navLink_container font-mona text-white text-xl lg:text-2xl xl:text-xl">
                    <Link href= {link.path}>{link.name}</Link>
                  </div>
                ))}
              </div>



              {/* Mobile screen icon */}
              <div 
              onClick = {() => setIsOpen(!isOpen)}
              className=
              {`humburger_menu relative md:hidden lg:hidden xl:hidden  font-mona font-semibold rounded-full py-3 px-3 bg-white  flex  gap-2 text-black cursor-pointer hover:opacity-80 transition-opacity
              ${isOpen ? 'rounded-lg w-screen h-[93vh]': ''}`}>
                <div className={`humburger_menu_content flex ${isOpen ? 'absolute right-[5%]' : ''}`}>
                  <Menu className='humburger_menu_icon ' />
                  <p className='uppercase'>menu</p>
                </div>
              </div>

          </div>

          {/* Mobile Screen Navigation Items */}
        {isOpen && (
          
            <div className="mobile_navItems  absolute top-[15%] translate-x-[12%] w-[80%] ">
              {navLinks.map((link) => (
                <div className="items flex items-center justify-between text-2xl py-[5%] px-[3%] border-b text-neutral-500" key={link.id}>
                  <Link href={link.path} className=''>{link.name}</Link>
                  <MoveRight/>
                </div>
              ))}
            </div>

        )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
