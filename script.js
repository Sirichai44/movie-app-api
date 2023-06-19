const apiKey="1d55b6ac9bf92d42f15a2f0ef3779d33";
let years="2023";
const url=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&page=1&year=${years}`;

const content=document.getElementById('content');
const urlPoster=`https://image.tmdb.org/t/p/w500/`;

const dropdown=document.getElementById('years');

async function displayMovies(url){
    const response = await fetch(url);
    const movies = await response.json();

    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

    // console.log(movies);
    movies.results.forEach(data=>{
        // title
        const movieEL=document.createElement('div');
        const title=document.createElement('h2');
        title.innerHTML=`${data.title.substring(0,24)}`;
        movieEL.classList.add('movie');
        movieEL.appendChild(title);
        content.appendChild(movieEL);

        // img
        const poster=document.createElement('img');
        poster.src=`${urlPoster}${data.poster_path}`
        movieEL.appendChild(poster);
    });
} 

dropdown.addEventListener('change',()=>{
    years=dropdown.value;
    const updateUrl=`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1&sort_by=popularity.desc&page=1&year=${years}`
    displayMovies(updateUrl);
})
displayMovies(url);