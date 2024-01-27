const link = document.querySelector('#link');

link.addEventListener('click', function (event) {
    textInput = prompt('Введите текст');
    this.textContent = textInput;
    event.preventDefault();
})