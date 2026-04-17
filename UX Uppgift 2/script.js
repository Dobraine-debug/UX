const recipes = document.getElementById("recipes");
const search = document.getElementById("search");

function toggleFilter() {
  const menu = document.getElementById("filters");
  const arrow = document.querySelector(".arrow");

  menu.classList.toggle("hidden");
  arrow.classList.toggle("rotate");
}

document.querySelectorAll(".preferences-buttons button").forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
  });
});

function resetFilters(){
  document.querySelectorAll(".preferences-buttons button")
    .forEach(btn => btn.classList.remove("active"));

  document.querySelectorAll("select")
    .forEach(select => select.selectedIndex = 0);

  document.querySelectorAll(".filters input")
    .forEach(input => input.value = "");

  document.querySelector(".arrow")?.classList.remove("rotate");
}

search.addEventListener('click', function() {
  recipes.style.display = "inline";
})