const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_KEY}`;

const fetchMovies = async (params = '') => {
    console.log(API_URL);
    const response = await fetch(params ? '${API_URL}&${params}' : API_URL);
    return response.json();
    
}

export default fetchMovies;