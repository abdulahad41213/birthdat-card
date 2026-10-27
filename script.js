document.addEventListener("DOMContentLoaded", () => {
  const img = document.createElement("img");
  img.src = "cake.jpg"; // Make sure cake.jpg is in the same folder
  img.alt = "Birthday Cake";
  img.onload = () => console.log("Image loaded!");
  document.getElementById("image-container").appendChild(img);
});