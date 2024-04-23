import _, { entries } from "lodash";
import "./styles/style.css";
import "./styles/reset.css";

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
