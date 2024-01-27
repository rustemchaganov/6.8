const textInput = document.querySelector('#textInput');
const textOutput = document.querySelector('#duplicateField');

textInput.addEventListener('input', function () {
    textOutput.textContent = this.value;
})

document.querySelector('form[name="myForm"]').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(textInput.value);
    textOutput.textContent = '';
    textInput.value = '';
})