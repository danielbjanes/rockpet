import './style.css'
import * as THREE from "three";
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as SceneUtils from 'three/examples/jsm/utils/SceneUtils'

var polygons = 15

//Methods to generate model calls
export function generatePoints(colorProp) {
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


const createMesh = (geom, colorProp) => {

  // Instantiate a green, translucent material

  console.log(geom);
  var meshMaterial = createMaterial(colorProp);
  meshMaterial.side = THREE.DoubleSide; //Set the material to be visible on both sides
  var wireFrameMat = new THREE.MeshBasicMaterial();
  wireFrameMat.wireframe = true; //Render materials as wireframes

  // Assign both materials to geometry
  var mesh = SceneUtils.createMultiMaterialObject(geom, [meshMaterial, wireFrameMat]);

  return mesh;
}


const createMaterial = (colorProp) => {
  // create a texture loader.
  const textureLoader = new THREE.TextureLoader();

  // load a texture
  const texture = textureLoader.load(
      'src/textures/rock_texture.jpg',
  );

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new THREE.MeshStandardMaterial( { color: colorProp  } );

  return material;
}