import './style.css'
import * as THREE from "three";

import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module'
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';


var renderer = new THREE.WebGLRenderer();
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

var polygons = 15
var mesh;

var dirLight = new THREE.SpotLight(0xffffff, 2, 0, 15, 1, 1);
dirLight.position.set(222, 222, 222);
let helper = new THREE.SpotLightHelper(dirLight, 5);
dirLight.add(helper);

var spotlight2 = new THREE.SpotLight(0xffffff, 1, 0, 15, 1, 1);
spotlight2.position.set(-400, -600, 100);
let helper2 = new THREE.SpotLightHelper(spotlight2, 0xFF0000);
spotlight2.add(helper2);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var scene = new THREE.Scene();

function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(300, 100, 600);
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
    generatePoints('#AA00FF');

}

//Methods to generate model calls
function generatePoints(colorProp) {
    // Randomly generate a set of vertices
    var points = [];
    for (var i = 0; i < polygons; i++) {
        //The position of the coordinate point of the xyz axis will be randomly generated within + - 150
        var randomX = -150 + Math.round(Math.random() * 300);
        var randomY = -150 + Math.round(Math.random() * 300);
        var randomZ = -150 + Math.round(Math.random() * 300);

        //Create a coordinate point and add it to the array
        points.push(new THREE.Vector3(randomX, randomY, randomZ));
    }

    //Declare a mesh object that holds all points
    var spGroup = new THREE.Object3D();
    //Declare a mesh base material
    var material = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: false });
    //Traversing the array to generate small ball points and adding them to the object
    points.forEach(function(point) {

        var spGeom = new THREE.SphereGeometry(1);

        var spMesh = new THREE.Mesh(spGeom, material);
        spMesh.position.copy(point); //Set the position of the current ball to the coordinates of the current point
        //scene.add(spMesh); uncomment this to see the point for the convex shape
    });
    // Add objects that hold all points to the scene
    scene.add(spGroup);

    // Use these points to instantiate a THREE.ConvexGeometry Geometry objects
    var hullGeometry = new ConvexGeometry(points);
    //Build model
    var hullMesh = createMesh(hullGeometry, colorProp);
    //Add to scene
    mesh = hullMesh;
}


function createMaterial(colorProp) {
    // create a texture loader.
    const textureLoader = new THREE.TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        'rock_texture.jpg',
    );
    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new THREE.MeshStandardMaterial({ color: colorProp });


    return material;
}

function createMesh(geom, colorProp) {

    // Instantiate a green, translucent material

    console.log(geom);
    var meshMaterial = createMaterial(colorProp);
    meshMaterial.side = THREE.DoubleSide; //Set the material to be visible on both sides
    var wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true; //Render materials as wireframes




    ////////////////////////




    // Assign both materials to geometry
    var mesh = SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

    return mesh;
}

//User interaction plug in left mouse button press and hold rotation, right mouse button press and hold translation, scroll wheel zoom
var controls;

function initControls() {

    controls = new OrbitControls(camera, renderer.domElement);

    // If you use the animate method, delete this function
    //controls.addEventListener( 'change', render );
    // Whether there is inertia in the meaning of damping or rotation when the animation is recycled
    controls.enableDamping = true;
    //Dynamic damping coefficient is the mouse drag rotation sensitivity
    //controls.dampingFactor = 0.25;
    //Can I zoom
    controls.enableZoom = true;
    //Auto rotate or not
    controls.autoRotate = true;
    //Set the maximum distance between the camera and the origin
    controls.minDistance = 200;
    //Set the maximum distance between the camera and the origin
    controls.maxDistance = 1600;
    //Enable right drag
    controls.enablePan = true;
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
        'Background': 'default_background.jpg',
        Color: '#AA00FF'
    }

    gui.add(rockProperties, 'Rock Weight')
        .onChange(value => {
            polygons = value;
            scene.clear();
            generatePoints(rockProperties.Color)
            initLight();
        });
    gui.add(rockProperties, 'Rock Name');
    gui.add(rockProperties, 'Feed Rock');
    gui.add(rockProperties, 'Walk Your Rock')
    gui.add(rockProperties, 'Background', ['default_background.jpg', 'nature_background.jpg', 'desert.jpg', 'snowy_background.jpg']).onChange(value => {
        initBackground(value);
    });
    gui.addColor(rockProperties, 'Color', 255).onChange(value => {
        scene.clear();
        generatePoints(value);
        initLight();

    });

}



function initLight() {
    scene.add(dirLight);
    scene.add(helper);
    scene.add(spotlight2);
    scene.add(helper2);
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
    loader.load('default_background.jpg', function(texture) {
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