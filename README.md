# Smartphone-like temperature conversion form
<br>
https://sximenez.github.io/temperatureConverter/
<br>
The **idea** was to imitate a smartphone app converting temperature from Celsius to/from Fahrenheit.
<br>
The **html** is divided in three main wrappers with an input and action buttons on top, and the output in the middle.
<br>
The **CSS** is based on the Tailwind framework.
<br>
For **JS**, I wrote two functions using an event "click", one for to convert from Celsius:
<br>
```Javascript
convertFromCelsius.addEventListener("click",
  function () {
    if (input.value >= -273) {
      output.value = parseInt(input.value * (9 / 5) + 32);
    }
  }
)
```
<br><br>
And one to convert from Fahrenheit:
<br>
```Javascript
convertFromFahrenheit.addEventListener("click",
  function () {
    if (input.value >= -273) {
      output.value = parseInt((input.value - 32) * (5 / 9));
    }
  }
)
```
