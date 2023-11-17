// Get all elements with the "logo" class
var logoElements = document.getElementsByClassName("logo");

// Loop through the elements and add a click event listener to each
for (var i = 0; i < logoElements.length; i++) {
  logoElements[i].addEventListener("click", loadIndexPage);
}

// Define the loadIndexPage function
function loadIndexPage() {
  // Add your code here to handle the click event
  // For example, you can navigate to the index page:
  window.location.href = "index.html";
}
