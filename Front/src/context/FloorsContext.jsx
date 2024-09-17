import React, { createContext, useState, useEffect } from 'react';

export const FloorsContext = createContext();

const checkImageExists = async (url) => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        return response.ok;
    } catch (err) {
        return false;
    }
};

export const FloorsProvider = ({ children }) => {
    const [floors, setFloors] = useState([]);
    const [selectedFloor, setSelectedFloor] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFloorsData = async () => {
            try {
                const response = await fetch('/FloorsData.json');
                if (!response.ok) {
                    throw new Error('No se pudo cargar los datos.');
                }
                const data = await response.json();

                // Filtra pisos válidos
                const validFloors = await Promise.all(data.floors.map(async (floor) => {
                    const imageExists = await checkImageExists(floor.src);
                    return imageExists ? floor : null;
                }));

                // Filtra pisos nulos
                const filteredFloors = validFloors.filter(floor => floor !== null);

                if (filteredFloors.length > 0) {
                    setFloors(filteredFloors);
                    setSelectedFloor(filteredFloors[0]?.src);
                } else {
                    throw new Error('No se encontraron pisos disponibles.');
                }
            } catch (err) {
                setError(err);
                setFloors([]); // Asegúrate de limpiar el estado de pisos en caso de error
            } finally {
                setLoading(false);
            }
        };

        fetchFloorsData();
    }, []);

    const handleSelectFloor = (src) => {
        setSelectedFloor(src);
    };

    return (
        <FloorsContext.Provider value={{ data: floors, loading, error, selectedFloor, handleSelectFloor }}>
            {children}
        </FloorsContext.Provider>
    );
};
