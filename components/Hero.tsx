"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { motion, useInView } from "framer-motion";
import { TiDownload } from "react-icons/ti";
import { SiMinutemailer } from "react-icons/si";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    let profileCardEl = document.querySelectorAll<HTMLElement>(".heroCard");

    profileCardEl.forEach((heroCard) => {
      heroCard.addEventListener("mouseover", function () {
        profileCardEl.forEach((eachCard) => {
          eachCard.classList.remove("active");
        });
        heroCard.classList.add("active");
      });
    });
  }, []);

  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsDone(true);
    }, 2000);
  }),
    [];

  return (
    <div id="hero" className="hero sectionPadding  relative overflow-hidden">
      <div className="w-[80%] md:w-[30%] aspect-square flex items-center justify-center rounded-full overflow-hidden">
        <Image
          src="/hero.jpg"
          width={1000}
          height={1000}
          alt="A picture of Andrei Sager"
        />
      </div>

      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "translateX(0px)" : "translateX(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
        }}
        className="flex flex-col w-[90%] md:w-[50%] gap-4 text-center justify-center items-center lg:items-start shrink-0"
      >
        <h1 className="sectionOverline !text-center lg:!text-left">
          Hi My Name is Andrei, I am a
        </h1>
        <h1 className="sectionHeading !text-center lg:!text-left">
          Software Developer
        </h1>
        <p className="sectionLeading !text-center lg:!text-left">
          The value I can bring Embracing the fusion of artistry and code, I
          shape digital experiences as a full-stack software developer. Building
          experiences with a twist.
        </p>
        <div className="flex flex-col w-fit justify-center items-center gap-4 md:order-3"></div>
        <div className="flex w-full gap-4">
          <Link
            href="#contact"
            className="navbarCta flex flex-row !bg-transparent !text-slate-300 border border-slate-300 hover:!text-secondary-red hover:border-secondary-red !w-fit"
          >
            <TiDownload size={30} />
            <p>Download CV</p>
          </Link>
          <Link href="#contact" className="navbarCta flex flex-row !w-fit">
            <SiMinutemailer size={30} />
            Contact
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
