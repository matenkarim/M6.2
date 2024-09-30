document.querySelector('button').addEventListener('click', showAlert);

function showAlert() {
  const selectedOption = document.querySelector('input[name="choice"]:checked');
  
  if (selectedOption) {
    alert("You selected: " + selectedOption.value);
  } else {
    alert("Please select an option!");
  }
}
