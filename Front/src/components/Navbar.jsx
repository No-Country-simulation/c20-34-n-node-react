import React from "react";
import { Link } from "wouter";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* Sección Izquierda: Logo y Enlaces */}
                <div className="flex items-center space-x-8">
                    <div className="text-white font-black">PropTech</div>
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/buildings" className="text-white">Buildings</Link>
                </div>

                {/* Barra de Búsqueda en el Centro */}
                <div className="flex-grow mx-4">
                    <input
                        type="text"
                        placeholder="Buscar Edificios"
                        className="w-full px-4 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Botón de Login a la Derecha */}
                <div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        LOG IN
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
