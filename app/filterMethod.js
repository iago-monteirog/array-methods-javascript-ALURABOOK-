const buttons = document.querySelectorAll('.btn');

buttons.forEach(element => element.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;

    let filteredBooks = category == 'disponivel' ? books.filter(book => book.quantidade > 0) : books.filter(element => element.categoria == category);
    showBooksOnScreen(filteredBooks);
}