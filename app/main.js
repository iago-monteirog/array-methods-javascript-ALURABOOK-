let books = [];
const apiURL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getSearchAPIBooks();

async function getSearchAPIBooks() {
    const response = await fetch(apiURL);

    books = await response.json();
    let discountBooks = descountAplly(books);
    showBooksOnScreen(discountBooks);
}

