import React, { useState, useContext } from 'react';
import RenderFloors from '../components/floorsFeatures/renderFloors';
import ZoomControls from '../components/floorsFeatures/ZoomControls';
import FloorsSideBar from '../components/floorsFeatures/FloorsSideBar';
import { FloorsProvider, FloorsContext } from '../context/FloorsContext';

// Componente principal que representa la vista de los pisos
const Floors = () => {
    // Estado que controla la escala (zoom) de la imagen del piso
    const [scale, setScale] = useState(1);
    // Estado que controla la visibilidad del sidebar (lista de pisos)
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const { error } = useContext(FloorsContext);

    // Función que actualiza la escala del zoom cuando cambia
    const handleZoomChange = (newScale) => {
        setScale(newScale);
    };

    // Función que alterna la visibilidad del sidebar (mostrar/ocultar)
    const toggleSidebar = () => {
        setSidebarVisible(prev => !prev);
    };

    if (error) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-gray-800 text-white">
                No se pueden mostrar las imágenes. Error: {error.message}
            </div>
        );
    }

    return (
        // Proveedor del contexto de los pisos, que proporciona los datos de los pisos a los componentes hijos
        <FloorsProvider>
            {/* Contenedor principal que ocupa toda la pantalla */}
            <div className="relative h-screen w-screen">
                {/* Componente que renderiza la imagen del piso seleccionado, aplicando la escala de zoom */}
                <RenderFloors scale={scale} />
                {/* Componente que muestra el sidebar con la lista de pisos, su visibilidad está controlada por 'sidebarVisible' */}
                <FloorsSideBar visible={sidebarVisible} toggleSidebar={toggleSidebar} />
                {/* Componente que permite controlar el zoom (aumentar/disminuir) */}
                <ZoomControls
                    onZoomChange={handleZoomChange}
                    iconSize={25}
                    sidebarVisible={sidebarVisible}
                />
            </div>
        </FloorsProvider>
    );
};

export default Floors;
