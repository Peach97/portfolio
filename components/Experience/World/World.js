import * as THREE from "three";
import Experience from "../Experience";
import Room from "./Room";
import Floor from "./Floor";
import Environment from "./Environment";
import { EventEmitter } from "events";

export default class World extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera;
    this.resources = this.experience.resources;
    this.theme = this.experience.theme;
    this.room = this.resources.items.room;
    this.time = this.experience.time;
    this.elapsed = this.time.elapsed;
    this.controls = this.experience.controls;

    this.resources.on("ready", () => {
      this.environment = new Environment();
      this.floor = new Floor();
      this.room = new Room();
      this.actualRoom = this.room.scene;

      console.log("ready");
      // this.controls = new Controls();
      this.emit("worldready");
      // this.onMouseMove();
    });
    // if (this.room) {
    //   this.room.on("open", (value) => {
    //     this.setSkills(value);
    //   });
    // }

    this.theme.on("switch", (theme) => {
      this.switchTheme(theme);
    });
  }

  // setSkills(value) {
  //   if (this.controls) {
  //     this.controls.setSkills(value);
  //   }
  // }

  switchTheme(theme) {
    if (this.environment) {
      this.environment.switchTheme(theme);
    }
  }
  resize() {}

  update() {
    if (this.room) {
      this.room.update();
    }
    if (this.controls) {
      this.controls.update();
    }
  }
}
