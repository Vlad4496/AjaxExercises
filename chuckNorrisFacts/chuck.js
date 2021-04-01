$(document).ready(function () {
  specificJoke();
  let button = document.getElementById("changeBtn");
  button.addEventListener("click", specificJoke);
  function specificJoke() {
    var request = new XMLHttpRequest();
    request.open("GET", "http://api.icndb.com/jokes/random");
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        var jokes = JSON.parse(request.response);
        $("#text").html(jokes.value.joke);
      }
    };
    request.send();
  }
});
