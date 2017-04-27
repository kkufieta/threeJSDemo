// To be able to display anything with three.js, we need three
// things: A scene, a camera, and a renderer so we can render
// the scene with the camera.

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,
                                         window.innerWidth / window.innerHeight,
                                         0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

var controls = new THREE.TrackballControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({
  color: 0x86bee0
});

var martian = new THREE.TextureLoader().load("img/martian.jpeg")
var fallout = new THREE.TextureLoader().load("img/fallout.jpeg")
var vegetarian = new THREE.TextureLoader().load("img/vegetarian.jpeg")

martian.wrapS = THREE.RepeatWrapping;
martian.wrapT = THREE.RepeatWrapping;
martian.repeat.set(1,1);




var cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

var material2 = new THREE.MeshBasicMaterial({
  map: martian
});
var cube2 = new THREE.Mesh(geometry, material2);
scene.add(cube2);


function render() {
  requestAnimationFrame(render);
  controls.update();
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();
