import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const aboutRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.set(aboutRef.current, { y: "100vh" });

        gsap.to(aboutRef.current, {
            y: "0vh",
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top bottom",
                end: "top top",
                scrub: true,
            },
        });
    }, []);

    return (
        <section ref={containerRef} className="relative w-full min-h-screen">
            <div 
                ref={aboutRef} 
                className="absolute top-0 left-0 w-full min-h-screen flex items-center justify-center bg-gray-900 text-white p-8"
            >
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                    <p className="text-lg md:text-xl text-gray-300">
                        Welcome to our world of premium coffee. We are passionate about bringing you the finest coffee blends,
                        sourced ethically from around the world. Our mission is to create a unique and unforgettable coffee experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
