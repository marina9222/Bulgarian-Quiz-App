/* jshint esversion: 11 */
//Choosing the category
document.getElementById("start-btn").addEventListener("click", function () {
  const category = document.getElementById("category").value;
  window.location.href = `game.html?category=${category}`;
});
