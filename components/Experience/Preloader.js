import { EventEmitter } from "events";
import Experience from "./Experience.js";
import gsap from "gsap";

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
    this.arrowLeft = document.querySelector(".arrow-div-left");
    this.arrowRight = document.querySelector(".arrow-div-right");
    this.loader = document.querySelector(".preloader");
    this.room = this.experience.world.room.actualRoom;
    this.roomChildren = this.experience.world.room.roomChildren;
    this.emit("enablecontrols");
  }

  firstIntro() {
    this.preventDefault = function preventDefault(e) {
      e.preventDefault();
    };
    var supportsPassive = false;
    try {
      window.addEventListener(
        "test",
        null,
        Object.defineProperty({}, "passive", {
          get: function () {
            supportsPassive = true;
          },
        })
      );
    } catch (e) {}
    this.wheelOpt = supportsPassive ? { passive: false } : false;
    this.wheelEvent =
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";
    return new Promise((resolve) => {
      window.addEventListener(
        this.wheelEvent,
        this.preventDefault,
        this.wheelOpt
      );
      this.timeline = new gsap.timeline();
      this.timeline.set(this.loader, { opacity: 1 });
      this.timeline.set(this.description, { scale: 0 });
      this.timeline.set(this.subtitle, { scale: 0 });
      this.timeline.set(this.title, { scale: 0 });
      this.timeline.set(this.arrowLeft, { scale: 0 });
      this.timeline.set(this.arrowRight, { scale: 0 });
      if (this.device === "desktop") {
        this.timeline
          .fromTo(
            this.loader,
            {
              opacity: 1,
            },
            {
              opacity: 0,
              delay: 4,
              onComplete: () => {
                document.querySelector(".preloader").classList.add("hidden");
              },
            }
          )
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
        this.timeline
          .fromTo(
            this.loader,
            {
              opacity: 1,
            },
            {
              opacity: 0,
              delay: 4,
              onComplete: () => {
                document.querySelector(".preloader").classList.add("hidden");
              },
            }
          )
          .to(this.roomChildren.preloader.position, { x: 25 }, "mobile")
          .to(this.roomChildren.preloader_bubble.position, { x: 25 }, "mobile")
          .to(
            this.roomChildren.preloader.scale,
            {
              x: 1,
              y: 1,
              z: 1,
              ease: "back.out(2.5)",
              duration: 1.25,
            },
            "mobile"
          )
          .to(this.roomChildren.preloader_bubble.scale, {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(2.5)",
            duration: 1.25,
            onComplete: resolve,
          });
        //mobile animation here
      }
    });
  }

  secondIntro() {
    return new Promise((resolve) => {
      this.secondTimeline = new gsap.timeline();
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
        );

      if (this.device === "desktop") {
        this.secondTimeline
          .to(
            this.roomChildren.toolboxlid.scale,
            {
              x: 1,
              y: 1,
              z: 1,
            },
            "room"
          )
          .to(
            this.roomChildren.toolbox.scale,
            {
              x: 1,
              y: 1,
              z: 1,
            },
            "room"
          )
          .to(
            this.roomChildren.bubble.scale,
            {
              x: 1,
              y: 1,
              z: 1,
            },
            "room"
          );
      }
      this.secondTimeline
        .to(
          this.roomChildren.room001.scale,
          {
            x: 1,
            y: 1,
            z: 1,
            ease: "back.out(1)",
            duration: 1.1,
          },
          "room"
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
        .to(
          this.subtitle,
          {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
          },
          ">-.5"
        )
        .to(
          this.title,
          {
            scale: 1,
            duration: 1,
            ease: "back.out(2)",
            onComplete: () => {
              window.removeEventListener(
                this.wheelEvent,
                this.preventDefault,
                this.wheelOpt
              );
              resolve;
            },
          },
          ">-.5"
        )
        .to(
          this.arrowLeft,
          {
            scale: 1,
            duration: 1,
            ease: "back.out(3.5)",
          },
          "arrow"
        )
        .to(
          this.arrowRight,
          {
            scale: 1,
            duration: 1,
            ease: "back.out(3.5)",
          },
          "arrow"
        );
    });
  }

  onClick(e) {
    if (e) {
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

  update() {}
}
