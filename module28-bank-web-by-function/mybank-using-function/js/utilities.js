// get value from input field by function
function getInputFieldValueById(inputFieldId) {
  const inputField = document.getElementById(inputFieldId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldValueString);
  inputField.value = "";
  return inputFieldValue;
}

// previous value
function getElementValueById(elementId) {
  const textElement = document.getElementById(elementId);
  const textElementValueString = textElement.innerText;
  const textElementValue = parseFloat(textElementValueString);
  return textElementValue;
}

// set value in html element
function setTextElementById(elementId, newValue) {
  const textElement = document.getElementById(elementId);
  textElement.innerText = newValue;
  console.log(textElement);
}
