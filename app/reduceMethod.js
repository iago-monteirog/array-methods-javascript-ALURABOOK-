function calculatePriceAvaibleBooks(avaibleBooks) {
    return avaibleBooks.reduce((acc, book) => acc + book.preco, 0).toFixed(2);
}