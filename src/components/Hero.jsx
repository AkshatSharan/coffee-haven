import React, { useRef } from 'react'
import { HeroCoffee } from '../imports'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
    const h1Ref = useRef();
    const heroCupRef = useRef();

    useGSAP(() => {
        gsap.to(('#hero-cup'), {
            y: 0,
            duration: 1.5,
            ease: "back.in",
            opacity: 1,
            ScrollTrigger: {
                trigger: "#hero-cup",

            }
        })
        gsap.from(('.subtitle'), {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: "power3.out",
            delay: 2,
            stagger: 0.3
        });
        gsap.from(gsap.utils.toArray(h1Ref.current.children), {
            y: 50,
            opacity: 0,
            duration: 2,
            stagger: 0.2,
            ease: "power3.out",
            delay: 0.6
        });
        gsap.to(heroCupRef.current, {
            rotation: 280,
            scrollTrigger: {
                trigger: heroCupRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    });

    return (
        <section className='w-full nav-height flex-center max-sm:flex-col max-sm:justify-center overflow-hidden font-regular'>
            <img ref={heroCupRef} src={HeroCoffee} alt="cup" id='hero-cup' className='translate-y-100 opacity-0 min-sm:h-[50vw] h-[75vw]' />

            <div className='flex flex-col gap-5 px-10 max-sm:p-5 justify-center max-sm:items-center'>
                <h1 ref={h1Ref} className='font-heavy max-sm:text-xl text-4xl max-sm:text-center'>
                    {["Brewed", "to", "Perfection,"].map((word, index) => (
                        <span key={index} className="inline-block">{word}&nbsp;</span>
                    ))}
                    <br />
                    {["Served", "with", "Passion."].map((word, index) => (
                        <span key={index} className="inline-block">{word}&nbsp;</span>
                    ))}
                </h1>
                <p className='subtitle max-sm:text-center max-sm:text-sm'>Discover the finest coffee, roasted with care and crafted for your perfect cup.</p>
                <button className='subtitle w-fit px-5 py-3 hover:text-black font-heavy rounded-full cursor-pointer border-1 hover:bg-amber-50'>Buy Now</button>
            </div>
        </section>
    )
}