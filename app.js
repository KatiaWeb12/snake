let color = document.querySelectorAll(".color");
let sections = document.querySelectorAll("section");
let buttonContinue = document.querySelector(".end button");
let imgContinue = document.querySelector(".end img");
let nextButtons = document.querySelectorAll(".next");
let returnButton = document.querySelector(".return");
let music = document.querySelectorAll(".music");
let stopBut = document.querySelector(".stop");
let mainPage = document.querySelector(".mainPage");
let chosenColor = "";
let chosenMusic = "";
let colorList = [
  "rgb(251, 253, 110)",
  "rgb(199, 3, 78)",
  "rgb(82, 7, 221)",
  "rgb(255, 255, 255)",
  "rgb(5, 255, 151)",
  "rgb(88, 253, 239)",
  "rgb(183, 6, 228)",
  "rgb(245, 59, 59)",
  "rgb(92, 240, 72)",
  "rgb(255, 97, 144)",
  "rgb(253, 125, 75)",
  "linear-gradient(90deg, rgba(255,148,177,0.9920343137254902) 17%, rgba(208,92,243,1) 61%)",
];
color.forEach((el, index) => {
  el.style.background = colorList[index];
  el.addEventListener("click", () => {
    color.forEach((c) => {
      c.classList.remove("choose");
    });
    el.classList.add("choose");
  });
});
buttonContinue.addEventListener("mouseover", () => {
  imgContinue.src = "image/againHover.png";
});
buttonContinue.addEventListener("mouseout", () => {
  imgContinue.src = "image/again.png";
});
nextButtons.forEach((el, i) => {
  el.addEventListener("click", () => {
    sections[i].style.marginTop = "-100vh";
  });
});
returnButton.addEventListener("click", () => {
  document.querySelector(".end").style.marginTop = "-100vh";
  document.querySelector(".optionContMain").style.marginTop = "0px";
});
let last = document.querySelector(".last");
let lastColorP = document.querySelector(".last p");
last.addEventListener("mouseover", () => {
  lastColorP.style.display = "block";
});
last.addEventListener("mouseout", () => {
  lastColorP.style.display = "none";
});
music.forEach((m) => {
  m.addEventListener("click", () => {
    music.forEach((mus) => {
      mus.classList.remove("chooseMusic");
    });
    m.classList.add("chooseMusic");
  });
});
document.querySelector(".startBut").addEventListener("click", () => {
  chosenColor = document.querySelector(".choose").style.background;
  chosenMusic = document.querySelector(".chooseMusic");
});
window.addEventListener("load", () => {
  sections.forEach((s) => {
    s.style.display = "none";
  });
  sections[0].style.display = 'block'
});
mainPage.addEventListener("click", () => {
  sections.forEach((s) => {
    s.style.display = "flex";
  });
});
