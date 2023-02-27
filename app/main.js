let books = [];
const apiURL = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getSearchAPIBooks();
const insertBookElement = document.getElementById('livros');

async function getSearchAPIBooks() {
    const response = await fetch(apiURL);

    books = await response.json();
    console.table(books);
    showBooksScreen(books);
}

function showBooksScreen(booksList) {
    booksList.forEach(element => {
        insertBookElement.innerHTML += `
        <div class="livro">
            <img class="livro__imagens" src="${element.imagem}" alt="${element.alt}" />
            <h2 class="livro__titulo">
                ${element.titulo}
            </h2>
            <p class="livro__descricao">${element.autor}</p>
            <p class="livro__preco" id="preco">R$${element.preco}</p>
            <div class="tags">
                <span class="tag">${element.categoria}</span>
            </div>
      </div>
        `
    });
}