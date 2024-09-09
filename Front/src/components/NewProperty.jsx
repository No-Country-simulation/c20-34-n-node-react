import React, { useState } from 'react';

const NewProperty = () => {
    // Estado para el número de pasos
    const [steps, setSteps] = useState(1);

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
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_image_${label}`}>Initial view - {label}</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_image_${label}`} type="file" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">Image (.jpg o .png) / Video (.mp4) (RES. 1920x1080px).</p>
                </div>
            );
        }

        // Animaciones en un sentido (e.g., A-B, B-C...)
        for (let i = 0; i < steps - 1; i++) {
            const from = String.fromCharCode(65 + i);
            const to = String.fromCharCode(65 + i + 1);
            fileInputs.push(
                <div key={`animation-${from}-${to}`}>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_anim_${from}_${to}`}>Animation {from}-{to}</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_anim_${from}_${to}`} type="file" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">Animation file (.mp4)</p>
                </div>
            );
        }

        // Animaciones en sentido contrario (e.g., A-B, B-C...)
        for (let i = steps - 1; i > 0; i--) {
            const from = String.fromCharCode(65 + i);
            const to = String.fromCharCode(65 + i - 1);
            fileInputs.push(
                <div key={`animation-${from}-${to}-reverse`}>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor={`file_input_anim_${from}_${to}_reverse`}>Animation {from}-{to} (reverse)</label>
                    <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id={`file_input_anim_${from}_${to}_reverse`} type="file" />
                    <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">Animation file (.mp4)</p>
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
                                <option selected="">Select category</option>
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

                    {/* Número de pasos */}
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="steps">Number of Steps</label>
                    <select id="steps" value={steps} onChange={handleStepsChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>

                    {/* Inputs de archivos dinámicos */}
                    {renderFileInputs()}

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
