const searchForm = document.getElementById('searchForm');
const resultsContainer = document.getElementById('results');
const paginationContainer = document.getElementById('pagination');
const detailsContainer = document.getElementById('details');
const apiKey = '6c9a2442'; // Замість 'your_omdb_api_key' вставте ваш ключ API

let currentPage = 1;
let currentQuery = '';
let currentType = '';

searchForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    currentQuery = document.getElementById('title').value;
    currentType = document.getElementById('type').value;
    currentPage = 1;
    await fetchMovies(currentQuery, currentType, currentPage);
});

async function fetchMovies(query, type, page) {
    const response = await fetch(`https://www.omdbapi.com/?s=${query}&type=${type}&page=${page}&apikey=${apiKey}`);
    const data = await response.json();

    resultsContainer.innerHTML = '';
    paginationContainer.innerHTML = '';
    detailsContainer.innerHTML = '';

    if (data.Response === 'True') {
        data.Search.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <h2>${movie.Title} (${movie.Year})</h2>
                <p>Type: ${movie.Type}</p>
                <img src="${movie.Poster}" alt="${movie.Title}" width="100">
                <button onclick="fetchMovieDetails('${movie.imdbID}')">Details</button>
            `;
            resultsContainer.appendChild(movieElement);
        });
        createPagination(Math.ceil(data.totalResults / 10));
    } else {
        resultsContainer.innerHTML = `<p>Movie not found!</p>`;
    }
}

function createPagination(totalPages) {
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.onclick = async function() {
            currentPage = i;
            await fetchMovies(currentQuery, currentType, currentPage);
        };
        paginationContainer.appendChild(button);
    }
}

async function fetchMovieDetails(id) {
    const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
    const data = await response.json();

    detailsContainer.innerHTML = `
        <h2>${data.Title} (${data.Year})</h2>
        <p>${data.Plot}</p>
        <p>Director: ${data.Director}</p>
        <p>Actors: ${data.Actors}</p>
        <img src="${data.Poster}" alt="${data.Title}" width="100">
    `;
}