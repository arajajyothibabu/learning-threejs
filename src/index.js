/**
 * Created by jyothi on 16/9/17.
 */
import * as THREE from 'three';
import { line, sphere, text } from './learning';

// Get the DOM element to attach to
const container = document.querySelector('#container');

// Set the scene size.
const WIDTH = container.clientWidth || 400;
const HEIGHT = container.clientHeight || 300;

// Set some camera attributes.
const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

// Create a WebGL renderer, camera
// and a scene
const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);

camera.position.set(0, 0, 100);
camera.lookAt(new THREE.Vector3(0, 0, 0));

const scene = new THREE.Scene();

// Add the camera to the scene.
scene.add(camera);

// Start the renderer.
renderer.setSize(WIDTH, HEIGHT);

// Attach the renderer-supplied
// DOM element.
container.appendChild(renderer.domElement);

// create a point light
const pointLight = new THREE.PointLight(0xFFFFFF);

// set its position
pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

// add to the scene
scene.add(pointLight);

//add the sphere to the scene.
scene.add(sphere);

//add line to scene
scene.add(line);

//add texture to scene
scene.add(text);

//rendering to screen
renderer.render(scene, camera);

/*function update () {
    // Draw!
    renderer.render(scene, camera);

    // Schedule the next frame.
    requestAnimationFrame(update);
}

// Schedule the first frame.
requestAnimationFrame(update);*/