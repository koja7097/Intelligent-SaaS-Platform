const canvas = document.getElementById('three-bg');
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 7;

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/* Geometry */
const geometry = new THREE.IcosahedronGeometry(2.4, 2);
const material = new THREE.MeshStandardMaterial({
  color: 0x4f46e5,
  wireframe: true,
  transparent: true,
  opacity: 0.8
});
const orb = new THREE.Mesh(geometry, material);
scene.add(orb);

/* Lights */
scene.add(new THREE.AmbientLight(0xffffff, 0.6));

const light = new THREE.PointLight(0x6366f1, 1.5);
light.position.set(5, 5, 5);
scene.add(light);

/* Mouse interaction */
const mouse = { x: 0, y: 0 };
window.addEventListener('mousemove', e => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
});

/* Animate */
function animate() {
  orb.rotation.x += 0.0015;
  orb.rotation.y += 0.002;

  orb.rotation.y += mouse.x * 0.003;
  orb.rotation.x += mouse.y * 0.003;

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

/* Resize */
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});