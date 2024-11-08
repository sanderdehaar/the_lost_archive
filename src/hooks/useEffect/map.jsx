import { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; 
import SceneInit from '../../lib/SceneInit'; 

function ThreeMap() {
  useEffect(() => {
    const sceneInitializer = new SceneInit('map');
    sceneInitializer.initialize();
    sceneInitializer.animate();

    let model = null; 
    const gltfLoader = new GLTFLoader(); 

    // Array of monster image paths
    const monsterImages = [
      '../../../public/models/test/materials/monster_one.webp',
      '../../../public/models/test/materials/monster_two.webp',
    ];

    // Load the GLTF model
    gltfLoader.load('../../../public/models/test/scene.gltf', (gltfScene) => {
      model = gltfScene.scene; 

      // Log all child names to troubleshoot
      model.traverse((child) => {
        console.log('Child name:', child.name); // Log child names
        
        // Check for monsters and worlds
        if (child.isMesh && (/^monster(\d{3})?$/.test(child.name) || /^world(\d{3})?$/.test(child.name))) {
          console.log('Found:', child);
          
          // Get the index for the monster images based on the child name
          const index = parseInt(child.name.replace(/^(monster|world)/, ''), 10) || 0; // Extract number or default to 0
          
          // Load the image texture if it exists in the array
          if (/^monster/.test(child.name) && index < monsterImages.length) {
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(
              monsterImages[index], // Use the corresponding monster image
              (loadedTexture) => {
                child.material.map = loadedTexture; // Assign the texture to the existing material
                child.material.needsUpdate = true; // Mark the material for an update
                console.log(`Loaded texture for ${child.name}:`, monsterImages[index]);
              },
              undefined, // No onProgress function
              (error) => {
                console.error('An error occurred while loading the texture:', error);
              }
            );
          } else if (/^world/.test(child.name)) {
            // Apply opacity to world models
            child.material.transparent = true; // Enable transparency
            child.material.opacity = 0.3; // Set opacity value (0.0 to 1.0)
            console.log(`Set opacity for ${child.name}`);
          } else {
            console.warn(`No texture found for ${child.name}. Index ${index} exceeds array length.`);
          }
        }
      });

      // Set the model's transformations
      model.rotation.y = Math.PI / 8;
      model.position.y = 0;
      model.scale.set(0.36, 0.36, 0.36); 

      // Add the loaded model to the scene
      sceneInitializer.scene.add(model);
    }, undefined, (error) => {
      console.error('An error occurred while loading the model:', error);
    });

    // Animation function
    const animate = () => {
      if (model) {
        model.rotation.y += 0.001; 
      }
      requestAnimationFrame(animate); 
    };
    animate();
  }, []); 

  return (
    <div>
      <canvas id="map" />
    </div>
  );
}

export default ThreeMap;