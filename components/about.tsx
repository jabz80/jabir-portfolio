"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';



export default function About() {
  const { ref } =  useSectionInView('About');



  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About Me</SectionHeading>

        <p className='mb-3'>
        After working in the engineering industry for the last{" "}
        <span className="font-medium">5 years</span>, I decided to <span className="font-medium">learn a new skill</span> and pursue a job in tech due to my
        passion for <span className="font-medium">programming and technology</span>. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect and always learning a new skill. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          HTML, CSS, Javascript, React, Node.js, PostgreSQL and MongoDB
        </span>
        . I am also familiar with Bootstrap and Tailwind CSS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.

        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy being creative and spend plenty of time renovating and DIY. I enjoy watching movies and retro gaming. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">3d design</span> using <span className="font-medium">ThreeJS</span>.
        </p>
    </motion.section>
  )
}