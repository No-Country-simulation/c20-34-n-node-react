import React, { useEffect, useState } from 'react';
import View3d from '../components/View3d';
import MainView from '../components/MainView';
import { fetchTourData } from '../components/mockData';

const Development = () => {
    const [showFloors, setShowFloors] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');
    const [buildingImageUrl, setBuildingImageUrl] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchTourData().then(data => {
            setData(data);
            setBuildingImageUrl(data.buildingImageUrl); // Imagen del edificio
        });
    }, []);

    const handleShowFloors = () => setShowFloors(true);
    const handleFloorSelect = (imageUrl) => setSelectedImageUrl(imageUrl);

    if (!data) return <div>Loading...</div>;

    return (
        <div className="flex h-screen">
            {!showFloors ? (
                <MainView
                    mediaUrl={data.mainMediaUrl}
                    isVideo={data.isVideo}
                    onShowFloors={handleShowFloors}
                />
            ) : (
                <>
                    <div className="w-1/4 bg-gray-200 p-4">
                        <img
                            className="w-full h-auto object-cover mb-4"
                            src={buildingImageUrl}
                            alt="Building view"
                        />
                        {data.floors.map(floor => (
                            <button
                                key={floor.id}
                                className="block mb-2 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-300"
                                onClick={() => handleFloorSelect(floor.imageUrl)}
                            >
                                {floor.name}
                            </button>
                        ))}
                    </div>
                    <div className="w-3/4">
                        {selectedImageUrl && <View3d imageUrl={selectedImageUrl} />}
                    </div>
                </>
            )}
        </div>
    );
};

export default Development;
