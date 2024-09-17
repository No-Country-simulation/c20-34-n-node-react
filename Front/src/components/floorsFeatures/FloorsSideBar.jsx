import React, { useContext } from 'react';
import { FloorsContext } from '../../context/FloorsContext';

const FloorsSideBar = ({ visible, toggleSidebar }) => {
    const { data: floors, loading, error, selectedFloor, handleSelectFloor } = useContext(FloorsContext);

    if (error) return <p className="h-screen w-screen flex items-center justify-center bg-gray-800 text-white">No se pueden mostrar los pisos. Error: {error.message}</p>;
    if (loading) return <p className="h-screen w-screen flex items-center justify-center bg-gray-800 text-white">Cargando...</p>;
    if (!floors || floors.length === 0) return <p className="h-screen w-screen flex items-center justify-center bg-gray-800 text-white">No hay pisos disponibles.</p>;

    return (
        <>
            <button
                className={`fixed top-5 bg-gray-700 text-white p-2 rounded-full z-50 ${visible ? "right-72" : "right-5"}`}
                onClick={toggleSidebar}
            >
                {visible ? "Ocultar lista de pisos" : "Mostrar lista de pisos"}
            </button>

            <div
                className={`fixed top-0 right-0 w-60 h-screen bg-gray-800 text-white overflow-y-auto transition-transform transform ${visible ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <ul>
                    {floors.map((floor, index) => (
                        <li
                            key={index}
                            className={`flex items-center p-2 hover:bg-gray-700 cursor-pointer ${selectedFloor === floor.src ? "bg-gray-600" : ""}`}
                            onClick={() => handleSelectFloor(floor.src)}
                        >
                            <img
                                src={floor.thumbnail}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-16 h-16 object-cover mr-2"
                            />
                            <span>{floor.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default FloorsSideBar;
