import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

// приклад 1

//сцена
const scene = new THREE.Scene();

//камера
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10

//рендер
const renderer = new THREE.WebGLRenderer({
    alpha: true, //прозрачний фон
    antialias: true //зглажені 3д 
})


// ? создаем в боді
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// : Находим div с нужным id и добавляем в него рендерер

const container = document.getElementById('table-3D-obj');
container.appendChild(renderer.domElement);


//світло
const aLight = new THREE.AmbientLight(0x404040, 1.2);
scene.add(aLight);

const pLight = new THREE.PointLight(0xFFFFFF, 1.2);
pLight.position.set(0,-3,7);
scene.add(pLight);


// Добавляем некоторые базовые объекты на сцену
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
const sphereMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.x = -3;
scene.add(sphere);


const planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10);
const planeMaterial = new THREE.MeshPhongMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -Math.PI / 2;
scene.add(plane);

// Добавляем управление орбитой для перемещения камеры
const controls = new OrbitControls(camera, renderer.domElement);

//our 3d-obj
let loader = new GLTFLoader();

loader.load('/untitled.gltf',function(gltf){
        const mesh = gltf.scene;

    scene.add(mesh);
}); 

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
