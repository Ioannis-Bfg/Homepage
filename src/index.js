import _, { entries } from "lodash";
import "./styles/style.css";
import "./styles/reset.css";
import BattleshipIcon from "./images/battleship.png";
import "./images/hero.jpg";
import "./images/layered-waves-haikei.svg";
import "./images/Library .png";
import "./images/office.jpg";
import "./images/patras.jpg";
import "./images/restaurant.png";
import "./images/tictactoe.png";
import "./images/Todo List.png";
import "./images/wave-haikei.svg";
import "./images/weatherapp.png";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const partElements = document.querySelectorAll(".part");
partElements.forEach((el) => observer.observe(el));

const waveObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("waveshow");
    } else {
      entry.target.classList.remove("waveshow");
    }
  });
});

const waveElements = document.querySelectorAll(".wave");
waveElements.forEach((el) => waveObserver.observe(el));
