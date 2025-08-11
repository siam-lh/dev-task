import React from 'react'
import ReactIcon from './svg/ReactIcon'
import HamburgerIcon from './svg/HamburgerIcon'

const Navbar = () => {
  return (
    <nav className='px-[29px] xl:px-[10.8rem] 2xl:px-[18.8rem] pt-[46px] md:pt-[2.5rem] flex flex-row items-center justify-between'>
        <div className='w-[3.5rem] md:w-[7.30rem] h-[1rem] md:h-[2rem]  flex-shrink-0  overflow-hidden'>
            <ReactIcon/>
        </div>
        <div>
            <ul className='hidden lg:flex  flex-row items-center justify-space-between text-[#0A142F] text-[1.25rem]  gap-[2.5rem]'>
                <li>About us</li>
                <li>What We do</li>
                <li>Our work</li>
                <li>Blog</li>
                <li>Say hi</li>
            </ul>
        </div>
        <div className='w-[1.5rem] md:w-[1.67rem] h-[1.5rem]  flex-shrink-0  overflow-hidden'><HamburgerIcon/></div>
    </nav>
  )
}

export default Navbar