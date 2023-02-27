function descountAplly(books) {
    const descount = 0.3;

    const discountBooks = books.map(element => {
        return {...element, preco: element.preco - (element.preco * descount)}
    });

    return discountBooks;
}