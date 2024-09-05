import React from 'react';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-200">
      <div className="flex w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
        
        {/* Lado Izquierdo */}
        <div className="w-1/2 p-10 flex flex-col items-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-gray-400 rounded-full flex items-center justify-center">
              LOGO
            </div>
          </div>
          <form className="w-full">
            <div className="mb-4">
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                type="text"
                placeholder="usuario"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full p-3 rounded-lg border border-gray-300"
                type="password"
                placeholder="contraseña"
              />
            </div>
            <div className="mb-4 text-right text-sm">
              <a href="/new-account" className="text-gray-500 hover:text-gray-700">
                new account
              </a>
              <br />
              <a href="/forgot-password" className="text-gray-500 hover:text-gray-700">
                I forgot my password
              </a>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              INGRESAR
            </button>
          </form>
        </div>

        {/* Lado Derecho - Imagen */}
        <div className="w-1/2 bg-gray-300 flex items-center justify-center">
          <div className="w-64 h-64 bg-gray-400 rounded-lg flex items-center justify-center">
            <img src="your-image-url.png" alt="Imagen de demostración" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
