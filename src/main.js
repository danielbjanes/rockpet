import './style.css'
import * as THREE from "three";

import Stats from 'three/examples/jsm/libs/stats.module'
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';
import {ObjectControls} from 'threeJS-object-controls';

import * as ROCK from "./rock"


var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

var mesh;

var dirLight = new THREE.SpotLight(0xffffff, 2, 0, 15, 1, 1);
dirLight.position.set(222, 222, 222);
let helper = new THREE.SpotLightHelper(dirLight, 5);
dirLight.add(helper);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var scene = new THREE.Scene();

function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 600);
}


function initScene() {
    scene = new THREE.Scene();
}

function initBackground(fileLocation) {
    const loader = new THREE.TextureLoader();
    loader.load(fileLocation, function(texture) {
        scene.background = texture;
    });

}

function initModel() {
    mesh = ROCK.generatePoints( '#AA00FF');
}




//User interaction plug in left mouse button press and hold rotation, right mouse button press and hold translation, scroll wheel zoom
var controls;

function initControls() {

    controls = new ObjectControls(camera, renderer.domElement, mesh);

    controls.setDistance(200, 1600); // sets the min - max distance able to zoom
    controls.setZoomSpeed(5); // sets the zoom speed ( 0.1 == slow, 1 == fast)
    controls.enableZoom(); // enables zoom
    controls.setRotationSpeed(0.05); // sets a new rotation speed for desktop ( 0.1 == slow, 1 == fast)
    controls.enableVerticalRotation(); // enables the vertical rotation
    controls.enableHorizontalRotation(); // enables the horizontal rotation

}


//Function triggered by window change
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function rotateModel() {
    if (mesh) {
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.001;
        mesh.rotation.z += 0.001;
        scene.add(mesh);
    }

}

// Builds the sidebar for the rock interactions


function showGUI() {
    const gui = new GUI({ width: 500 });
    const rockProperties = {
        'Rock Name': 'Rocky the Rock',
        'Rock Weight': 15,
        'Feed Rock': function() { alert('Rock fed') },
        'Walk Your Rock': function() { alert('Rock walked') },
        'Background': 'src/textures/default_background.jpg',
        Color: '#AA00FF'
    }

    gui.add(rockProperties, 'Rock Weight')
        .onChange(value => {
            polygons = value;
            scene.clear();
            ROCK.generatePoints(rockProperties.Color)
            initLight();
        });
        
    gui.add(rockProperties, 'Rock Name');
    gui.add(rockProperties, 'Feed Rock');
    gui.add(rockProperties, 'Walk Your Rock')
    gui.add(rockProperties, 'Background', ['src/textures/default_background.jpg','src/textures/nature_background.jpg', 'src/textures/desert.jpg', 'src/textures/snowy_background.jpg']).onChange(value => {
        initBackground(value);
    });
    gui.addColor( rockProperties, 'Color', 255 ).onChange(value => {
      scene.clear();
      ROCK.generatePoints(value);
      initLight();

    });

}


function initLight() {
    const light = new THREE.AmbientLight( 0xffffff, 0.5 ); // soft white light
    scene.add( light );
    scene.add(dirLight);
    scene.add(helper);
    // scene.add(spotlight2);
    // scene.add(helper2);
}


function animate() {
    //Update controller

    requestAnimationFrame(animate);
    window.onload = draw;
    window.onresize = onWindowResize;

    rotateModel();

    renderer.render(scene, camera);
    stats.update()

}


function draw() {
    initRender();
    initScene();
    initLight();
    initModel();
    initCamera();
    initControls();
    const loader = new THREE.TextureLoader(); // This is here simply to override the black default texture and put in a background
    loader.load('src/textures/default_background.jpg', function(texture) {
        scene.background = texture;
    });
    initBackground();


    window.onresize = onWindowResize;
}

const stats = Stats()
document.body.appendChild(stats.dom)
showGUI();
animate();
draw();
