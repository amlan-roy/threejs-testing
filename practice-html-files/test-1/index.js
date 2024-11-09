const width = window.innerWidth;
const height = window.innerHeight;

// Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#5f5f5f");

// Camera
const fov = 45; // AKA Field of View
const aspect = width / height;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0, 10);

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Creating a cube and adding it to the scene
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial({ wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Rendering the scene
const container = document.querySelector("#threejs-container");
container.append(renderer.domElement);
renderer.render(scene, camera);

console.log("jabba");
