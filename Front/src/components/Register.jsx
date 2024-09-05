import React, { useState } from 'react';

const Register = () => {
    //estado inicial de los datos del formulario
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        rol: '',
    });

    //almaceno los datos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    //envio los datos del formulario
    const registerUser = async (userData) => {
        try {
            const response = await fetch('http://localhost:3000/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            const result = await response.json();
            console.log("Resultados del cliente: ", userData)
            console.log('Resultado del servidor:', result);

        } catch (error) {
            console.error(error);
        }
    };

    //instrucciones de envio de formulario
    const handleSubmit = async (event) => {
        event.preventDefault();
        await registerUser(formData);
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
            <div className="flex w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gray-400 rounded-lg flex items-center justify-center">
                        <img src="your-image-url.png" alt="Imagen de demostración" />
                    </div>
                </div>
                <div className="w-1/2 p-10 flex flex-col items-center">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="nombre" className="block text-gray-700">Nombre</label>
                            <input
                                id="nombre"
                                name="nombre"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="text"
                                placeholder="Ingrese su nombre"
                                aria-label="Nombre"
                                title="Nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="apellido" className="block text-gray-700">Apellido</label>
                            <input
                                id="apellido"
                                name="apellido"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="text"
                                placeholder="Ingrese su apellido"
                                aria-label="Apellido"
                                title="Apellido"
                                value={formData.apellido}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="email"
                                placeholder="Ingrese su email"
                                aria-label="Email"
                                title="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
                            <input
                                id="password"
                                name="password"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                aria-label="Contraseña"
                                title="Contraseña"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rol" className="block text-gray-700">Rol</label>
                            <select
                                id="rol"
                                name="rol"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                aria-label="Rol"
                                title="Rol"
                                value={formData.rol}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Seleccione su rol</option>
                                <option value="vendedor">vendedor</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            REGISTRARSE
                        </button>
                    </form>

                    <a href="/login" className="text-gray-500 hover:text-gray-700 mt-4">
                        Ir a login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
