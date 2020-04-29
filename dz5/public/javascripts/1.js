const main = document.querySelector('.main');
const spinner = document.querySelector('.spinner');

document.addEventListener('DOMContentLoaded', () => {
    loadNewPhotos(50);
});

window.addEventListener('scroll',() => {
    if (Math.abs(document.documentElement.clientHeight - document.documentElement.getBoundingClientRect().bottom) <= 0.25) 
    {   
        spinner.style.display = "block";
        setTimeout(loadNewPhotos,3000,25);
    }
});

function addNewPhoto(photoUrl) {
    let newImage = document.createElement('img');
    newImage.src = photoUrl;
    newImage.className = "main-image";

    main.appendChild(newImage);
}

function get(url) {
    return new Promise(function(succeed, fail) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.addEventListener("load", function() {
        if (request.status < 400)
          succeed(request.response);
        else
          fail(new Error("Request failed: " + request.statusText));
      });
      request.addEventListener("error", function() {
        fail(new Error("Network error"));
      });
      request.send();
    });
}

function loadNewPhotos(number) {
    get(`https://randomuser.me/api/?results=${number}`)
    .then((data) => {
        data = JSON.parse(data);
        data.results.forEach(element => {
            addNewPhoto(element.picture.large);
        });
        spinner.style.display = "none";
    })
    .catch((err) => {
        alert(err);
    });
}
