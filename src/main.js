import './style.css'
import * as THREE from "three";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

var renderer = new THREE.WebGLRenderer();

function initRender() {
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

function initCamera() {
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 600);
}

var scene = new THREE.Scene();

function initScene() {
    scene = new THREE.Scene();
}

var light;

function initLight() {
    scene.add(new THREE.AmbientLight(0x404040));

    light = new THREE.DirectionalLight(0xffffff);
    light.position.set(2, 2, 2);
    scene.add(light);
}

function initModel() {
    generatePoints();
}

//Methods to generate model calls
function generatePoints() {
    // Randomly generate a set of vertices
    var points = [];
    for (var i = 0; i < 20; i++) {
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
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: false });
    //Traversing the array to generate small ball points and adding them to the object
    points.forEach(function(point) {

        var spGeom = new THREE.SphereGeometry(2);
        var spMesh = new THREE.Mesh(spGeom, material);
        spMesh.position.copy(point); //Set the position of the current ball to the coordinates of the current point
        scene.add(spMesh);
    });
    // Add objects that hold all points to the scene
    scene.add(spGroup);

    // Use these points to instantiate a THREE.ConvexGeometry Geometry objects
    var hullGeometry = new ConvexGeometry(points);
    //Build model
    var hullMesh = createMesh(hullGeometry);
    //Add to scene
    scene.add(hullMesh);
}

function createMesh(geom) {

    // Instantiate a green, translucent material
    var meshMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.2 });
    meshMaterial.side = THREE.DoubleSide; //Set the material to be visible on both sides
    var wireFrameMat = new THREE.MeshBasicMaterial();
    wireFrameMat.wireframe = true; //Render materials as wireframes

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
    render();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {
    //Update controller
    requestAnimationFrame(animate);
    window.onload = draw;
    renderer.render(scene, camera);

}

function draw() {
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    initControls();

    animate();
    window.onresize = onWindowResize;
}

animate();
draw();