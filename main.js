function handleKeyPress(event) {
  // if (event.keyCode === 13) {
  var inputElement = document.getElementById("myInput");

  var inputValue = inputElement.value;

  var outoutElenment = document.getElementById("output");
  outoutElenment.innerHTML = capitalizeLetters(inputValue);

  // }
}

function capitalizeLetters(string) {
  var oldArray = string.split(" "),
    newArray = [];

  for (let i = 0; i < oldArray.length; i++) {
    newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
  }
  return newArray.join(" ");
}
