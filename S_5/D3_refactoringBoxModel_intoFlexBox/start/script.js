

const overlay = document.getElementById("overlay-contatti");
const overlayBtn = document.getElementById("overlayBtn");
const closeBtn = document.getElementById("chiudi-contatti");

overlayBtn.addEventListener("click", function () {
  overlay.removeAttribute("hidden");
  documen.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", function () {
  overlay.setAttribute("hidden", "");
  documen.body.style.overflow = "";
});


overlay.addEventListener("click", function (event) {
  if (event.target === overlay) {
    overlay.setAttribute("hidden", "");
	documen.body.style.overflow = ""
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    overlay.setAttribute("hidden", "");
	documen.body.style.overflow = ""
  }
});

