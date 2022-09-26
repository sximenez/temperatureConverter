# 1. Smartphone-like temperature conversion form

✅ https://sximenez.github.io/temperatureConverter/


The ```idea``` was to imitate a smartphone app converting temperature from Celsius to/from Fahrenheit.

The ```html``` is divided in three main wrappers with an input and action buttons on top, and the output in the middle.

The ```css``` is based on the Tailwind framework.

For ```js```, I wrote two functions using an event "click", one to convert from Celsius:

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
