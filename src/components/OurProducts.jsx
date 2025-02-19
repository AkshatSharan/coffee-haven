import React, { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Americano, Cappuccino, Espresso } from "../imports";

gsap.registerPlugin(ScrollTrigger);

const OurProducts = () => {
    const products = [
        {
            id: 2,
            name: "Barista Special Cappuccino",
            description: "A deep, chocolatey blend perfect for lattes and cappuccinos.",
            image: Cappuccino,
        },
        {
            id: 1,
            name: "Signature Espresso",
            description: "A light roast with floral and citrus notes.",
            image: Espresso,
        },
        {
            id: 3,
            name: "Americano",
            description: "A balanced mix of beans for a smooth, everyday coffee.",
            image: Americano,
        },
    ];

    const containerRef = useRef(null);
    const horizontalRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(horizontalRef.current, {
            x: () => -(horizontalRef.current.scrollWidth - window.innerWidth),
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${horizontalRef.current.scrollWidth - window.innerWidth}`,
                pin: true,
                scrub: 1,
                anticipatePin: 1,
            },
        });
    }, []);



    return (
        <section ref={containerRef} className="w-full h-screen flex overflow-hidden flex-col">
            <h1 className="m-15 mt-5 text-3xl font-heavy">Our products.</h1>
            <div ref={horizontalRef} className="flex w-[250vw] md:w-[200vw] lg:w-[150vw] h-full items-center space-x-16 px-8">
                {products.map((product) => (
                    <div key={product.id} className="flex-shrink-0 w-screen flex flex-col items-center justify-center text-center px-4">
                        <img src={product.image} alt={product.name} className="w-[60%] md:w-[50%] lg:w-[40%] object-contain rounded-xl" />
                        <h2 className="text-3xl md:text-4xl font-bold mt-6">{product.name}</h2>
                        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-md">{product.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurProducts;
