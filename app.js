let color = document.querySelectorAll(".color");
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
  "rgb(210, 116, 247)",
];
color.forEach((el, index) => {
  el.style.background = colorList[index];
  el.addEventListener("click", () => {
    color.forEach((c) => {
      c.style.border = "1px solid white";
    });
    el.style.border = "3px solid white";
  });
});
