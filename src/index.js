import _, { entries } from "lodash";
import "./styles/style.css";
import "./styles/reset.css";
import battleshipIcon from "./images/battleship.png";
import heroIcon from "./images/hero.jpg";
import layerwave from "./images/layered-waves-haikei.svg";
import library from "./images/Library .png";
import office from "./images/office.jpg";
import patras from "./images/patras.jpg";
import restaurant from "./images/restaurant.png";
import tictactoe from "./images/tictactoe.png";
import todolist from "./images/Todo List.png";
import wavehaike from "./images/wave-haikei.svg";
import weatherapp from "./images/weatherapp.png";

const layer = document.querySelector(".layer");

layer.style.backgroundImage = `url(${layerwave})`;

const layerflip = document.querySelector(".layerflip");
layerflip.style.backgroundImage = `url(${wavehaike})`;
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
