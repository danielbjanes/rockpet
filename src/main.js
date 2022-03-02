import * as THREE from "three";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';
import { ObjectControls } from 'threeJS-object-controls';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import * as ROCK from "./rock"
import { CharacterControllerDemo } from './walkRock'
import './style.css'
import { retrieve, save } from "./data_management";

const RADIUS = 20;
var controls, mesh, camera, scene, renderer, text;
const COLOR = '#424242'
var numPolygons = retrieve('polygons') | 25
var ROCK_NAME = retrieve('name') // default name for rock

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
    if (obj) mesh = loader.parse(obj)

    if (!mesh) {
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
    const light = new THREE.AmbientLight(0xffffff, 0.6); // soft white light
    scene.add(light);
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

function rotateText() {
    if (text) { // Change however 
        text.rotation.y = Math.sin(Date.now() * 0.001) * Math.PI * 0.05;
        text.rotation.x = Math.tan(Date.now() * -0.001) * -Math.PI * -0.05;
        text.rotation.x = Math.cos(Date.now() * -0.001) * -Math.PI * -0.05;
    }
}

// Builds the sidebar for the rock interactions
function showGUI() {
    const gui = new GUI({ width: 200 });
    const rockProperties = {
        'Rock Name': ROCK_NAME,
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
    const rockName = gui.addFolder('Rock Name')
    const rockVitals = gui.addFolder('Rock Vitals')
    const rockActions = gui.addFolder('Rock Actions')
    const rockCustom = gui.addFolder('Rock Customizations')

    rockName.add(rockProperties, 'Rock Name').onChange(value => {
        ROCK_NAME = value;
        scene.remove(text)
        add3dText(ROCK_NAME);
        save('name', ROCK_NAME)
        scene.clear();
        initModel();
        initLight();
        initCamera();
        initControls();
    });

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

    rockActions.add(rockProperties, 'Feed Rock').on;
    rockActions.add(rockProperties, 'Walk Your Rock')

    rockCustom.add(rockProperties, 'Background', ['src/textures/default_background.jpg', 'src/textures/nature_background.jpg', 'src/textures/desert.jpg', 'src/textures/snowy_background.jpg'])
        .onChange(value => {
            initBackground(value);
        });

    rockCustom.addColor(rockProperties, 'Color', 255)
        .onChange(value => {
            if (mesh) {
                for (const m of mesh.children) {
                    m.material.color.set(value);
                }
                save('mesh', mesh)
            }
        })

    rockVitals.add(rockProperties, 'Hunger', 0, 100, 10)
        .listen()
        .disable();
    rockVitals.add(rockProperties, 'Stamina', 0, 100, 10)
        .listen()
        .disable();
    rockVitals.add(rockProperties, 'Mood')
        .listen()
        .disable()
}

// Helper function for getting rock mood
function getRockMood(stamina, hunger) {
    return ((stamina + hunger) / 2) >= 50 ? 'HAPPY' : 'SAD'
}

//Update controller fires every frame in loop
function animate() {
    window.onload = initalize;
    window.onresize = onWindowResize;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    rotateModel();
    rotateText();
}

function add3dText() {
    // Fonts
    const loader = new FontLoader();

    loader.load('src/font/Retronoid_Regular.json', function(font) {
        const base = new THREE.TextureLoader().load('src/textures/blue.jpg');

        const geometry = new TextGeometry(ROCK_NAME, {
            font: font,
            size: 5,
            height: 6,
            curveSegments: 12,
        });

        // Computed a bounding box that is used to help find the center
        // (used for centering text)
        geometry.computeBoundingBox();
        var center = new THREE.Vector3();
        geometry.boundingBox.getCenter(center);

        const material = new THREE.MeshPhongMaterial({

            map: base,
            alphaMap: base,
            reflectivity: 4,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
            transparent: true,
            opacity: 7,

        });

        text = new THREE.Mesh(geometry, material)

        text.position.x = 0 - center.x
        text.position.y = 20
        text.updateMatrixWorld();
        console.log(center)
        text.localToWorld(center)

        // This block is for overlaying a wireframe on top of the text
        // so it can look cooler (optional / removable)
        var geo = new THREE.EdgesGeometry(text.geometry); // or WireframeGeometry
        var mat = new THREE.LineBasicMaterial({ color: 0x222222 });
        var wireframe = new THREE.LineSegments(geo, mat);
        text.add(wireframe);

        scene.add(text)

    });
}

// Inital draw function, builds scene and all needed objects
function initalize() {
    initRender();
    initScene();
    initLight();
    initModel();
    initCamera();
    initControls();
    add3dText();

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