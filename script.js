function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

// ===================== ini untuk scrol slide image=============================================================
function toggleMenu() {
  document.getElementById("nav-menu").classList.toggle("show");
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

// ===================== SLIDER IMAGE =====================
let index = 0;

function slide(step) {
  const slider = document.getElementById("slider");
  const total = slider.children.length;

  index += step;

  if (index < 0) index = total - 1;
  if (index >= total) index = 0;

  slider.style.transform = `translateX(-${index * 100}%)`;
}

