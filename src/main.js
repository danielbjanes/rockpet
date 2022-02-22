import './style.css'
import * as THREE from "three";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';
import {ObjectControls} from 'threeJS-object-controls';

import * as ROCK from "./rock"

var controls;
var mesh;
var camera;
var scene;
var renderer;



// Create Scene
function initScene() {
    scene = new THREE.Scene();
}


// Create Renderer
function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


// Create Camera
function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 100);
    // camera.lookAt(new THREE.Vector3(0,,0)); // Set look at coordinate like this
}


// Create Rock model
function initModel() {
    mesh = ROCK.generatePoints('#AA00FF', 20, 25);
    scene.add(mesh);
}


// Create background image
function initBackground(fileLocation) {
    const loader = new THREE.TextureLoader();
    loader.load(fileLocation, function(texture) {
        scene.background = texture;
    });

}

// Create lights
function initLight() {

    //Spot light
    const dirLight = new THREE.SpotLight(0xffffff, 2, 0, 15, 1, 1);
    dirLight.position.set(0, 100, 100);
    scene.add(dirLight);
    
    // Wireframe of light
    const helper = new THREE.SpotLightHelper(dirLight, 5);
    dirLight.add(helper);
    scene.add(helper);

    // Background light
    const light = new THREE.AmbientLight( 0xffffff, 0.6 ); // soft white light
    scene.add( light );
}


// Create camera controls for the mesh
function initControls() {

    controls = new ObjectControls(camera, renderer.domElement, mesh);
    controls.setDistance(50, 2000); // sets the min - max distance able to zoom
    controls.setZoomSpeed(10); // sets the zoom speed ( 0.1 == slow, 1 == fast)
    controls.enableZoom(); // enables zoom
    controls.setRotationSpeed(0.1); // sets a new rotation speed for desktop ( 0.1 == slow, 1 == fast)
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


//Update controller fires every frame in loop
function animate() {
    requestAnimationFrame(animate);
    window.onload = draw;
    window.onresize = onWindowResize;

    rotateModel();

    renderer.render(scene, camera);

}


// Inital draw function, builds scene and all needed objects
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

draw();
showGUI();
animate();
