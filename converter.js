function convert() {
  const inputValue = parseFloat(document.getElementById("inputValue").value);
  const inputUnit = document.getElementById("inputUnit").value;
  const outputUnit = document.getElementById("outputUnit").value;
  let outputValue;

  switch (inputUnit) {
    case "m":
      switch (outputUnit) {
        case "m":
          outputValue = inputValue;
          break;
        case "km":
          outputValue = inputValue / 1000;
          break;
        case "cm":
          outputValue = inputValue * 100;
          break;
      }
      break;
    case "km":
      switch (outputUnit) {
        case "m":
          outputValue = inputValue * 1000;
          break;
        case "km":
          outputValue = inputValue;
          break;
        case "cm":
          outputValue = inputValue * 100000;
          break;
      }
      break;
    case "cm":
      switch (outputUnit) {
        case "m":
          outputValue = inputValue / 100;
          break;
        case "km":
          outputValue = inputValue / 100000;
          break;
        case "cm":
          outputValue = inputValue;
          break;
      }
      break;
  }

  document.getElementById("outputValue").textContent = outputValue;
}
