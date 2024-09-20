import React, { useState, useEffect } from 'react';
import { useRoute } from 'wouter';
import { fetchBuildData } from '../data/mock';

const UnitPage = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [unit, setUnit] = useState(null);
    const [activeView, setActiveView] = useState('gallery'); // 'gallery', 'floorplan', 'tour'
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // Para el carousel

    const [menuOpen, setMenuOpen] = useState(false); // Para controlar el menú lateral

    const [match, params] = useRoute('/unit/:floorId/:unitId');

    useEffect(() => {
        fetchBuildData().then(floorsData => {
            setData(floorsData);
            const floor = floorsData.floors.find(f => f.id === parseInt(params.floorId));
            if (floor) {
                const foundUnit = floor.units.find(u => u.id === parseInt(params.unitId));
                setUnit(foundUnit);
            }
            setLoading(false);
        });
    }, [params.floorId, params.unitId]);

    if (loading) return <div>Loading...</div>;
    if (!unit) return <div>No se encontró la unidad.</div>;

    // Función para cambiar la imagen del carousel
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % unit.gallery.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + unit.gallery.length) % unit.gallery.length);
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
            {/* Vista Principal (Gallery / Floorplan / Tour) */}
            <div className="absolute inset-0">
                {activeView === 'gallery' && (
                    <div className="h-full w-full flex items-center justify-center">
                        <img 
                            src={unit.gallery[currentImageIndex]} 
                            alt={`Gallery ${currentImageIndex}`} 
                            className="object-cover h-full w-full"
                        />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 text-white bg-gray-600 bg-opacity-50">❮</button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 text-white bg-gray-600 bg-opacity-50">❯</button>
                    </div>
                )}
                {activeView === 'floorplan' && unit.floorplan && (
                    <img src={unit.floorplan} alt="Floorplan" className="object-cover h-full w-full" />
                )}
                {activeView === 'tour' && unit.tour && (
                    <iframe src={unit.tour} className="h-full w-full" title="360 Tour"></iframe>
                )}
            </div>

            {/* Menú lateral desplegable */}
            <div className={`absolute right-0 top-0 h-full w-[350px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="absolute -left-10 top-10 bg-gray-600 bg-opacity-50 text-white px-4 py-2 rounded-l-md">
                    {menuOpen ? '❮' : '❯'}
                </button>

                <div className="p-6 h-screen flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">{unit.name}</h2>
                        <img src={unit.img} alt={unit.name} className="mb-4 w-full h-40 object-cover rounded-md" />
                    </div>
                    
                    <div className="border p-4 mb-4 text-black">
                        <h3 className="text-lg font-semibold">Características</h3>
                        <p>Área Total: {unit.features.totalAream2} m²</p>
                        <p>Baños: {unit.features.bathrooms}</p>
                        <p>Precio: {unit.features.price}</p>
                    </div>

                    <div className="">
                        <button onClick={() => setActiveView('gallery')} className="w-full bg-gray-700 text-white py-2 rounded mb-2">
                            Galería
                        </button>
                        <button onClick={() => setActiveView('floorplan')} className="w-full bg-gray-700 text-white py-2 rounded mb-2">
                            Planta
                        </button>
                        <button onClick={() => setActiveView('tour')} className="w-full bg-gray-700 text-white py-2 rounded">
                            Tour 360
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UnitPage;