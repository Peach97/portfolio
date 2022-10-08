import * as THREE from "three";
import Sizes from "../utils/Sizes";
import Time from "../utils/Time";
import Resources from "../utils/Resources";
import assets from "../utils/assets";
import Camera from "./Camera";
import Theme from "./Theme";
import Renderer from "./Renderer";
import Preloader from "./Preloader";
import World from "./World/World";
import Controls from "./World/Controls";
// import { EventEmitter } from "../about/events";

export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    this.state = {
      data: [],
    };
    Experience.instance = this;
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.time = new Time();
    this.sizes = new Sizes();
    this.camera = new Camera();
    this.resources = new Resources(assets);
    this.renderer = new Renderer();
    this.theme = new Theme();
    this.world = new World();
    this.preloader = new Preloader();

    this.preloader.on("enablecontrols", () => {
      this.controls = new Controls();
    });
    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("update", () => {
      this.update();
    });

    // this.world.on("worldready", () => {
    //   this.controls = new Controls();
    // });
  }

  resize() {
    this.camera.resize();
    this.world.resize();
    this.renderer.resize();
  }
  update() {
    this.preloader.update();
    this.camera.update();
    this.world.update();
    this.renderer.update();
    if (this.controls) {
      this.controls.update();
    }
  }
}