import axios from 'axios';
const API_KEY = 'e21715a39437ab57391df3cb59942dfd';
const BASE_URL = 'https://api.themoviedb.org/3/';
const buildURL = path => `${BASE_URL}${path}?api_key=${API_KEY}`;


export class MovieService {

    static getMovies(path){
        return axios(buildURL(path));
    }

    static getMovieById(id) {
        return axios(buildURL(`movie/${id}`));
    }
}



