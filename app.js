window.onload = function() {

  var searchBtn = document.querySelector('#Search');
  var httpRequest;

  searchBtn.addEventListener('click', function(element) {
    element.preventDefault();

    httpRequest = new XMLHttpRequest();

    var input=document.getElementById("searchbar").value;
    var url = "superheroes.php?query="+input;
    httpRequest.onreadystatechange = loadSuperheroes;
    httpRequest.open('GET', url);
    httpRequest.send();
  });

  function loadSuperheroes() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        var response = httpRequest.responseText;
        var result = document.querySelector('#result');
        result.innerHTML = response;
      } else {
        alert('There was a problem with the request.');
      }
    }
  }

};
