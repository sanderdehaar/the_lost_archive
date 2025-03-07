import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
  constructor(canvasId) {
    // Core components to initialize Three.js app.
    this.scene = undefined;
    this.camera = undefined;
    this.renderer = undefined;

    // Camera params;
    this.fov = 45;
    this.nearPlane = 1;
    this.farPlane = 1000;
    this.canvasId = canvasId;

    // Additional components.
    this.clock = undefined;
    // this.stats = undefined;
    this.controls = undefined;

    // Lighting is basically required.
    this.ambientLight = undefined;
    this.directionalLight = undefined;
  }

  initialize() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      this.nearPlane,
      this.farPlane
    );
    this.camera.position.z = 48;

    const canvas = document.getElementById(this.canvasId);
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.clock = new THREE.Clock();
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    // Disable panning and zooming
    this.controls.enablePan = false; // Disable panning
    this.controls.enableZoom = false; // Disable zooming
    this.controls.minDistance = 48; // Set minimum distance (close to the globe)
    this.controls.maxDistance = 48; // Set maximum distance (locked at this distance)

    // Optionally limit vertical rotation
    this.controls.minPolarAngle = 0; // Allow full vertical rotation
    this.controls.maxPolarAngle = Math.PI; // Allow full vertical rotation

    // this.stats = Stats();
    // document.body.appendChild(this.stats.dom);

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.ambientLight.castShadow = true;
    this.scene.add(this.ambientLight);

    this.directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    this.directionalLight.position.set(0, 32, 64);
    this.scene.add(this.directionalLight);

    window.addEventListener('resize', () => this.onWindowResize(), false);

    this.loader = new THREE.TextureLoader();
    this.scene.background = new THREE.Color(0x0A1514);
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
    // this.stats.update();
    this.controls.update();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}