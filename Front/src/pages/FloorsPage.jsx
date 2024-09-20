import React, { useEffect, useState } from 'react';
import fligthToTop from '../assets/Video/flight to top.mp4';
import { HiOutlineX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { fetchBuildData } from '../mock';

const FloorsPage = () => {
    const [videoFinished, setVideoFinished] = useState(false);
    const [data, setData] = useState(null);
    const [floor, setFloor] = useState(1);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchBuildData().then(data => {
            setData(data);
            setFloor(data.floors.length)
        });
    }, []);

    const handleVideoEnd = () => {
        setVideoFinished(true);
    };

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null);
        };
        setSelected(i);
    };

    const closed = 'max-h-0 pb-0 overflow-hidden transition-all duration-500'
    const isOpen = 'h-auto max-h-auto pb-4 overflow-hidden transition-all duration-500'

    if (!data) return <div>Loading...</div>;

    return (
        <div className='w-full h-screen'>
            <video
                className={`absolute top-0 left-0 w-full h-full object-cover ${videoFinished ? 'opacity-0 transition-opacity duration-1000 ease-out' : 'opacity-100'}`}
                autoPlay
                muted
                onEnded={handleVideoEnd}
            >
                <source src={fligthToTop} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {videoFinished && (
                <div className="flex absolute top-0 left-0 w-full h-full">
                    <div className='z-0'>
                        <img
                            key={floor}
                            className='absolute top-0 left-0 w-full h-full object-cover'
                            src={data.floors[floor - 1].img}
                            alt=''
                        />
                    </div>
                    <div id='floors' className='relative top-0 bg-white w-[300px] z-10'>
                        <div className='min-h-[70px] flex justify-end border-b-slate-200 border-b-[1px]'>
                            <button className='bg-transparent text-black'>
                                <HiOutlineX className='' />
                            </button>
                        </div>
                        <div className='menuBody max-h-[calc(100vh-70px)] overflow-y-auto'>
                            {
                                data.floors.map(item => (
                                    <div className='text-black'>
                                        <div className='flex justify-between w-full py-4'>
                                            <h3 className='ml-8 text-xl font-semibold w-11/12'>{item.name}</h3>
                                            {
                                                selected === item.id ? (
                                                    <FaChevronUp className='mr-2 xl:lg:mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(item.id)} />
                                                ) : (
                                                    <FaChevronDown className='mr-2 xl:lg:mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(item.id)} />
                                                )
                                            }
                                        </div>
                                        <span className={`ml-8 self-start w-[80%] mr-8 ${selected === item.id ? isOpen : closed}`}>
                                            {item.answer}
                                        </span>
                                    </div>
                                ))
                            }
                        </div>
                    </div >
                </div>
            )}
        </div>
    );
};

export default FloorsPage;
