const buttons = document.querySelectorAll('.btn');

buttons.forEach(element => element.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;

    let filteredBooks = books.filter(element => element.categoria == category);
    showBooksOnScreen(filteredBooks);
}