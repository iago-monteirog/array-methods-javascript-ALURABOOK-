const buttons = document.querySelectorAll('.btn');

buttons.forEach(element => element.addEventListener('click', filterBooks))

function filterBooks() {
    const btnElement = document.getElementById(this.id);
    const category = btnElement.value;

    let filteredBooks = category == 'disponivel' ? filterByAvaibility() : filterByCategory(category);
    showBooksOnScreen(filteredBooks);

    if (category == 'disponivel') {
        const total = calculatePriceAvaibleBooks(filteredBooks);
        showTotalPrizeAvaibleBooks(total);
    }
}

function filterByCategory(category) {
    return books.filter(element => element.categoria == category);
}

function filterByAvaibility() {
    return books.filter(book => book.quantidade > 0);
}

function showTotalPrizeAvaibleBooks(total) {
    totalPrizeAvaibleBooks.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${total}</span></p>
    </div>
    `
}