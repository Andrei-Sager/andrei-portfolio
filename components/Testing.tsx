"use client"

import { HeroContent as content } from "@/constants";

import Links from "./Links";
import EarthCanvas from "./canvas/Earth";

export default function CanvasTesting() {
    return(
        <div className="sectionPadding md:!px-0 flex flex-col md:flex-row items-center w-full h-[100vh] max-h-[900px] bg-neutral-900 overflow-hidden">
            <div className="w-full md:w-[50%] aspect-square">
                <EarthCanvas/>
            </div>
            <div className="flex flex-col w-full md:w-[500px] gap-4 text-center justify-center items-center md:text-left md:items-start text-white">
                <div  className='flex flex-row w-fit justify-center items-center gap-4 md:order-3'>
                    <Links/>
                </div>
                <h1 className="font-bold text-5xl md:order-1">{content.title}</h1>
                <p className="md:order-2 font-bold text-slate-300">{content.subtitle}</p>
            </div>
        </div>
    )
}