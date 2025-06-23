const trCon = document.getElementById("snake-trail");
const gSize = 20;
const maxSegs = 30;
const seg = [];

for (let i = 0; i < maxSegs; i++) {
  const div = document.createElement("div");
  div.classList.add("snake-seg");
  div.style.opacity = 1 - i / maxSegs;
  trCon.appendChild(div);
  seg.push({ x: 0, y: 0, element: div });
}

let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = Math.round(e.clientX / gSize) * gSize;
  targetY = Math.round(e.clientY / gSize) * gSize;
});

function animate() {
  const head = seg[0];
  if (head.x !== targetX || head.y !== targetY) {
    if (head.x !== targetX) {
      head.x += gSize * Math.sign(targetX - head.x);
    } else if (head.y !== targetY) {
      head.y += gSize * Math.sign(targetY - head.y);
    }
  }

  head.element.style.transform = `translate(${head.x}px, ${head.y}px)`;

  for (let i = seg.length - 1; i > 0; i--) {
    const curr = seg[i];
    const prev = seg[i - 1];
    curr.x = prev.x;
    curr.y = prev.y;
    curr.element.style.transform = `translate(${curr.x}px, ${curr.y}px)`;
  }

  setTimeout(() => requestAnimationFrame(animate), 70);
}

animate();

const txt = "retro";
const typeTarget = document.querySelector(".typewr");

let i = 0;
function type() {
  if (i < txt.length) {
    typeTarget.textContent += txt.charAt(i);
    i++;
    setTimeout(type, 1000);
  }
}

window.onload = type;


let hovtexts = document.querySelectorAll(".hov");
hovtexts.forEach((hovtext) => {
  const txt1 = hovtext.textContent;
  let splitTxt1 = txt1.split("");
    hovtext.textContent = "";
  for (let i = 0; i < splitTxt1.length; i++) {
    const span = document.createElement("span");
    span.textContent = splitTxt1[i];
    hovtext.appendChild(span);
    span.classList.add("hovspan");
  }
});