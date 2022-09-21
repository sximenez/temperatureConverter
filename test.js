// Je déclare mes variables

let celsius = document.getElementById("cel");
let fahrenheit = document.getElementById("far");
let btnConvert = document.getElementById("convert");

// Je lui dis d'écouter le bouton, s'il y a click

btnConvert.addEventListener("click",

  // Je déclare une fonction anonyme

  function () {

    // Je déclare ma conditionnelle, si la valeur de celsius est supérieure ou égale à 1, fais le calcul
    if (celsius.value !== "") {
      fahrenheit.value = (celsius.value * (9 / 5) + 32);
    }
  }
)