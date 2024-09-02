import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const Register = () => {
    const [logo, setLogo] = useState(null);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    });

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setLogo(URL.createObjectURL(file));
        }
    };

    const handleLogoClick = () => {
        document.getElementById('logoInput').click();
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Encripta la contraseña (librería bcryptjs)
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(formData.password, salt);

        const dataToSend = {
            ...formData,
            password: hashedPassword,
            logo: logo,
        };

        try {
            const response = await fetch('https://example.com/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToSend),
            });

            if (response.ok) {
                alert('Registro exitoso');
            } else {
                alert('Error en el registro');
            }
        } catch (error) {
            alert('Error al conectar con el servidor');
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
            <div className="flex w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
                {/* Lado Derecho - Imagen */}
                <div className="w-1/2 bg-gray-300 flex items-center justify-center">
                    <div className="w-64 h-64 bg-gray-400 rounded-lg flex items-center justify-center">
                        <img src="your-image-url.png" alt="Imagen de demostración" />
                    </div>
                </div>
                {/* Lado Izquierdo */}
                <div className="w-1/2 p-10 flex flex-col items-center">
                    <div className="mb-6">
                        <div
                            className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center overflow-hidden cursor-pointer"
                            onClick={handleLogoClick}
                        >
                            {logo ? (
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            ) : (
                                <span>LOGO</span>
                            )}
                        </div>
                        <input
                            id="logoInput"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </div>
                    <form className="w-full" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-gray-700">
                                Nombre
                            </label>
                            <input
                                id="firstName"
                                name="firstName"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="text"
                                placeholder="Ingrese su nombre"
                                aria-label="Nombre"
                                title="Nombre"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-gray-700">
                                Apellido
                            </label>
                            <input
                                id="lastName"
                                name="lastName"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                type="text"
                                placeholder="Ingrese su apellido"
                                aria-label="Apellido"
                                title="Apellido"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">
                                Email
                            </label>
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
                            <label htmlFor="password" className="block text-gray-700">
                                Contraseña
                            </label>
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
                            <label htmlFor="role" className="block text-gray-700">
                                Rol
                            </label>
                            <select
                                id="role"
                                name="role"
                                className="w-full p-3 rounded-lg border border-gray-300"
                                aria-label="Rol"
                                title="Rol"
                                value={formData.role}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>
                                    Seleccione su rol
                                </option>
                                <option value="user">Usuario</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            REGISTRARSE
                        </button>
                    </form>

                    <a href="/login" className="text-gray-500 hover:text-gray-700">
                        Go to login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;
