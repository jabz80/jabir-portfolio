"use client"

import React, { useState } from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from "@/actions/sendEmail"
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } =  useSectionInView('Contact');
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    setIsLoading(true); // Set loading to true

    const formData = new FormData(event.target);
    const { data, error } = await sendEmail(formData);

    if (error) {
      toast.error(error);
      setIsLoading(false); // Set loading to false in case of error
      return;
    }

    toast.success("Email sent successfully");
    setIsLoading(false); // Set loading to false after sending email
  };



  return (
  <motion.section id="contact" ref={ref} className='mb-20 sm:mb-28 w-[min(100%,38rem)]text-center' initial={{
    opacity: 0,
  }}
  whileInView={{
    opacity: 1,
  }}
  transition={{
    duration: 1,
  }}
  viewport={{
    once: true,
  }}
  >
    <SectionHeading>Contact Me</SectionHeading>
    <p className="text-gray-700 -mt-5">Please contact me directly at <a className='underline' href='mailto:jabzhtc@gmail.com'>jabzhtc@gmail.com</a> or through this form.</p>
    <form 
      className="mt-10 flex flex-col" 
      onSubmit={handleSubmit}
      >
        <input className="h-14 px-4 rounded-lg borderBlack" name="senderEmail" type="email" placeholder='Your email' required maxLength={500}/>
        <textarea className='h-52 my-3 rounded borderBlack p-4'name="message" placeholder='Your message' required maxLength={5000}/>
        <button type='submit' className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105'>
          {isLoading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane  className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>}
          {" "} Submit
        </button>
    </form>
  </motion.section>
  )
}
