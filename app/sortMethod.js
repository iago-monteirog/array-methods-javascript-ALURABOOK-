const  btnOrderPrices = document.getElementById('btnOrdenarPorPreco');

btnOrderPrices.addEventListener('click', orderBooksByPrize);

function orderBooksByPrize() {
    let orderedBooks = books.sort((a,b) => a.preco - b.preco);

    showBooksOnScreen(orderedBooks);
}