import * as THREE from "three";
import { GLTFLoader } from "./helpers/GLTFLoader";
import { BufferGeometry, LoadingManager, Mesh, MeshToonMaterial, SpotLight } from "three";

export function Head() {
  let container, loader;

  let camera, scene, renderer;

  let mesh: Mesh<BufferGeometry, MeshToonMaterial>;

  let spotLight: SpotLight;

  let mouseX = 0;
  let mouseY = 0;

  let targetX = 0;
  let targetY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  init();
  animate();

  function init() {
    container = document.getElementById("root");

    //

    camera = new THREE.PerspectiveCamera(
      27,
      window.innerWidth / window.innerHeight,
      1,
      10000
    );
    camera.position.z = 1200;

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x060708);

    // LIGHTS

    scene.add(new THREE.HemisphereLight(0x443333, 0x111122));

    spotLight = new THREE.SpotLight(0xffffbb, 2);
    spotLight.position.set(0.5, 1, 1);
    spotLight.position.multiplyScalar(700);
    scene.add(spotLight);

    spotLight.castShadow = true;

    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;

    spotLight.shadow.camera.near = 200;
    spotLight.shadow.camera.far = 1500;

    spotLight.shadow.camera.fov = 40;

    spotLight.shadow.bias = -0.005;

    //

    const mapHeight = new THREE.TextureLoader().load(
      "./assets/Infinite-Level_02_Disp_NoSmoothUV-4096.jpg"
    );

    const material = new THREE.MeshToonMaterial({
      color: 0x552811,
      // specular: 0x222222,
      // shininess: 10,
      bumpMap: mapHeight,
      bumpScale: 12,
    });

    loader = new GLTFLoader(new LoadingManager());
    loader.load("./assets/LeePerrySmith.glb", function (gltf) {
      createScene(gltf.scene.children[0].geometry, 100, material);
    });

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;
    renderer.outputEncoding = THREE.sRGBEncoding;

    // EVENTS

    document.addEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("resize", onWindowResize);
  }

  function createScene(geometry, scale, material) {
    mesh = new THREE.Mesh(geometry, material);

    mesh.position.y = -50;
    mesh.scale.set(scale, scale, scale);

    mesh.castShadow = true;
    mesh.receiveShadow = true;

    scene.add(mesh);
  }

  //

  function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  //

  function animate() {
    requestAnimationFrame(animate);

    render();
  }

  function render() {
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    if (mesh) {
      mesh.rotation.y += 0.5 * (targetX - mesh.rotation.y);
      mesh.rotation.x += 0.5 * (targetY - mesh.rotation.x);
      mesh.material.color.setScalar(targetX + targetY );
    }

    

    renderer.render(scene, camera);
  }
}
