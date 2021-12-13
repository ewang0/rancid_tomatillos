const getAllMovies = async () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then(response => response.json())
}

const getSingleMovie = async (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
   .then(response => response.json())
}

const getSingleMovieTrailer = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
    .then(response => response.json())
}

export { getAllMovies, getSingleMovie, getSingleMovieTrailer }