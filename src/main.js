import * as THREE from "three";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';
import {ObjectControls} from 'threeJS-object-controls';

import * as ROCK from "./rock"
import {CharacterControllerDemo} from './walkRock'
import './style.css'
import { retrieve, save } from "./data_management";

const RADIUS = 20;
var controls, mesh, camera, scene, renderer;
const COLOR = '#424242'
var numPolygons = retrieve('polygons') | 25

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

    const loader = new THREE.ObjectLoader();
    const obj = retrieve('mesh')
    if(obj) mesh = loader.parse(obj)

    if(!mesh) {
        mesh = ROCK.generatePoints(COLOR, RADIUS, numPolygons);
        save('mesh', mesh)
    }

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
    // const helper = new THREE.SpotLightHelper(dirLight, 5);
    // dirLight.add(helper);
    // scene.add(helper);

    // Background light
    const light = new THREE.AmbientLight( 0xffffff, 0.6 ); // soft white light
    scene.add( light );
}


// Create camera controls for the mesh
function initControls() {

    controls = new ObjectControls(camera, renderer.domElement, mesh);
    controls.setDistance(50, 150); // sets the min - max distance able to zoom
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
    const gui = new GUI({ width: 200 });
    const rockProperties = {
        'Rock Name': 'Rocky the Rock',
        'Rock Weight': numPolygons,
        'Feed Rock': function() {
          alert('Rock fed');
          rockProperties.Hunger += 10;
          rockProperties.Mood = getRockMood(rockProperties.Stamina, rockProperties.Hunger)
        },
        'Walk Your Rock': function() {
          new CharacterControllerDemo(mesh);
          rockProperties.Stamina -= 10
          rockProperties.Mood = getRockMood(rockProperties.Stamina, rockProperties.Hunger)
        },
        'Background': 'src/textures/default_background.jpg',
        'Hunger': 50,
        'Stamina': 50,
        'Mood': 'HAPPY',
        Color: COLOR
    }
    const rockVitals = gui.addFolder('Rock Vitals')
    const rockActions = gui.addFolder('Rock Actions')
    const rockCustom = gui.addFolder('Rock Customizations')

    rockVitals.add(rockProperties, 'Rock Weight')
        .onChange(value => {
            numPolygons = value;
            mesh = ROCK.generatePoints(COLOR, RADIUS, numPolygons);
            save('mesh', mesh)
            save('polygons', numPolygons)
            scene.clear();
            initModel();
            initLight();
            initCamera();
            initControls();
        });
    rockVitals.add(rockProperties, 'Rock Name');

    rockActions.add(rockProperties, 'Feed Rock').on;
    rockActions.add(rockProperties, 'Walk Your Rock')

    rockCustom.add(rockProperties, 'Background',
        ['src/textures/default_background.jpg','src/textures/nature_background.jpg', 'src/textures/desert.jpg', 'src/textures/snowy_background.jpg'])
            .onChange(value => {
                initBackground(value);
    });

    rockCustom.addColor( rockProperties, 'Color', 255 )
        .onChange(value => {
            if(mesh) {
                for (const m of mesh.children) {
                    m.material.color.set( value );
                }
                save('mesh', mesh)
            }
    })

    rockVitals.add( rockProperties, 'Hunger', 0, 100, 10 )
        .listen()
        .disable();
    rockVitals.add( rockProperties, 'Stamina', 0, 100, 10 )
        .listen()
        .disable();
    rockVitals.add( rockProperties, 'Mood')
        .listen()
        .disable()
}

// Helper function for getting rock mood
function getRockMood(stamina, hunger){
  return ((stamina + hunger) / 2) >= 50 ? 'HAPPY' : 'SAD'
}

//Update controller fires every frame in loop
function animate() {
    window.onload = initalize;
    window.onresize = onWindowResize;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    rotateModel();
}


// Inital draw function, builds scene and all needed objects
function initalize() {
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

initalize();
showGUI();
animate();
