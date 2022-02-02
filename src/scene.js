import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js'

const scene = new THREE.Scene();
const canvas = document.querySelector('.webgl')
const texture = new THREE.TextureLoader().load('textures/rock_texture.jpg');

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
    map: texture
})

const cube = new THREE.Mesh(geometry, material)

scene.add(cube)

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);

camera.position.set(0, 1, 5)
scene.add(camera)

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera)
}

animate();