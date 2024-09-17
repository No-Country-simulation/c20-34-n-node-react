import React from 'react';
import { CiZoomIn, CiZoomOut } from 'react-icons/ci';

const ZoomControls = ({ onZoomChange, iconSize, sidebarVisible }) => {
    const handleZoomIn = () => {
        onZoomChange(prev => Math.min(prev + 0.5, 3)); // Límite máximo de zoom
    };

    const handleZoomOut = () => {
        onZoomChange(prev => Math.max(prev - 0.5, 1)); // Límite mínimo de zoom
    };

    return (
        <div
            className={`fixed bottom-10 transition-all flex flex-col items-center ${sidebarVisible ? 'right-64' : 'right-5'}`}
        >
            <button
                onClick={handleZoomIn}
                className="bg-blue-950 px-2 py-2 m-1 rounded-full hover:bg-blue-900"
            >
                <CiZoomIn size={iconSize} color="white" />
            </button>
            <button
                onClick={handleZoomOut}
                className="bg-blue-950 px-2 py-2 m-1 rounded-full hover:bg-blue-900"
            >
                <CiZoomOut size={iconSize} color="white" />
            </button>
        </div>
    );
};

export default ZoomControls;
