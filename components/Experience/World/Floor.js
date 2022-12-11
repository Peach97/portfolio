import * as THREE from "three";
import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.setFloor();
    // this.setCircles();
  }

  setFloor() {
    this.geometry = new THREE.PlaneGeometry(5000, 5000);
    this.material = new THREE.ShadowMaterial({
      transparent: true,
      opacity: 0.4,
    });
    //adjust opacity to adjust darkness of shadows
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
    this.plane.rotation.x = -Math.PI / 2;
    this.plane.position.y = -100;
    this.plane.receiveShadow = true;
  }

  // setCircles() {
  //   const geometry = new THREE.CircleGeometry(500, 3200);
  //   const material = new THREE.MeshStandardMaterial({ color: "#444443" }); //555554
  //   const material2 = new THREE.MeshStandardMaterial({ color: "#D2CBBD" }); // 2A2A29
  //   const material3 = new THREE.MeshStandardMaterial({ color: "#080808" });
  //   const material4 = new THREE.MeshStandardMaterial({ color: "#151413" });
  //   //Circle geometry color

  //   this.circleFirst = new THREE.Mesh(geometry, material);
  //   this.circleSecond = new THREE.Mesh(geometry, material2);
  //   this.circleThird = new THREE.Mesh(geometry, material3);
  //   this.circleFourth = new THREE.Mesh(geometry, material4);

  //   this.circleFirst.position.y = -175;
  //   this.circleFirst.position.z = -150;
  //   this.circleFirst.position.x = -100;

  //   this.circleSecond.position.y = -170;
  //   this.circleSecond.position.z = -150;
  //   this.circleSecond.position.x = -100;

  //   this.circleThird.position.y = -200;
  //   this.circleThird.position.z = -150;
  //   this.circleThird.position.x = -100;

  //   this.circleFourth.position.y = -225;
  //   this.circleFourth.position.z = -150;
  //   this.circleFourth.position.x = -100;

  //   this.circleFirst.scale.set(0, 0, 0);
  //   this.circleSecond.scale.set(0, 0, 0);
  //   this.circleThird.scale.set(0, 0, 0);
  //   this.circleFourth.scale.set(0, 0, 0);

  //   this.circleFirst.rotation.x =
  //     this.circleSecond.rotation.x =
  //     this.circleThird.rotation.x =
  //     this.circleFourth.rotation.x =
  //       -Math.PI / 2;

  //   this.scene.add(this.circleFirst);
  //   this.scene.add(this.circleSecond);
  //   this.scene.add(this.circleThird);
  //   this.scene.add(this.circleFourth);
  // }

  resize() {}

  update() {}
}
