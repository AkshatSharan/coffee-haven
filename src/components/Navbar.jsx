import React from 'react'
import { Logo } from '../imports'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Navbar = () => {
    const navItems = ['Blog', 'Store', 'Coffee Guide', 'About']

    useGSAP(() => {
        gsap.to(('.navbar-items'), {
            y:0,
            duration: 1,
            delay: 2.5,
            stagger: 0.2,
            ease: "back.in"
        })
    })

    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img src={Logo} alt="coffee" className='navbar-items' />
                <div className="flex flex-1 justify-center max-sm:hidden">
                    {navItems.map((item) => (
                        <div key={item} className="px-5 cursor-pointer text-gray-400 hover:text-white transition-all navbar-items">
                            {item}
                        </div>
                    ))}
                </div>
            </nav>
        </header>
    )
}
