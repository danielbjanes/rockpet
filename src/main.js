import './style.css'

import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ConvexGeometry } from 'three/examples/jsm/geometries/ConvexGeometry';
import * as BufferGeometryUtils from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import GUI from 'https://cdn.jsdelivr.net/npm/lil-gui@0.16/+esm';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const texture = new THREE.TextureLoader().load( 'textures/rock_texture.jpg' );

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { map: texture } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function showGUI(){
  const gui = new GUI({width: 500});
  const rockProperties = {
    'Rock Name': 'Rocky the Rock',
    'Rock Weight': 4,
    'Feed Rock': function() { alert( 'Rock fed' ) },
    'Walk Your Rock': function() { alert( 'Rock walked' ) },
    'Textue': 'Texture 1'
  }

  gui.add( rockProperties, 'Rock Name' );
  gui.add( rockProperties, 'Rock Weight' );
  gui.add( rockProperties, 'Feed Rock');
  gui.add( rockProperties, 'Walk Your Rock')
  gui.add( rockProperties, 'Texture', [ 'Texture 1', 'Texture 2', 'Texture 3' ] )

}

function animate() {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
}
showGUI();
animate();
