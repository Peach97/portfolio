import * as THREE from "three";
import { gsap as GSAP } from "gsap";
import Experience from "../Experience";
import { EventEmitter } from "events";

export default class Room extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.elapsed = this.time.elapsed;
    this.room = this.resources.items.room;
    this.actualRoom = this.room.scene;
    this.camera = this.experience.camera.controls.object;
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.controls = this.experience.controls;
    this.roomChildren = {};
    //all separated objects in the scene
    this.rayCamera = new THREE.PerspectiveCamera(
      500,
      this.sizes.aspect,
      0.1,
      1000
    );
    this.rayCamera.position.x = -100;
    this.rayCamera.position.y = 50;
    this.rayCamera.position.z = -200;
    this.scene.add(this.rayCamera);
    this.value = "close";
    //initializing the custom raycaster camera
    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1,
    };
    if (this.controls) {
      this.controls.setSkills(this.value);
    }
    //room hover lerping rotations
    this.setModel();
    this.setAnimation();
    this.onMouseMove();
    this.onMouseDown();
  }

  setModel() {
    const rectLightPosition = new THREE.Vector3(-25, 20, 0);
    const width = 15;
    const height = 25;
    const intensity = 25;
    const rectLight = new THREE.RectAreaLight(
      "#efc070",
      intensity,
      width,
      height
    );
    rectLight.position.copy(rectLightPosition);
    rectLight.rotation.x = -Math.PI / 2;
    rectLight.rotation.z = Math.PI / 4;
    // initializing lamp light
    this.actualRoom.children.forEach((child) => {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child instanceof THREE.Group) {
        child.children.forEach((groupchild) => {
          groupchild.castShadow = true;
          groupchild.receiveShadow = true;
        });
      }
      if (child.name === "TV_Screen") {
        child.scale.x = -1;
        child.material = new THREE.MeshBasicMaterial({
          map: this.resources.items.screen,
        });
      }
      //animated screen in contact section
      if (child.name === "Toolbox") {
        this.toolbox = child;
      }
      if (child.name === "Preloader") {
        child.children[3].material.emissiveIntensity = 0.25;
        child.position.set(0, -100, 0);
      }
      if (child.name === "Preloader_Bubble") {
        child.castShadow = false;
        child.receiveShadow = false;
        child.position.set(0, -50, 0);
      }
      child.scale.set(0, 0, 0);
      //scaling for preloader
      this.roomChildren[child.name.toLowerCase()] = child;
    });
    this.roomChildren["rectLight"] = rectLight;
    this.actualRoom.add(rectLight);
    this.actualRoom.scale.set(0.75, 0.5625, 0.75);
    this.actualRoom.position.set(0, 0, 0);
    //setting room model scale and location
    this.scene.add(this.actualRoom);
  }

  setAnimation() {
    this.mixer = new THREE.AnimationMixer(this.actualRoom);
    this.float = this.mixer.clipAction(this.room.animations[0]);
    this.float.play();
    //arrow floating animation
  }

  onMouseMove() {
    window.addEventListener("mousemove", (e) => {
      this.rotation =
        ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
      this.lerp.target = this.rotation * 0.1;
    });
    //lerping rotation event listener
  }

  qRaycaster(e) {
    var direction = new THREE.Vector3(0, 0, -1);
    direction.normalize();
    //ray direction
    const mouse = new THREE.Vector2();
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    //mouse location in client
    this.raycaster = new THREE.Raycaster();
    this.raycaster.setFromCamera(mouse, this.rayCamera);
    //ray from mouse location to ray Perspective custom camera
    const objects = this.toolbox.children;
    this.intersects = this.raycaster.intersectObjects(objects, true);

    if (this.intersects.length > 0) {
      let i = 0;
      i < this.intersects.length;
      i++;
      this.open = this.mixer.clipAction(this.room.animations[10]);
      this.open.setLoop(THREE.LoopOnce);
      this.open.clampWhenFinished = true;
      this.open.enabled = true;
      //lid opening animation
      this.open2 = this.mixer.clipAction(this.room.animations[8]);
      this.open2.setLoop(THREE.LoopOnce);
      this.open2.clampWhenFinished = true;
      //toolbox rising animation
      this.open.play();
      this.open2.play();
      this.value = this.value === "close" ? "open" : "close";
      this.emit("open", this.value);
    }
  }

  onMouseDown() {
    window.addEventListener("mousedown", (e) => {
      this.qRaycaster(e);
    });
  }
  resize() {}

  update() {
    this.lerp.current = GSAP.utils.interpolate(
      this.lerp.current,
      this.lerp.target,
      this.lerp.ease
    );
    this.actualRoom.rotation.y = this.lerp.current;
    //lerping rotation frame update function
    this.mixer.update(this.time.delta * 0.0018);
    //set speed of animations
  }
}
