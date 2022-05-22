const footerIcons = document.querySelectorAll(".footer-icon > i");

footerIcons.forEach((icon) => {
  icon.addEventListener("mouseover", onMouseOver);
  icon.addEventListener("mouseout", (e) => {
    e.target.classList.remove("footer-hover");
  });
});

function onMouseOver(e) {
  if (
    e.target == footerIcons[0] ||
    e.target == footerIcons[1] ||
    e.target == footerIcons[2]
  ) {
    e.target.classList.add("footer-hover");
  }
}
