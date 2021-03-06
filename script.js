let button = document.querySelector("#submit");
let input = document.querySelector("#search");
let output = document.querySelector("#output");

button.addEventListener("click", e => {
  getDataFromItunes();
});

function getDataFromItunes() {
  var url = "https://itunes.apple.com/search?term=" + input.value;
  let cors = "https://cors-anywhere.herokuapp.com/";

  fetch(cors + url)
    .then(data => data.json())
    .then(json => {
      console.log(json);
      let finalHTML = "";

      json.results.forEach(song => {
        finalHTML = +`
        <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="images/office.jpg">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>Here is some more information about this product that is only revealed once clicked on.</p>
          </div>
        </div>
        `;
      });
    })
    .catch(error => console.log(error));
}
