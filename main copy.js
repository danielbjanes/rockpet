import * as THREE from "three";
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';
import { ObjectControls } from './ObjectControls';
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

import * as ROCK from "./rock"
// import { walkRock } from './walkRock'
// import { feedRock } from "./feedRock";
import './style.css'
import { retrieve, save } from "./data_management";

const RADIUS = 20;
const COLOR = '#424242'


/**
 * Controls - Orbit controls
 * Mesh - Object (Rock) mesh
 * Camera - Camera object
 * Scene - Scene that all objects are displayed on
 * Renderer - Used for processing lighting
 * Text - Contains the Rock Name
 */
var controls, mesh, camera, scene, renderer, text, font;
font = retrieve('font') ? retrieve('font') : 'src/font/Retronoid_Regular.json'
var numPolygons = retrieve('polygons') | 25
var meshName = retrieve('name') ? retrieve('name') : 'Rocky'

/**
 * Initializes the scene
 */
function initScene() {
    scene = new THREE.Scene();
}


/**
 * Initializes the renderer (WebGL) and grabs the window size
 */
function initRender() {
    // Uses WebGL to render all items with THREE JS onto the web browser.
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
}


/**
 * Initializes the camera setting and applies a fixed position
 * based on the web browser window
 */
function initCamera() {
    // Sets a specific camera perspective that will center the camera onto the rock
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 0, 100);
    // camera.lookAt(new THREE.Vector3(0,,0)); // Set look at coordinate like this
}


/**
 * Initializes the custom model for the rock.
 * Implements an object loader and adds to scene
 */
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


/**
 * Initializes the standard background
 * @param {*} fileLocation The location of the textures for the background
 */
export function initBackground(fileLocation) {
    // Loader used to grab a texture and then apply it.
    const loader = new THREE.TextureLoader();
    loader.load(fileLocation, function(texture) {
        scene.background = texture;
    });

}

/**
 * Initializes the lighting for the scenes by ading a spotlight and amvient lighting
 */
function initLight() {

    //Spot light
    const dirLight = new THREE.SpotLight(0xffffff, 2, 0, 15, 1, 1); // color, intensity, distance, angle, penumbra, decay
    dirLight.position.set(0, 100, 100); // Provide nice shadows at this angle
    scene.add(dirLight);

    // Background light
    const light = new THREE.AmbientLight(0xffffff, 0.6); // soft white light
    scene.add(light);
}


/**
 * Initializes the orbit controls so the user can zoom, rotate, set distance.
 * Optional to drag if added.
 */
function initControls() {

    controls = new ObjectControls(camera, renderer.domElement, mesh);
    controls.setDistance(50, 150); // sets the min - max distance able to zoom
    controls.setZoomSpeed(10); // sets the zoom speed ( 0.1 == slow, 1 == fast)
    controls.enableZoom(); // enables zoom
    controls.setRotationSpeed(0.1); // sets a new rotation speed for desktop ( 0.1 == slow, 1 == fast)
    controls.enableVerticalRotation(); // enables the vertical rotation
    controls.enableHorizontalRotation(); // enables the horizontal rotation
}


/**
 * Resizes the environment to fit within the browsers width and height
 */
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);

}

/**
 * Continuous rotation of the rock to provide
 * 'life' to the model
 */
function rotateModel() {
    if (mesh) {
        mesh.rotation.x += 0.001;
        mesh.rotation.y += 0.001;
        mesh.rotation.z += 0.001;
    }
}

/**
 * Continuous rotation of the text {Rock Name}
 * to provide FUNK
 */
function rotateText() {
    if (text) { // Change however 
        text.rotation.y = Math.sin(Date.now() * 0.001) * Math.PI * 0.01; // These allow for the constant wave-form spinning 
        text.rotation.x = Math.tan(Date.now() * -0.001) * -Math.PI * -0.01; // For that funky retro look
        text.rotation.x = Math.cos(Date.now() * -0.001) * -Math.PI * -0.01;
    }
}

/**
 * used for rebuilding the scene and removing duplicate line calls
 */
function rebuildScene() {
    scene.clear();
    initModel();
    initLight();
    initCamera();
    initControls();
}

const backgrounds = ['src/textures/default_background.jpg',
'src/textures/nature_background.jpg',
'src/textures/desert.jpg',
'src/textures/snowy_background.jpg'
]

/**
 * Function that contains and creates all GUI elements along with lambda functionality
 */
function showGUI() {
    const gui = new GUI({ width: 200 });
    const rockProperties = {
        'Rock Name': meshName,
        'Rock Weight': numPolygons,
        'Feed Rock': function() {
            if (rockProperties.Hunger < 95) {
                new feedRock();
                rockProperties.Hunger += 10;
                rockProperties.Stamina += 5;
                rockProperties.Mood = getRockMood(rockProperties.Stamina, rockProperties.Hunger)
            } else {
                alert('Rock is full')
            }
        },
        'Walk Your Rock': function() {
            if (rockProperties.Stamina > 5) {
                new walkRock();
                rockProperties.Stamina -= 10;
                rockProperties.Hunger -= 5;
                rockProperties.Mood = getRockMood(rockProperties.Stamina, rockProperties.Hunger);
                initBackground(backgrounds[randomNum(0, 3)])
            } else {
                alert('Rock is tired')
            }
        },
        'Stop Walking Your Rock': function() {
            new stopWalk()
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
        meshName = value;
        save('name', meshName)

        rebuildScene();
        add3dText(font);
    });

    rockName.add(rockProperties, 'Font', ['src/font/NM_Regular.json',
            'src/font/Retronoid_Regular.json',
            'src/font/Rubik_Bold.json'
        ])
        .onChange(value => {

            font = value
            save('font', font)

            rebuildScene();
            add3dText(font);
        });

    rockVitals.add(rockProperties, 'Rock Weight')
        .onChange(value => {
            numPolygons = value;
            mesh = ROCK.generatePoints(COLOR, RADIUS, numPolygons);
            save('mesh', mesh)
            save('polygons', numPolygons)

            rebuildScene();
            add3dText(font);
        });

    rockActions.add(rockProperties, 'Feed Rock').on;
    rockActions.add(rockProperties, 'Walk Your Rock');
    rockActions.add(rockProperties, 'Stop Walking Your Rock')

    rockCustom.add(rockProperties, 'Background', ['src/textures/default_background.jpg',
            'src/textures/nature_background.jpg',
            'src/textures/desert.jpg',
            'src/textures/snowy_background.jpg'
        ])
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

/**
 * Helper function for getting rock mood
 * @param {*} stamina The rocks stamina
 * @param {*} hunger The rocks hunger
 * @returns Happy or Sad
 */
function getRockMood(stamina, hunger) {
    return ((stamina + hunger) / 2) >= 50 ? 'HAPPY' : 'SAD'
}

/**
 * Function used for creating and rendering a custom set of 3D text.
 * Used in displaying the name of the rock to the user.
 */
function add3dText(value) {
    // Fonts
    const loader = new FontLoader();

    // Loads a JSON that contains the data of a .tff file.
    // Used to specify a font for the 3D text.
    loader.load(value, function(font) {
        const base = new THREE.TextureLoader().load('src/textures/blue.jpg');

        const geometry = new TextGeometry(meshName, {
            font: font,
            size: 5,
            height: 6,
            curveSegments: 12,
        });

        // Computes a bounding box that is used to help find the center
        // Just a box around the constructed object
        // (used for centering text)
        geometry.computeBoundingBox();
        var center = new THREE.Vector3(); // a vector that will contain the center of the box
        geometry.boundingBox.getCenter(center); //Grabs the center of that bounding box

        const material = new THREE.MeshPhongMaterial({ // Mesh Phong is just a certain type of material. Can be changed
            // Change the look and feel of the 3d TEXT
            map: base,
            alphaMap: base,
            reflectivity: 4,
            polygonOffset: true,
            polygonOffsetFactor: 1,
            polygonOffsetUnits: 1,
            transparent: true,
            opacity: 7,

        });

        text = new THREE.Mesh(geometry, material) // Applying both the geometry of the text and material for display

        text.position.x = 0 - center.x // Removes the center distance from the x coordinate to center on screen compared to rock
        text.position.y = 20
        text.updateMatrixWorld(); // Updates global transform of the object and its children.
        text.localToWorld(center) // Updates the vector from local space to world space.

        // This block is for overlaying a wireframe on top of the text
        // so it can look cooler (optional / removable)
        var geo = new THREE.EdgesGeometry(text.geometry); // or WireframeGeometry
        var mat = new THREE.LineBasicMaterial({ color: 0x222222 });
        var wireframe = new THREE.LineSegments(geo, mat);

        text.add(wireframe); // This is just for flavor. Can be removed.
        scene.add(text)

    });
}

function feedRock() {
    const sphereGeo = new THREE.SphereGeometry(1, 100, 60);
    const spherMat = new THREE.MeshStandardMaterial({
        color: COLOR,
        metalness: 0,
        roughness: 0
    });
    const sphereMesh = new THREE.Mesh(sphereGeo, spherMat);
    sphereMesh.position.x = randomNum(-70, 70);
    sphereMesh.position.y = randomNum(-40, 40);
    scene.add(sphereMesh);
    setTimeout(function() {
        mesh.position.x = sphereMesh.position.x;
        mesh.position.y = sphereMesh.position.y;
        scene.remove(sphereMesh);
    }, 1000);
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

    var xSpeed = 5;
    var ySpeed = 5;
    var rotateSpeed = 0.5;

function walkRock() {
    document.addEventListener("keydown", onDocumentKeyDown, false);
}
  
function stopWalk() {
    document.removeEventListener("keydown", onDocumentKeyDown, false);
}

function onDocumentKeyDown(event) {
    var keyCode = event.which;
    if (keyCode == 87) {
        mesh.position.y += ySpeed;
        mesh.rotation.x -= rotateSpeed;
    } else if (keyCode == 83) {
        mesh.position.y -= ySpeed;
        mesh.rotation.x += rotateSpeed;
    } else if (keyCode == 65) {
        mesh.position.x -= xSpeed;
        mesh.rotation.y -= rotateSpeed;
    } else if (keyCode == 68) {
        mesh.position.x += xSpeed;
        mesh.rotation.y += rotateSpeed;
    } else if (keyCode == 32) {
        mesh.position.set(0, 0, 0);
        document.removeEventListener("keydown", onDocumentKeyDown, false);
    }
    };

/**
 * Animation function update controller that updates each frame
 */
function animate() {
    window.onresize = onWindowResize;

    requestAnimationFrame(animate);
    renderer.render(scene, camera);

    rotateModel();
    rotateText();
}


/**
 * Inital draw function, builds scene and all needed objects
 */
function initalize() {
    initRender();
    initScene();
    initLight();
    initModel();
    initCamera();
    initControls();
    add3dText(font);

    const loader = new THREE.TextureLoader(); // This is here simply to override the black default texture and put in a background
    loader.load('src/textures/default_background.jpg', function(texture) {
        scene.background = texture;
    });
    initBackground();

    window.onresize = onWindowResize;
}

// Required to get initial set display
initalize();

// Required to get initial display
showGUI();

// Required to get animations to display
animate();