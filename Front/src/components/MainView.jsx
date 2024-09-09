import React, { useState, useRef, useEffect } from 'react';

const MainView = ({ mediaUrl, isVideo, onShowFloors }) => {
    const [showModal, setShowModal] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        if (isVideo && videoRef.current) {
            const video = videoRef.current;
            const handleTimeUpdate = () => {
                if (video.currentTime >= 14 && !video.paused) {
                    video.pause();
                    setShowModal(true); // Muestra el modal cuando el video se pause
                    video.removeEventListener('timeupdate', handleTimeUpdate);
                }
            };

            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [isVideo]);

    const handleClick = () => {
        setShowModal(true);
        onShowFloors(); // Notifica al componente padre que se deben mostrar las imágenes de los pisos
    };

    return (
        <div className="relative w-screen h-screen overflow-hidden">
            {isVideo ? (
                <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    src={mediaUrl}
                    autoPlay
                    muted
                    playsInline
                    onEnded={() => setShowModal(true)} // Muestra el modal al finalizar el video
                    onError={(e) => console.error('Error loading video:', e)}
                />
            ) : (
                <img
                    className="absolute inset-0 w-full h-full object-cover"
                    src={mediaUrl}
                    alt="Panoramic view"
                />
            )}
            <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={handleClick}
            >
                <div
                    className="absolute w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer"
                >
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                        +
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg text-center">
                        <h2 className="text-xl mb-4">Título del Modal</h2>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={() => {
                                setShowModal(false);
                                onShowFloors(); // Continúa a la siguiente vista cuando se hace clic en "Entrar"
                            }}
                        >
                            Entrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainView;
