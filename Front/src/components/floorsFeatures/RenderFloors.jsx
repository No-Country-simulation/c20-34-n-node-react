import React, { useContext } from 'react';
import { FloorsContext } from '../../context/FloorsContext';

const RenderFloors = ({ scale }) => {
    const { selectedFloor, error } = useContext(FloorsContext);

    if (error) {
        return null; // La lógica del error global en `Floors` ya lo maneja
    }

    if (!selectedFloor) {
        return <div className="h-full w-full flex items-center justify-center bg-gray-800 text-white">No se puede mostrar la imagen del piso.</div>;
    }

    return (
        <div className="h-full w-full">
            <img
                src={selectedFloor}
                alt="Selected Floor"
                style={{ transform: `scale(${scale})` }}
                className="w-full h-full object-cover"
            />
        </div>
    );
};

export default RenderFloors;
