import React, { useState } from 'react';

const NewProperty = () => {
    // Estado para el número de pasos
    const [steps, setSteps] = useState(1);
    const [floors, setFloors] = useState(0);

    // Función que maneja el cambio de pasos
    const handleStepsChange = (e) => {
        setSteps(Number(e.target.value)); // Convierte a número el valor del input
    };

    // Función que renderiza dinámicamente los campos basados en el número de pasos
    const renderFileInputs = () => {
        let fileInputs = [];

        // Imágenes
        for (let i = 0; i < steps; i++) {
            const label = String.fromCharCode(65 + i); // Convierte 0 a 'A', 1 a 'B', etc.
            fileInputs.push(
                <div key={`image-${label}`}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_image_${label}`}>Initial view - {label}</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_image_${label}`} type="file" />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Image (.jpg o .png) / Video (.mp4) (RES. 1920x1080px).</p>
                </div>
            );
        }

        // Animaciones en un sentido (e.g., A-B, B-C...)
        for (let i = 0; i < steps - 1; i++) {
            const from = String.fromCharCode(65 + i);
            const to = String.fromCharCode(65 + i + 1);
            fileInputs.push(
                <div key={`animation-${from}-${to}`}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_anim_${from}_${to}`}>Animation {from}-{to}</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_anim_${from}_${to}`} type="file" />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Animation file (.mp4)</p>
                </div>
            );
        }

        // Animaciones en sentido contrario (e.g., A-B, B-C...)
        for (let i = steps - 1; i > 0; i--) {
            const from = String.fromCharCode(65 + i);
            const to = String.fromCharCode(65 + i - 1);
            fileInputs.push(
                <div key={`animation-${from}-${to}-reverse`}>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_anim_${from}_${to}_reverse`}>Animation {from}-{to} (reverse)</label>
                    <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_anim_${from}_${to}_reverse`} type="file" />
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Animation file (.mp4)</p>
                </div>
            );
        }

        return fileInputs;
    };

    return (
        <section className="w-screen bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Property</h2>
                <form action="#">
                    {/* Campos básicos */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* Nombre de la propiedad */}
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Property Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type property name" required="" />
                        </div>

                        {/* Categoría */}
                        <div>
                            <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue="">Select category</option>
                                <option value="H">Housing / Community</option>
                                <option value="T">Tower</option>
                                <option value="MT">Multi-Tower</option>
                                <option value="SP">Special</option>
                            </select>
                        </div>

                        {/* Ubicación */}
                        <div className="sm:col-span-2">
                            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
                            <input type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Property location" required="" />
                        </div>

                        {/* Descripción */}
                        <div className="sm:col-span-2">
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                            <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your description here"></textarea>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Property Assets</h3>

                    <div key="intro">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="intro">Intro / Main view</label>
                        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="" type="file" />
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">Image (.jpg o .png) / Video (.mp4) (RES. 1920x1080px).</p>
                    </div>

                    <h3 className="my-4 font-bold text-gray-900 dark:text-white">Aerial view / 360 spin</h3>

                    {/* Número de pasos */}
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="steps">Number of Steps</label>
                            <select id="steps" value={steps} onChange={handleStepsChange} className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>

                    {/* Inputs de archivos dinámicos */}
                    {renderFileInputs()}

                    <h3 className="my-4 font-bold text-gray-900 dark:text-white">Floorplans</h3>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="w-full">
                            <label htmlFor="floorNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Floors</label>
                            <input type="number" name="floorNumber" id="floorNumber" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="1" required="" />
                        </div>
                    </div>

                    <div className="my-4">
                        <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple files</label>
                        <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Image (.jpg o .png) - (RES. 1920x1080px).</p>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Unit Types</h3>

                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div className="my-4">
                            <label htmlFor="unitType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit Type Name</label>
                            <input type="text" name="unitTypeName" id="unitTypeName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Unit Type Name" required="" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="totalArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Total Area</label>
                            <input type="number" name="totalArea" id="totalArea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Area in sqft" required="" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="bedroomsNum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Bedrooms</label>
                            <input type="number" name="bedroomsNum" id="bedroomsNum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type number of Bedrooms" required="" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="bathroomsNum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Bathrooms</label>
                            <input type="number" name="bathroomsNum" id="bathroomsNum" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type number of Bathrooms" required="" />
                        </div>

                        <div className="my-4 sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Images for Gallery</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple />
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">Image (.jpg o .png) - (RES. 1920x1080px).</p>
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">360 Virtual Tour</label>
                            <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file"/>
                            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">ZIP file.</p>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <h3 className="mb-4 font-bold text-gray-900 dark:text-white">Unit</h3>

                    <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
                        <div className="my-4">
                            <label htmlFor="unitFloor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Floor</label>
                            <input type="number" name="unitFloor" id="unitFloor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Floor Number" required="" />
                        </div>
                        <div className="my-4">
                            <label htmlFor="bathroomsNum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue="amenitie">Amenity / Common Space</option>
                                <option value="commercial">Commercial</option>
                                <option value="residential">Residential</option>
                            </select>
                        </div>
                        <div className="my-4">
                            <label htmlFor="bedroomsNum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit Type</label>
                            <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option defaultValue="">Select Type</option>
                                <option value="Add type">Add Type</option>
                            </select>
                        </div>
                        <div className="my-4">
                            <label htmlFor="unitPrice" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="unitPrice" id="unitPrice" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Price" required="" />
                        </div>
                    </div>

                    {/* Botón de enviar */}
                    <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                        Add Property
                    </button>
                </form>
            </div>
        </section>
    );
};

export default NewProperty;
