// THREE BACKGROUND (Mouse Reactive)
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById('bg'), alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 2000;

const posArray = new Float32Array(particlesCount * 3);
for(let i = 0; i < particlesCount * 3; i++){
  posArray[i] = (Math.random() - 0.5) * 15;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.02,
  color: 0x3b82f6
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);
camera.position.z = 5;

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
  mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
});

function animate(){
  requestAnimationFrame(animate);
  particlesMesh.rotation.y += 0.001;
  particlesMesh.rotation.x = mouseY * 0.2;
  particlesMesh.rotation.y += mouseX * 0.2;
  renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Event Stream Simulation
const logs = document.getElementById("logs");
const messages = [
  "✔ Monitoring cluster-01 latency: stable",
  "⚠ Anomaly detected in API response time",
  "✔ Auto-scaling triggered: +2 instances",
  "✔ Incident resolved automatically",
  "✔ SLA compliance: 99.99%"
];

setInterval(() => {
  const msg = document.createElement("div");
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];
  logs.appendChild(msg);

  if (logs.children.length > 8) {
    logs.removeChild(logs.firstChild);
  }
}, 1500);

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(r => {
    const top = r.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      r.classList.add("active");
    }
  });
});