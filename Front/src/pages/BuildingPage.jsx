import React, { useState, useEffect } from 'react';
import fligthTo360 from '../assets/Video/Flight to 360.mp4';
import Spin360 from '../components/Spin360';

export const BuildingPage = () => {
  const [videoFinished, setVideoFinished] = useState(false); // Estado para saber si el video terminó

  // Manejador cuando el video finaliza
  const handleVideoEnd = () => {
    setVideoFinished(true);
  };

  return (
    <div className="w-full h-screen">
      <video
        className={`absolute top-0 left-0 w-full h-full object-cover ${videoFinished ? 'opacity-0 transition-opacity duration-1000 ease-out' : 'opacity-100'}`}
        autoPlay
        muted
        onEnded={handleVideoEnd}
      >
        <source src={fligthTo360} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {videoFinished && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Spin360 />
        </div>
      )}
    </div>
  );
};

export default BuildingPage;