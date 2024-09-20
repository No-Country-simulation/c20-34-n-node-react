export const fetchBuildData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                floors: [
                    {
                        id: 1,
                        name: 'Piso 1',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 01.jpg',
                        units: [
                            {
                                id: 101,
                                name: 'Lobby',
                                category: 'Amenities',
                                img: '../src/assets/Lobby.jpeg',
                                availability: 'NA',
                                features: {
                                    TotalAream2: 110,
                                    Bathrooms: 2,
                                    price: 'NA',
                                },
                                gallery: ['../src/assets/Lobby_01.jpeg'],
                                floorplan: '',
                                tour: '../src/assets/360tours/Lobby/index.html',
                            },
                            {
                                id: 102,
                                name: 'Restaurant',
                                category: 'Amenities',
                                img: '../src/assets/Restaurant.jpeg',
                                availability: 'NA',
                                features: {
                                    TotalAream2: 110,
                                    Bathrooms: 2,
                                    price: 'NA',
                                },
                                gallery: ['../src/assets/Restaurant.jpeg'],
                                floorplan: '',
                                tour: '../src/assets/360tours/Restaurant/index.html',
                            },
                            {
                                id: 103,
                                name: 'Local Comercial',
                                category: 'Comercial',
                                img: '../src/assets/Tienda.jpeg',
                                availability: 'NA',
                                features: {
                                    TotalAream2: 110,
                                    Bathrooms: 2,
                                    price: 'NA',
                                },
                                gallery: ['../src/assets/Tienda.jpeg'],
                                floorplan: '',
                                tour: '../src/assets/360tours/Retail/index.html',
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: 'Piso 2',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 02.jpg',
                        units: []
                    },
                    {
                        id: 3,
                        name: 'Piso 3',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 03.jpg',
                        units: []
                    },
                    {
                        id: 4,
                        name: 'Piso 4',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 04.jpg',
                        units: []
                    },
                    {
                        id: 5,
                        name: 'Piso 5',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 05.jpg',
                        units: []
                    },
                    {
                        id: 6,
                        name: 'Piso 6',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 06.jpg',
                        units: []
                    },
                    {
                        id: 7,
                        name: 'Piso 7',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 07.jpg',
                        units: []
                    },
                    {
                        id: 8,
                        name: 'Piso 8',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 08.jpg',
                        units: []
                    },
                    {
                        id: 9,
                        name: 'Piso 9',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 09.jpg',
                        units: []
                    },
                    {
                        id: 10,
                        name: 'Piso 10',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 10.jpg',
                        units: []
                    },
                    {
                        id: 11,
                        name: 'Piso 11',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 11.jpg',
                        units: []
                    },
                    {
                        id: 12,
                        name: 'Piso 12',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 12.jpg',
                        units: []
                    },
                    {
                        id: 13,
                        name: 'Piso 13',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 13.jpg',
                        units: []
                    },
                    {
                        id: 14,
                        name: 'Piso 14',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 14.jpg',
                        units: []
                    },
                    {
                        id: 15,
                        name: 'Piso 15',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 15.jpg',
                        units: []
                    },
                    {
                        id: 16,
                        name: 'Piso 16',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 16.jpg',
                        units: []
                    },
                    {
                        id: 17,
                        name: 'Piso 17',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 17.jpg',
                        units: []
                    },
                    {
                        id: 18,
                        name: 'Piso 18',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 18.jpg',
                        units: []
                    },
                    {
                        id: 19,
                        name: 'Piso 19',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 19.jpg',
                        units: []
                    },
                    {
                        id: 20,
                        name: 'Piso 20',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 20.jpg',
                        units: []
                    },
                    {
                        id: 21,
                        name: 'Piso 21',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 21.jpg',
                        units: []
                    },
                    {
                        id: 22,
                        name: 'Piso 22',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 22.jpg',
                        units: []
                    },
                    {
                        id: 23,
                        name: 'Piso 23',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 23.jpg',
                        units: []
                    },
                    {
                        id: 24,
                        name: 'Piso 24',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 24.jpg',
                        units: []
                    },
                    {
                        id: 25,
                        name: 'Piso 25',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 25.jpg',
                        units: []
                    },
                    {
                        id: 26,
                        name: 'Piso 26',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 26.jpg',
                        units: []
                    },
                    {
                        id: 27,
                        name: 'Piso 27',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 27.jpg',
                        units: []
                    },
                    {
                        id: 28,
                        name: 'Piso 28',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 28.jpg',
                        units: []
                    },
                    {
                        id: 29,
                        name: 'Piso 29',
                        img: '../src/assets/Floorplans/1550 Lamar St-Building_Level 29.jpg',
                        units: [
                            {
                                id: 291,
                                name: 'Espacio Ejecutivo',
                                category: 'Amenities',
                                img: '../src/assets/Espacio Ejecutivo.jpeg',
                                availability: '',
                                features: {
                                    TotalAream2: 220,
                                    Bathrooms: 1,
                                    price: 'NA',
                                },
                                gallery: ['../src/assets/EE - Gal 01.jpeg', '../src/assets/EE - Gal 02.jpeg'],
                                floorplan: '../src/assets/EE - Floorplan.jpeg',
                                tour: '../src/assets/360tours/Penthouse/index.html',
                            }
                        ]
                    },
                ],
            });
        }, 10);
    });
};