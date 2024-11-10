// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)
var first = document.createElement("div");
var second = document.createElement("div");
var third = document.createElement("div");

var currentDiv = document.querySelector(".main-left");
var parent = document.getElementById("sec");
sec.insertBefore(first, currentDiv);
sec.insertBefore(second, currentDiv);
sec.insertBefore(third, currentDiv);

first.setAttribute("class", "rond un");
second.setAttribute("class", "rond deux");
third.setAttribute("class", "rond trois");

const rounded = document.getElementsByClassName("rond");

console.log(rounded);

for (let item of rounded) {
  item.style.padding = "0px";
  item.style.borderRadius = "200px";
  item.style.position = "absolute";
  item.style.top = "0px";
  item.style.left = "0px";
}

const image = document.querySelector(".main-right");

first.style.width = "20px";
first.style.height = "20px";
first.style.backgroundColor = "rgba(255, 252, 127, 0.6)";

second.style.width = "50px";
second.style.height = "50px";
second.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
second.style.transition = ".2s ease-out";
second.style.mixBlendMode = "exclusion";

third.style.width = "100px";
third.style.height = "100px";
third.style.backgroundColor = "rgba(50, 50, 50, 0.3)";
third.style.transition = ".4s ease-out";
third.style.mixBlendMode = "exclusion";

const halfAlementWidth = first.offsetWidth / 2;
const halfAlementWidth2 = second.offsetWidth / 2;
const halfAlementWidth3 = third.offsetWidth / 2;

function setPosition(x, y) {
  first.style.transform = `translate(${x - halfAlementWidth}px, ${
    y - halfAlementWidth
  }px)`;
  second.style.transform = `translate(${x - halfAlementWidth2}px, ${
    y - halfAlementWidth2
  }px)`;
  third.style.transform = `translate(${x - halfAlementWidth3}px, ${
    y - halfAlementWidth3
  }px)`;
}

window.addEventListener("mousemove", (e) => {
  document.body.style.cursor = "none";
  window.requestAnimationFrame(function () {
    setPosition(e.pageX, e.pageY);
  });
});

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)
