document.querySelector('#consolelog').addEventListener('click', () => {
    alert('Метод для ввода сообщений в веб-консоль');
})
document.querySelector('#alert').addEventListener('click', () => {
    alert('Показывает диалоговое окно с сообщением и кнопкой OK.');
})
document.querySelector('#prompt').addEventListener('click', () => {
    console.log(
        prompt('Введите текст/информацию')
    );
})