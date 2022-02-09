import './style.css'
import * as THREE from "three";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import Stats from 'three/examples/jsm/libs/stats.module'

var renderer = new THREE.WebGLRenderer();
var mesh;
var mesh_points;

//Texture for loading images and wrapping onto object
const texture = new THREE.TextureLoader().load('textures/rock_texture.jpg');



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

function initBackground() {
    const loader = new THREE.TextureLoader();
    loader.load('textures/nature_background.jpg', function(texture) {
        scene.background = texture;
    });

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
    for (var i = 0; i < 15; i++) {
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
    mesh = hullMesh;
}

function createMaterial() {
    // create a texture loader.
    const textureLoader = new THREE.TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        'textures/rock_texture.jpg',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new THREE.MeshStandardMaterial({
        map: texture,
    });

    return material;
}

function createMesh(geom) {

    // Instantiate a green, translucent material

    console.log(geom);
    var meshMaterial = createMaterial();
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

    //mesh.rotation.x += 0.01;
    //mesh.rotation.y += 0.01;


    // increase the cube's rotation each frame
    scene.rotation.x += 0.001;
    scene.rotation.y += 0.001;
    scene.rotation.z += 0.001;
}

function animate() {
    //Update controller

    requestAnimationFrame(animate);
    window.onload = draw;
    window.onresize = onWindowResize;
    rotateModel(); // TODO - I am rotating the entire SCENE. This is probably not a great idea later on
    renderer.render(scene, camera);
    stats.update()

}

function draw() {
    initRender();
    initScene();
    initCamera();
    initLight();
    initModel();
    initControls();
    initBackground();

    animate();
    window.onresize = onWindowResize;
}

const stats = Stats()
document.body.appendChild(stats.dom)
animate();
draw();