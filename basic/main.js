import * as THREE from 'three';
 
// Steps to create 3D Model
// 1. Creatin the Sceneeeee

const scene = new THREE.Scene();
scene.background = new THREE.Color('#F0F0F0');

// 2. Add the Cameraaaa
// Parameters for camera init (FOV, size of view, near plane, far plane)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create and add an object
const geometry = new THREE.TorusGeometry(1,0.4,1000,64);
const material = new THREE.MeshPhysicalMaterial({color: '#4B00C7', clearcoat : 1});
const torus = new THREE.Mesh(geometry, material);
scene.add(torus);


// 4. Add some Lighting

const light = new THREE.SpotLight(0XFFFFFF, 25, 300);
light.position.set(1,1,1);
scene.add(light);

// 5. Setup Renderer

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 6. Animate the Scene
function animate() {
    requestAnimationFrame(animate);
    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;
    renderer.render(scene, camera);

}

animate();
