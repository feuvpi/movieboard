import axios from 'axios';
const API_KEY = process.env.REACT_APP_MOVIE_DB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/';
const buildURL = path => `${BASE_URL}${path}?api_key=${API_KEY}`;
require("dotenv/config");



export class MovieService {

    static getMovies(path){
        return axios(buildURL(path));
    }

    static getMovieById(id) {
        return axios(buildURL(`movie/${id}`));
    }
}



