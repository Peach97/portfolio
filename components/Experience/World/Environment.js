import * as THREE from "three";
import Experience from "../Experience";
import { gsap as GSAP } from "gsap";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.camera = this.experience.camera.orthographicCamera;
    this.setSunlight();
  }

  setSunlight() {
    const color = new THREE.Color("rgb(44, 59, 175)");

    const intensity = 0.75;
    this.sunLight = new THREE.DirectionalLight(color, intensity);
    this.sunLight.position.set(20, 500, 0);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.near = 0;
    this.sunLight.shadow.camera.far = 1400;
    this.sunLight.shadow.camera.left = -750;
    this.sunLight.shadow.camera.right = 500;
    this.sunLight.shadow.camera.top = 500;
    this.sunLight.shadow.camera.bottom = -500;
    this.sunLight.shadow.bias = -0.005;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    //front facing sunlight
    this.sunLight2 = new THREE.DirectionalLight(color, intensity);
    this.sunLight2.position.set(0, 5, -145);
    this.sunLight2.castShadow = true;
    this.sunLight2.target.position.set(5, 0, 0);
    this.sunLight2.shadow.camera.near = -200;
    this.sunLight2.shadow.camera.far = -25;
    this.sunLight2.shadow.camera.left = -100;
    this.sunLight2.shadow.camera.right = 150;
    this.sunLight2.shadow.camera.top = 100;
    this.sunLight2.shadow.camera.bottom = -100;
    this.sunLight2.shadow.bias = -0.005;
    this.sunLight2.shadow.mapSize.set(1024, 1024);
    //back facing sunlight
    this.scene.add(this.sunLight2.target);
    this.scene.add(this.sunLight, this.sunLight2);
    this.ambientLight = new THREE.AmbientLight(color, 0.85);
    this.scene.add(this.ambientLight);
  }
  switchTheme(theme) {
    if (theme === "light") {
      GSAP.to(this.sunLight.color, {
        r: 0.17254901960784313,
        g: 0.23137254901960785,
        b: 0.6862745098039216,
      });
      GSAP.to(this.sunLight2.color, {
        r: 0.17254901960784313,
        g: 0.23137254901960785,
        b: 0.6862745098039216,
      });
      GSAP.to(this.ambientLight.color, {
        r: 0.17254901960784313,
        g: 0.23137254901960785,
        b: 0.6862745098039216,
      });
      GSAP.to(this.sunLight, {
        intensity: 0.75,
      });
      GSAP.to(this.sunLight2, {
        intensity: 0.75,
      });
      GSAP.to(this.ambientLight, {
        intensity: 0.85,
      });
    } else {
      //dark mode values for sunlight -->
      GSAP.to(this.sunLight.color, {
        r: 1,
        g: 1,
        b: 1,
      });
      GSAP.to(this.sunLight2.color, {
        r: 1,
        g: 1,
        b: 1,
      });
      GSAP.to(this.ambientLight.color, {
        r: 1,
        g: 1,
        b: 1,
      });
      GSAP.to(this.sunLight, {
        intensity: 3.5,
      });
      GSAP.to(this.sunLight2, {
        intensity: 4,
      });
      GSAP.to(this.ambientLight, {
        intensity: 1.5,
      });
    }
  }

  resize() {}

  update() {}
}
