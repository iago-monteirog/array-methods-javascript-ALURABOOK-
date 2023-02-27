let books = [];
const apiURL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getSearchAPIBooks();

async function getSearchAPIBooks() {
    const response = await fetch(apiURL);

    books = await response.json();
    console.table(books);
    let discountBooks = descountAplly(books);
    showBooksOnScreen(discountBooks);
}

