// PanoramicViewer.js
import React, { useEffect, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const View3d = ({ imageUrl }) => {
    const [isLoading, setIsLoading] = useState(true); // Estado para el mensaje de carga

    useEffect(() => {
        // Crear el contenedor para Three.js
        const container = document.getElementById('panoramic-container');
        let scene, camera, renderer, controls;

        const init = () => {
            // Crear la escena
            scene = new THREE.Scene();

            // Crear la cámara
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 0.1);

            // Crear el renderizador
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            container.appendChild(renderer.domElement);

            // Cargar la textura panorámica
            const loader = new THREE.TextureLoader();
            loader.load(
                imageUrl,
                (texture) => {
                    const geometry = new THREE.SphereGeometry(500, 60, 40); // Esfera para imagen 360
                    const material = new THREE.MeshBasicMaterial({
                        map: texture,
                        side: THREE.DoubleSide,
                    });
                    const sphere = new THREE.Mesh(geometry, material);
                    scene.add(sphere);

                    // Una vez que la textura se haya cargado, ocultar el mensaje de carga
                    setIsLoading(false);
                },
                undefined, // Progreso de carga (opcional)
                (error) => {
                    console.error('Error cargando la textura:', error);
                    // También puedes manejar el error aquí si es necesario
                }
            );

            // Agregar los controles de órbita
            controls = new OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true; // Habilita la inercia en el movimiento
            controls.dampingFactor = 0.05;
            controls.enableZoom = false;  // Deshabilitar zoom
            controls.enablePan = false;   // Deshabilitar paneo
            controls.rotateSpeed = 0.3;  // Ajusta la velocidad de rotación

            // Control de resize
            window.addEventListener('resize', onWindowResize, false);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            requestAnimationFrame(animate);
            if (controls) controls.update(); // Actualiza los controles en cada frame si están definidos
            renderer.render(scene, camera);
        };

        init();
        animate();

        return () => {
            // Limpiar el canvas cuando el componente se desmonte
            container.removeChild(renderer.domElement);
        };
    }, [imageUrl]);

    return (
        <div id="panoramic-container" style={{ width: '100%', height: '100vh', position: 'relative' }}>
            {isLoading && (
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    Cargando...
                </div>
            )}
        </div>
    );
};

export default View3d;
