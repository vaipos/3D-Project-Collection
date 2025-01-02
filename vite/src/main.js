import { NotepadText } from 'lucide-react';
import * as THREE from 'three';
import {OrbitControls} from "three/addons/controls/OrbitControls.js";

const canvas = document.getElementById('canvas');

// Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;  // Adjust camera position

// Object
const geometry = new THREE.TorusGeometry(1,0.4,1000,64);
const material = new THREE.MeshPhysicalMaterial({color: '#4B00C7', clearcoat : 1});
const Torus = new THREE.Mesh(geometry, material);

const boxGeometry = new THREE.BoxGeometry(3, 1, 10);
const box_material = new THREE.MeshStandardMaterial({color: '#B4B4B3', emissive : "#B4B4B3"});
const box = new THREE.Mesh(boxGeometry, box_material);
box.position.set(0, -2, 0);

scene.add(Torus, box);

// Lighting
const spotLight = new THREE.SpotLight( 0XFFF0E7,100 );
spotLight.position.set( 1,2 ,0 );
spotLight.castShadow = true;

scene.add(spotLight);

// Render
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Add Orbit controls;
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = true;

// Animate
function animate() {
  requestAnimationFrame(animate);
  Torus.rotation.x += 0.01;
  Torus.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);

};

animate();
