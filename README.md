# Smartphone-like temperature conversion form

✅ <a href="https://sximenez.github.io/temperatureConverter/" target="_blank">https://sximenez.github.io/temperatureConverter/</a>


The **idea** was to imitate a smartphone app converting temperature from Celsius to/from Fahrenheit.

The **html** is divided in three main wrappers with an input and action buttons on top, and the output in the middle.

The **CSS** is based on the Tailwind framework.

For **JS**, I wrote two functions using an event "click", one to convert from Celsius:

```Javascript
convertFromCelsius.addEventListener("click",
  function () {
    if (input.value >= -273) {
      output.value = parseInt(input.value * (9 / 5) + 32);
    }
  }
)
```

And one to convert from Fahrenheit:

```Javascript
convertFromFahrenheit.addEventListener("click",
  function () {
    if (input.value >= -273) {
      output.value = parseInt((input.value - 32) * (5 / 9));
    }
  }
)
```
