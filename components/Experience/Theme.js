import { EventEmitter } from "events";

export default class Theme extends EventEmitter {
  constructor() {
    super();

    this.theme = "dark";
    this.toggleButton = document.querySelector(".toggle-button");

    this.setEventListeners();
  }

  setEventListeners() {
    this.toggleButton.addEventListener("click", () => {
      this.theme = this.theme === "light" ? "dark" : "light";
      console.log(this.theme);
      this.emit("switch", this.theme);
    });
  }
}