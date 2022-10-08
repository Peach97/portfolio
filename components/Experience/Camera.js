import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;

    // this.createPerspectiveCamera();
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    const initialCameraPosition = new THREE.Vector3(
      20 * Math.sin(0.2 * Math.PI),
      30,
      18 * Math.cos(0.2 * Math.PI)
    );
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.scene.add(this.perspectiveCamera);
    this.perspectiveCamera.position.copy(initialCameraPosition);
  }

  createOrthographicCamera() {
    const initialCameraPosition = new THREE.Vector3(
      24 * Math.sin(0.2 * Math.PI),
      10,
      22 * Math.cos(0.2 * Math.PI)
    );
    const target = new THREE.Vector3(0, 0, 0);

    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -400,
      1000
    );
    // const gridHelper = new THREE.GridHelper(size, divisions);
    // this.scene.add(gridHelper);
    // this.orthographicCamera = new THREE.OrthographicCamera(
    //   (-this.sizes.aspect * this.sizes.frustrum) / 2,
    //   (this.sizes.aspect * this.sizes.frustrum) / 2,
    //   this.sizes.frustrum / 2,
    //   -this.sizes.frustrum / 2,
    //   -1000,
    //   1000
    // );

    // const axesHelper = new THREE.AxesHelper(1000);
    // this.scene.add(axesHelper);

    this.orthographicCamera.position.copy(initialCameraPosition);
    this.orthographicCamera.lookAt(target);
    // this.cameraHelper = new THREE.CameraHelper(this.orthographicCamera);
    this.scene.add(this.orthographicCamera);
    // console.log(this.orthographicCamera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.orthographicCamera, this.canvas);
    this.controls.enableRotate = false;
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
  }

  resize() {
    // Updating Orthographic Camera on Resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}
