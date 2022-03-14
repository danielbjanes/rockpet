import * as THREE from "three";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils'

/**
 * Methods to generate model calls
 * @param {*} colorProp Mesh material and color
 * @param {*} radius Radius of the object
 * @param {*} polygons Polygon count for the rock
 * @returns Hull Mesh of the rock
 */
export function generatePoints(colorProp, radius, polygons) {

    // Randomly generate a set of vertices
    var points = [];
    for (let i = 0; i < polygons; i++) {
        const randomX = -radius / 2 + Math.round(Math.random() * radius);
        const randomY = -radius / 2 + Math.round(Math.random() * radius);
        const randomZ = -radius / 2 + Math.round(Math.random() * radius);

        //Create a coordinate point and add it to the array
        points.push(new THREE.Vector3(randomX, randomY, randomZ));
    }

    //Declare a mesh object that holds all points
    var spGroup = new THREE.Object3D();
    var material = new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: false });

    points.forEach(
        function(point) {
            var spGeom = new THREE.SphereGeometry(1);

            var spMesh = new THREE.Mesh(spGeom, material);
            spMesh.position.copy(point); //Set the position of the current ball to the coordinates of the current point

            //scene.add(spMesh); uncomment this to see the point for the convex shape
        });

    // Add objects that hold all points to the scene
    // scene.add(spGroup);

    var hullGeometry = new ConvexGeometry(points);
    var hullMesh = createMesh(hullGeometry, colorProp);

    return hullMesh
}


/**
 * Creates the mesh for the rock
 * @param {*} geom Geometry of the rock
 * @param {*} colorProp Color of the rock
 * @returns mesh of the rock
 */
const createMesh = (geom, colorProp) => {

    const meshMaterial = createMaterial(colorProp);
    meshMaterial.side = THREE.DoubleSide; //Set the material to be visible on both sides

    // const wireFrameMat = new THREE.MeshStandardMaterial( { color: "black" } );
    // wireFrameMat.wireframe = true; //Render materials as wireframes

    // Assign both materials to geometry
    const mesh = SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

    return mesh;
}

/**
 * Grabs the texture 
 * @param {*} colorProp Color of the rock 
 * @returns 
 */
const createMaterial = (colorProp) => {
    // create a texture loader.
    const textureLoader = new THREE.TextureLoader();

    // load a texture
    const texture = textureLoader.load(
        'src/textures/rock_texture.jpg',
    );

    // create a "standard" material using
    // the texture we just loaded as a color map
    const material = new THREE.MeshStandardMaterial({ color: colorProp });

    return material;
}


export function changeMeshColor(mesh, value) {



    return mesh;
}