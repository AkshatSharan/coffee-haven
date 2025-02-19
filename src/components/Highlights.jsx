import { useGSAP } from "@gsap/react"
import gsap from "gsap"

import Carousel from "./Carousel";

const Highlights = () => {
    useGSAP(() => {
        gsap.to('#title', { opacity: 1, y: 0 })
        gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    }, [])

    return (
        <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1 id="title" className="section-heading">What a beautiful experience.</h1>
                </div>
            </div>
        </section>
    )
}

export default Highlights