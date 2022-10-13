import * as THREE from "three";
import Experience from "../Experience";
import gsap from "gsap";
import dynamic from "next/dynamic";
import { EventEmitter } from "events";

export default class Controls {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.camera = this.experience.camera;
    this.orthographicCamera = this.experience.camera.orthographicCamera;
    this.room = this.experience.world.room.actualRoom;
    this.world = this.experience.world.room;
    this.floor = this.experience.world.floor.plane;
    this.room.children.forEach((child) => {
      if (child.type === "RectAreaLight") {
        this.rectLight = child;
      }
    });
    this.circleFirst = this.experience.world.floor.circleFirst;
    this.circleSecond = this.experience.world.floor.circleSecond;
    this.circleThird = this.experience.world.floor.circleThird;
    // this.circleFourth = this.experience.world.floor.circleFourth;
    // let ScrollTrigger = dynamic(
    //   () => import("gsap/ScrollTrigger").then((mod) => mod.ScrollTrigger),
    //   {
    //     ssr: false,
    //   }
    // );
    const { ScrollTrigger } = require("gsap/ScrollTrigger");
    gsap.registerPlugin(ScrollTrigger);
    this.setScrollTrigger();
    this.setSkills();
  }

  setSkills() {
    this.page = document.querySelector(".skills-container");
    console.log(this.page);
    this.world.on("open", () => {
      gsap.fromTo(
        this.page,
        {
          opacity: 0,
          display: "none",
          x: -300,
          height: 0,
          scaleY: 0,
        },
        {
          opacity: 1,
          display: "flex",
          x: 0,
          height: "fit-content",
          duration: 5,
          ease: "elastic",
          scaleY: 1,
        }
      );
    });
  }

  setScrollTrigger() {
    const initialCameraPosition = new THREE.Vector3(
      24 * Math.sin(0.2 * Math.PI),
      10,
      22 * Math.cos(0.2 * Math.PI)
    );
    const target = new THREE.Vector3(0, 0, 0);
    this.orthographicCamera.lookAt(target);
    this.orthographicCamera.position.copy(initialCameraPosition);

    let mm = gsap.matchMedia();
    //Desktop
    mm.add("(min-width: 969px)", () => {
      this.room.scale.set(0.75, 0.5625, 0.75);
      // this.rectLight.width = 15;
      // this.rectLight.height = 35;
      this.orthographicCamera.position.copy(initialCameraPosition);
      this.room.position.set(0, 0, 0);
      this.floor.position.y = -100;
      this.floor.rotation.x = -Math.PI / 2;

      // console.log("fired desktop");
      //First move section
      this.firstMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".first-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      }).to(
        this.room.scale,
        {
          x: 0.75,
          y: 0.5625,
          z: 0.75,
        },
        "same"
      );
      //        .to(this.floor.position, { y: -50 }, "same");
      // .to(this.orthographicCamera.position, { y: -0.25 }, "same");

      // Second Move
      this.secondMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".second-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.orthographicCamera.position,
          {
            x: 28 * Math.sin(1 * Math.PI),
            y: 6,
            z: 22 * Math.cos(0.75 * Math.PI),
          },
          "same"
        )
        .to(
          this.room.scale,
          {
            x: 1,
            y: 0.75,
            z: 1,
          },
          "same"
        )
        .to(this.room.position, { y: 55 }, "same");

      //Third Move
      this.thirdMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".third-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.orthographicCamera.position,
          {
            x: 28 * Math.sin(0.05 * Math.PI),
            y: 5,
            z: 22 * Math.cos(0.05 * Math.PI),
          },
          "same"
        )
        .to(
          this.room.position,
          {
            x: -165,
            y: -10,
          },
          "same"
        )
        .to(this.room.scale, { x: 1.65, y: 1.237, z: 1.65 }, "same")
        .to(this.floor.position, { y: -205 }, "same");
      //Fourth Move
      this.fourthMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-move",
          start: "top top",
          end: "+=2500",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })

        .to(this.room.scale, { x: 1.6, y: 1.23529412, z: 1.6 }, "same")
        .to(this.room.position, { x: 325, y: -150 }, "same")
        .to(this.floor.position, { y: -300 }, "same")
        .to(
          this.orthographicCamera.position,
          {
            x: -26 * Math.sin(0.2 * Math.PI),
            y: 9,
            z: 14 * Math.cos(0.75 * Math.PI),
          },
          "same"
        );
      //Fifth Move
      this.fifthMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".fifth-move",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.room.scale,
          {
            x: 0.75,
            y: 0.5625,
            z: 0.75,
          },
          "same"
        )
        .to(
          this.orthographicCamera.position,
          {
            x: 24 * Math.sin(0.2 * Math.PI),
            y: 10,
            z: 22 * Math.cos(0.2 * Math.PI),
          },
          "same"
        )
        .to(this.room.position, { x: 0, y: 0, z: 0 }, "same")
        .to(this.floor.position, { y: -100 }, "same");
    });

    //Mobile
    mm.add("(max-width: 968px)", () => {
      this.room.scale.set(0.5, 0.375, 0.5);
      this.room.position.set(-25, 0, 0);
      // console.log("fired mobile");

      //First move (mobile)
      this.sixthMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".first-move",
          start: "top top",
          end: "+=3000",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(this.room.scale, {
          x: 0.9,
          y: 0.675,
          z: 0.9,
        })
        .to(
          this.orthographicCamera.position,
          {
            x: 28 * Math.sin(1 * Math.PI),
            y: 0.25,
            z: 22 * Math.cos(0.75 * Math.PI),
          },
          "same"
        );
      //Second move (mobile)
      this.seventhMoveTimeline = new gsap.timeline({
        scrollTrigger: {
          trigger: ".third-move",
          start: "top top",
          end: "+=2500",
          scrub: 0.6,
          invalidateOnRefresh: true,
        },
      })
        .to(
          this.room.position,
          {
            x: -0.9,
            y: 0,
            z: 0,
          },
          "same"
        )
        .to(
          this.orthographicCamera.position,
          {
            x: 28 * Math.sin(0.05 * Math.PI),
            y: 5,
            z: 22 * Math.cos(0.05 * Math.PI),
          },
          "same"
        )
        .to(this.room.scale, { x: 0.0001, y: 0.0001, z: 0.0001 }, ">");
    });
    mm.add("all", () => {
      //First move (all)
      this.firstCircle = new gsap.timeline({
        scrollTrigger: {
          trigger: ".first-move",
          start: "top top",
          end: "+=3100",
          scrub: 0.6,
        },
      }).to(this.circleFirst.scale, {
        x: 4,
        y: 4,
        z: 4,
      });
      //Second move (all)
      this.secondCircle = new gsap.timeline({
        scrollTrigger: {
          trigger: ".third-move",
          start: "top top",
          end: "+=3000",
          scrub: 0.6,
        },
      })
        .to(
          this.circleSecond.scale,
          {
            x: 6,
            y: 6,
            z: 6,
          },
          "same"
        )
        .to(
          this.circleSecond.rotation,
          {
            x: -Math.PI / 2.75,
          },
          "same"
        )
        .to(
          this.circleFirst.rotation,
          {
            x: -Math.PI / 2.75,
          },
          "same"
        )
        .to(this.circleFirst.position, { y: -375 }, "same")
        .to(this.circleSecond.position, { y: -342 }, "same");
      //Third move (all)
      this.thirdCircle = new gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-move",
          start: "top top",
          end: "+=3200",
          scrub: 0.6,
        },
      })
        .to(
          this.circleFirst.rotation,
          {
            x: -Math.PI / 1.5,
          },
          "same"
        )
        .to(
          this.circleSecond.rotation,
          {
            x: -Math.PI / 1.5,
          },
          "same"
        )
        .to(
          this.circleThird.rotation,
          {
            x: -Math.PI / 1.5,
          },
          "same"
        )
        .to(this.circleThird.scale, { x: 6, y: 6, z: 6 }, "same")
        .to(this.circleFirst.position, { y: -700 }, "same")
        .to(this.circleSecond.position, { y: -650 }, "same")
        .to(this.circleThird.position, { y: -535 }, "same");
    });
  }

  resize() {}

  update() {}
}
