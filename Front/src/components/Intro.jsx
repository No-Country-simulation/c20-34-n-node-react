import React from 'react'
import { Link } from 'wouter';
import introVid from '../assets/Video/Intro.mp4'
import Logo from "../assets/Logo.png"

export const Intro = () => {
  return (
    <div className="relative w-dvw h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={introVid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id='introUI' className="relative z-9 w-full h-full flex flex-col items-center justify-center">
        <img src={Logo} className='mb-8' alt='Logo' />
        <h1 className="text-white text-3xl md:text-3xl font-bold mb-4">PROPTECH</h1>
        <Link to='/building' className=''>
          <button className="bg-white text-black px-4 py-2 rounded-lg">COMENZAR</button>
        </Link>
      </div>
    </div>
  )
}

export default Intro;