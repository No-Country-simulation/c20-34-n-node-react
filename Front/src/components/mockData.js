//simulo datos del back

export const fetchTourData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                mainMediaUrl: '../src/assets/aerialView_0.mp4',
                isVideo: true,
                buildingImageUrl: '../src/assets/building_0.jpg',
                floors: [
                    { id: 1, imageUrl: '../src/assets/floor_1.jpg', name: 'Piso 1' },
                ],
            });
        }, 1000);
    });
};
