const ignitedContain = document.querySelector(".ignited-contain");
const animatronics = document.querySelector(".animatronics");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");

const animatronicTitle = document.createElement("h1");
const description = document.createElement("p");

fetch("./assets/data/data.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    animatronicTitle.textContent = data[0].animatronic;
    animatronics.src = data[0].image;
    description.textContent = data[0].description;

    animatronicTitle.classList.add("animatronic-name");
    animatronics.classList.add('animatronics-image')
    description.classList.add("description");

    let compteur = 0;

    function updateImage() {
      animatronics.src = data[compteur].image;
    }

    function updateText() {
      animatronicTitle.textContent = data[compteur].animatronic;
      description.textContent = data[compteur].description
    }

    arrowLeft.addEventListener("click", function () {
      if (compteur > 0) {
        compteur--;
      } else {
        compteur = data.length - 1;
      }

      updateImage();
      updateText();
    });

    arrowRight.addEventListener("click", function () {
      if (compteur < data.length - 1) {
        compteur++;
      } else {
        compteur = 0;
      }

      updateImage();
      updateText();
    });

    ignitedContain.appendChild(animatronicTitle);
    ignitedContain.appendChild(description);
  })
  .catch(function (error) {
    console.error("Error fetching the JSON file:", error);
  });
