let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener("click", e => {
  getDataFromItunes();
});

function getDataFromItunes() {
  var url = "https://itunes.apple.com/search?term=" + input.value;
}
