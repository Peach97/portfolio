import { EventEmitter } from "events";
import Experience from "./Experience.js";
import gsap from "gsap";
import convert from "../utils/divsToSpans";
import { duration } from "@mui/material";

export default class Preloader extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.resources = this.experience.resources;
    this.camera = this.experience.camera;
    this.world = this.experience.world;
    this.device = this.sizes.device;

    this.sizes.on("switchdevice", (device) => {
      this.device = device;
    });

    this.world.on("worldready", () => {
      this.setAssets();
      this.playIntro();
    });
  }

  setAssets() {
    this.description = document.querySelector(".hero-main");
    this.subtitle = document.querySelector(".hero-main-subtitle");
    this.title = document.querySelector(".hero-main-title");
    // convert(document.querySelector(".hero-main"));
    // convert(document.querySelector(".hero-main-subtitle"));
    // convert(document.querySelector(".hero-main-title"));
    // this.arrowLeft = convert(document.querySelector(".scroll-btn-left"));
    // this.arrowRight = convert(document.querySelector(".scroll-btn-right"));
    this.room = this.experience.world.room.actualRoom;
    this.roomChildren = this.experience.world.room.roomChildren;
    this.emit("enablecontrols");
    console.log(this.roomChildren);
  }

  firstIntro() {
    return new Promise((resolve) => {
      this.timeline = new gsap.timeline();
      this.timeline.set(this.description, { scale: 0 });
      this.timeline.set(this.subtitle, { scale: 0 });
      this.timeline.set(this.title, { scale: 0 });
      if (this.device === "desktop") {
        this.timeline
          .to(this.roomChildren.preloader.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2.5)",
            duration: 1.25,
          })
          .to(this.roomChildren.preloader_bubble.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2.5)",
            duration: 1.25,
            onComplete: resolve,
          });
      } else {
        //mobile animation here
      }
    });
  }

  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new gsap.timeline();
      if (this.device === "desktop") {
        this.secondTimeline
          .to(
            this.roomChildren.preloader.position,
            {
              y: 25,
              ease: "back.out(1.5)",
              duration: 1,
            },
            "event"
          )
          .to(
            this.roomChildren.preloader_bubble.scale,
            {
              x: 0,
              y: 0,
              z: 0,
              duration: 0.5,
            },
            "event"
          )
          .to(
            this.roomChildren.preloader.position,
            {
              x: 0,
              y: 500,
              z: 0,

              duration: 0.75,
            },
            "same"
          )
          .to(
            this.roomChildren.preloader.scale,
            {
              // x: 0.14418604651,
              // y: 0.50345478374,
              // z: 0.37256133333,
              x: 0,
              y: 0,
              z: 0,

              duration: 1,
            },
            "same"
          )
          .to(
            this.roomChildren.preloader.rotation,
            {
              y: 4 * Math.PI,

              duration: 1,
            },
            "same"
          )
          .to(this.roomChildren.room001.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 0.75,
          })
          .to(
            this.roomChildren.furniture.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.75,
            },
            ">-0.75"
          )
          .to(
            this.roomChildren.desk_objects.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.75,
            },
            ">-0.5"
          )
          .to(
            this.roomChildren.lamp.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.65,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.chair_mat.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.65,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.weights.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.65,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.computer.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.75,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.outside_plant.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.5,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.toolbox.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.5,
            },
            ">-0.4"
          )
          .to(
            this.roomChildren.peachcharacter.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.75,
            },
            ">-0.5"
          )
          .to(
            this.roomChildren.rectLight.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.75,
            },
            ">-0.6"
          )
          .to(
            this.roomChildren.toolboxlid.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.5,
            },
            ">-0.5"
          )
          .to(
            this.roomChildren.tv_screen.scale,
            {
              x: -1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.5,
            },
            ">-0.5"
          )
          .to(
            this.roomChildren.bubble.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 0.5,
            },
            ">-0.5"
          )
          .to(
            this.roomChildren.chair.scale,
            {
              x: 1,
              y: 1,
              z: 1,
            },
            "chair"
          )
          .fromTo(
            this.roomChildren.chair_back.position,
            {
              y: 400,
            },
            { y: 0 },
            "chair"
          )
          .to(
            this.roomChildren.chair_back.scale,
            {
              x: 1,
              y: 1,
              z: 1,
            },
            "chair"
          )
          .to(
            this.roomChildren.chair_back.rotation,
            {
              y: 4 * Math.PI,
              ease: "power2.out",
              duration: 1,
            },
            "chair"
          )
          .to(
            this.roomChildren.peach.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(1)",
              duration: 1,
            },
            "peach"
          )
          .fromTo(
            this.roomChildren.peach.position,
            {
              y: 500,
            },
            { y: 0, duration: 1 },
            "peach"
          )
          .to(this.description, {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
          })
          .to(this.subtitle, {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
          })
          .to(this.title, {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
          });
        // .to("hero-main-subtitle", {
        //   yPercent: 0,
        //   stagger: 0.05,
        //   ease: "back.out(1.7)",
        // })
        // .to("hero-main-title", {
        //   yPercent: 0,
        //   stagger: 0.05,
        //   ease: "back.out(1.7)",
        // });
      } else {
        //mobile animation here
      }
    });
  }

  onClick(e) {
    if (e) {
      console.log("event started");
      window.removeEventListener("click", this.clickEvent);
      this.playSecondIntro();
    }
  }

  async playIntro() {
    await this.firstIntro();
    this.clickEvent = this.onClick.bind(this);
    window.addEventListener("click", this.clickEvent);
  }

  playSecondIntro() {
    this.secondIntro();
  }

  // secondIntro() {
  //     return new Promise((resolve) => {
  //         this.secondTimeline = new GSAP.timeline();

  //         this.secondTimeline
  //             .to(
  //                 ".intro-text .animatedis",
  //                 {
  //                     yPercent: 100,
  //                     stagger: 0.05,
  //                     ease: "back.in(1.7)",
  //                 },
  //                 "fadeout"
  //             )
  //             .to(
  //                 ".arrow-svg-wrapper",
  //                 {
  //                     opacity: 0,
  //                 },
  //                 "fadeout"
  //             )
  //             .to(
  //                 this.room.position,
  //                 {
  //                     x: 0,
  //                     y: 0,
  //                     z: 0,
  //                     ease: "power1.out",
  //                 },
  //                 "same"
  //             )
  //             .to(
  //                 this.roomChildren.cube.rotation,
  //                 {
  //                     y: 2 * Math.PI + Math.PI / 4,
  //                 },
  //                 "same"
  //             )
  //             .to(
  //                 this.roomChildren.cube.scale,
  //                 {
  //                     x: 10,
  //                     y: 10,
  //                     z: 10,
  //                 },
  //                 "same"
  //             )
  //             .to(
  //                 this.camera.orthographicCamera.position,
  //                 {
  //                     y: 6.5,
  //                 },
  //                 "same"
  //             )
  //             .to(
  //                 this.roomChildren.cube.position,
  //                 {
  //                     x: 0.638711,
  //                     y: 8.5618,
  //                     z: 1.3243,
  //                 },
  //                 "same"
  //             )
  //             .set(this.roomChildren.body.scale, {
  //                 x: 1,
  //                 y: 1,
  //                 z: 1,
  //             })
  //             .to(
  //                 this.roomChildren.cube.scale,
  //                 {
  //                     x: 0,
  //                     y: 0,
  //                     z: 0,
  //                     duration: 1,
  //                 },
  //                 "introtext"
  //             )
  //             .to(
  //                 ".hero-main-title .animatedis",
  //                 {
  //                     yPercent: 0,
  //                     stagger: 0.07,
  //                     ease: "back.out(1.7)",
  //                 },
  //                 "introtext"
  //             )
  //             .to(
  //                 ".hero-main-description .animatedis",
  //                 {
  //                     yPercent: 0,
  //                     stagger: 0.07,
  //                     ease: "back.out(1.7)",
  //                 },
  //                 "introtext"
  //             )
  //             .to(
  //                 ".first-sub .animatedis",
  //                 {
  //                     yPercent: 0,
  //                     stagger: 0.07,
  //                     ease: "back.out(1.7)",
  //                 },
  //                 "introtext"
  //             )
  //             .to(
  //                 ".second-sub .animatedis",
  //                 {
  //                     yPercent: 0,
  //                     stagger: 0.07,
  //                     ease: "back.out(1.7)",
  //                 },
  //                 "introtext"
  //             )
  //             .to(
  //                 this.roomChildren.aquarium.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.5"
  //             )
  //             .to(
  //                 this.roomChildren.clock.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.4"
  //             )
  //             .to(
  //                 this.roomChildren.shelves.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.3"
  //             )
  //             .to(
  //                 this.roomChildren.floor_items.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.2"
  //             )
  //             .to(
  //                 this.roomChildren.desks.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.1"
  //             )
  //             .to(
  //                 this.roomChildren.table_stuff.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 ">-0.1"
  //             )
  //             .to(this.roomChildren.computer.scale, {
  //                 x: 1,
  //                 y: 1,
  //                 z: 1,
  //                 ease: "back.out(2.2)",
  //                 duration: 0.5,
  //             })
  //             .set(this.roomChildren.mini_floor.scale, {
  //                 x: 1,
  //                 y: 1,
  //                 z: 1,
  //             })
  //             .to(
  //                 this.roomChildren.chair.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 "chair"
  //             )
  //             .to(
  //                 this.roomChildren.fish.scale,
  //                 {
  //                     x: 1,
  //                     y: 1,
  //                     z: 1,
  //                     ease: "back.out(2.2)",
  //                     duration: 0.5,
  //                 },
  //                 "chair"
  //             )
  //             .to(
  //                 this.roomChildren.chair.rotation,
  //                 {
  //                     y: 4 * Math.PI + Math.PI / 4,
  //                     ease: "power2.out",
  //                     duration: 1,
  //                 },
  //                 "chair"
  //             )
  //             .to(".arrow-svg-wrapper", {
  //                 opacity: 1,
  //                 onComplete: resolve,
  //             });
  //     });
  // }
  // onTouch(e) {
  //     this.initalY = e.touches[0].clientY;
  // }

  // onTouchMove(e) {
  //     let currentY = e.touches[0].clientY;
  //     let difference = this.initalY - currentY;
  //     if (difference > 0) {
  //         console.log("swipped up");
  //         this.removeEventListeners();
  //         this.playSecondIntro();
  //     }
  //     this.intialY = null;
  // }

  // removeEventListeners() {
  //     window.removeEventListener("wheel", this.scrollOnceEvent);
  //     window.removeEventListener("touchstart", this.touchStart);
  //     window.removeEventListener("touchmove", this.touchMove);
  // }

  // async playIntro() {
  //     this.scaleFlag = true;
  //     await this.firstIntro();
  //     this.moveFlag = true;
  //     this.scrollOnceEvent = this.onScroll.bind(this);
  //     this.touchStart = this.onTouch.bind(this);
  //     this.touchMove = this.onTouchMove.bind(this);
  //     window.addEventListener("wheel", this.scrollOnceEvent);
  //     window.addEventListener("touchstart", this.touchStart);
  //     window.addEventListener("touchmove", this.touchMove);
  // }
  // async playSecondIntro() {
  //     this.moveFlag = false;
  //     await this.secondIntro();
  //     this.scaleFlag = false;
  //     this.emit("enablecontrols");
  // }

  // move() {
  //     if (this.device === "desktop") {
  //         this.room.position.set(-1, 0, 0);
  //     } else {
  //         this.room.position.set(0, 0, -1);
  //     }
  // }

  // scale() {
  //     this.roomChildren.rectLight.width = 0;
  //     this.roomChildren.rectLight.height = 0;

  //     if (this.device === "desktop") {
  //         this.room.scale.set(0.11, 0.11, 0.11);
  //     } else {
  //         this.room.scale.set(0.07, 0.07, 0.07);
  //     }
  // }

  update() {
    // if (this.moveFlag) {
    //     this.move();
    // }
    // if (this.scaleFlag) {
    //     this.scale();
    // }
  }
}
