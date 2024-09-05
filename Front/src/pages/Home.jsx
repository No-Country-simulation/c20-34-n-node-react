import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div className="w-screen ">
      <Navbar/>
     <div className="bg-slate-100 w-full h-auto flex items-center" style={{ minHeight: '300px' }}>
    {/* Sección Izquierda: Título y Texto */}
    <div className="flex-1 flex-col items-center text-center">
        <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">LOREM IPSUM NEQUE <br/> PORRO QUI DOLOREM</h1>
            <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur lacus mi. In hac habitasse platea dictumst. Mauris convallis ligula et velit egestas tempus. Pellentesque et sem efficitur, condimentum sem non, viverra sem.   </p>
       </div>
    </div>
    {/* Sección Derecha: Imagen */}
    <div className="flex-1 flex justify-end">
        <img 
            src="https://via.placeholder.com/200" 
            alt="Imagen de ejemplo" 
            style={{ width: '500px', height: '500px' }}  
            className="rounded-tl-xl shadow-lg relative transform translate-y-10"
        />
    </div>
</div>

     
      <div className="grid grid-cols-3 gap-4 mt-20 p-6">
        <div className="border p-4 min-h-60">
          <h2 className="text-xl">EDIFICIO I</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
        <div className="border p-4">
          <h2 className="text-xl">EDIFICIO II</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
        <div className="border p-4">
          <h2 className="text-xl">EDIFICIO III</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
        <div className="border p-4  min-h-60">
          <h2 className="text-xl">EDIFICIO I</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
        <div className="border p-4">
          <h2 className="text-xl">EDIFICIO II</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
        <div className="border p-4">
          <h2 className="text-xl">EDIFICIO III</h2>
          <button className="mt-2 bg-blue-500 text-white py-1 px-2">Ver pisos</button>
        </div>
       
        {/* Agrega más edificios según sea necesario */}
      </div>
    </div>
  );
};

export default Home;
