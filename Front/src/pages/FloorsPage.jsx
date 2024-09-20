import React, { useEffect, useState } from 'react';
import fligthToTop from '../assets/Video/flight to top.mp4';
import { HiOutlineX } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { fetchBuildData } from '../data/mock';

const FloorsPage = () => {
    const [videoFinished, setVideoFinished] = useState(false);
    const [data, setData] = useState(null);
    const [floor, setFloor] = useState(1);
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        fetchBuildData().then(data => {
            setData(data);
            setFloor(data.floors.length);
            setSelected(data.floors.length)
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
        setFloor(i)
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
                        </div>
                        <div className='max-h-[calc(100vh-70px)] overflow-y-auto'>
                            {
                                [...data.floors].reverse().map(cfloor => (
                                    <div key={cfloor.name} className='text-black'>
                                        <div className='flex justify-between w-full py-4'>
                                            <h3 className='ml-8 text-xl font-semibold w-11/12'>{cfloor.name}</h3>
                                            {
                                                selected === cfloor.id ? (
                                                    <FaChevronUp className='mr-2 xl:lg:mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(cfloor.id)} />
                                                ) : (
                                                    <FaChevronDown className='mr-2 xl:lg:mr-8 text-marron w-8 cursor-pointer hover:font-bold' onClick={() => toggle(cfloor.id)} />
                                                )
                                            }
                                        </div>
                                        <span className={`flex flex-col mx-auto w-10/12 ${selected === cfloor.id ? isOpen : closed}`}>
                                            {cfloor.units.length !== 0 ? (
                                                cfloor.units.map(unit => (
                                                    <div key={unit.id} className='my-2 border-b-slate-200 border-b-[1px]'>
                                                        <img
                                                            className='rounded-xl'
                                                            src={unit.img}
                                                            alt=''
                                                        />
                                                        <h3 className='font-semibold mt-2'>{unit.name}</h3>
                                                        <h4 className='mb-2 text-slate-600'>{unit.category}</h4>
                                                    </div>
                                                    ))
                                            ): (
                                                <h4 >No hay información de las unidades</h4>
                                                )
                                                
                                            }

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
