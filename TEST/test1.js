document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown");

  dropdowns.forEach((dropdown) => {
    const menu = dropdown.querySelector(".dropdown-menu");

    dropdown.addEventListener("mouseover", function () {
      menu.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", function () {
      menu.style.display = "none";
    });
  });
});
