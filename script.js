function togglemode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#profile img");

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png");
    img.setAttribute("alt", "foto de Willian, loiro e com camiseta preta");
  } else {
    img.setAttribute("src", "./assets/avatar.png");
    img.setAttribute(
      "alt",
      "foto de Willian sorrindo, usando camiseta preta, com bigode"
    );
  }
}
