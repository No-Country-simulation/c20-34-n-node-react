import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import img01 from "../assets/Video/Spin 360/0.jpg";
import img02 from "../assets/Video/Spin 360/120.jpg";
import img03 from "../assets/Video/Spin 360/240.jpg";
import vid01 from "../assets/Video/Spin 360/0-120.mp4";
import vid02 from "../assets/Video/Spin 360/120-240.mp4";
import vid03 from "../assets/Video/Spin 360/240-360.mp4";
import vid04 from "../assets/Video/Spin 360/120-0.mp4";
import vid05 from "../assets/Video/Spin 360/240-120.mp4";
import vid06 from "../assets/Video/Spin 360/360-240.mp4";

const videos = [
    {
        id: 0,
        name: '',
        vid: (
            <div key="0" className='w-full h-screen'>
                <img
                    className='w-full h-screen object-cover'
                    src={img01}
                    alt=''
                />
            </div>
        ),
        prev: 6,
        next: 1
    },
    {
        id: 1,
        name: '',
        vid: (
            <video
                key="1"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img01}
            >
                <source
                    src={vid01}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 4,
        next: 2
    },
    {
        id: 2,
        name: '',
        vid: (
            <video
                key="2"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img02}
            >
                <source
                    src={vid02}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 5,
        next: 3
    },
    {
        id: 3,
        name: '',
        vid: (
            <video
                key="3"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img03}
            >
                <source
                    src={vid03}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 6,
        next: 1
    },
    {
        id: 4,
        name: '',
        vid: (
            <video
                key="4"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img02}
            >
                <source
                    src={vid04}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 6,
        next: 1
    },
    {
        id: 5,
        name: '',
        vid: (
            <video
                key="5"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img03}
            >
                <source
                    src={vid05}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 4,
        next: 2
    },
    {
        id: 6,
        name: '',
        vid: (
            <video
                key="6"
                className='w-full h-screen object-cover'
                autoPlay
                poster={img01}
            >
                <source
                    src={vid06}
                    type='video/mp4'
                />
            </video>
        ),
        prev: 5,
        next: 3
    }
]

const Spin360 = () => {

    const [item, setItem] = useState(0);

    const next = () => {
        const nextItem = videos[item].next;
        setItem(nextItem);
    }

    const prev = () => {
        const nextItem = videos[item].prev;
        setItem(nextItem);
    }

    return (
        <div className='relative w-full h-screen'>
            <div className='relative z-0'>
                {videos[item].vid}
            </div>
            <div className='absolute top-0 w-full h-full flex justify-between items-center z-10'>
                <button className='bg-opacity-50 bg-black text-white p-4' onClick={prev}>
                    <FaChevronLeft size={30} />
                </button>
                <button className='bg-opacity-50 bg-black text-white p-4' onClick={next}>
                    <FaChevronRight size={30} />
                </button>
            </div>
        </div>
    );
}

export default Spin360;