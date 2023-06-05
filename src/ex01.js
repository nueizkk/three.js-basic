import * as THREE from "three";
/**
 * ///////// 정사각형 만들기 & Resize 대응
 */
export default function render() {
  const canvas = document.getElementById("three-canvas");

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  /**
   * Scene
   */
  const scene = new THREE.Scene();

  /**
   * Camera
   */
  const camera = new THREE.PerspectiveCamera(
    75, //시야각
    window.innerWidth / window.innerHeight, // aspect
    0.1, // near
    1000 // far
  );
  camera.position.y = 1;
  camera.position.z = 5;

  scene.add(camera);

  /**
   * Geometry
   */
  const geometry = new THREE.BoxGeometry(1, 1, 1);

  /**
   * Material
   */
  const material = new THREE.MeshBasicMaterial({ color: "lime" });

  /**
   * Mesh
   */
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
  renderer.render(scene, camera);
}
