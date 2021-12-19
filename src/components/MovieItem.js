import { Link } from "react-router-dom";



export const MovieItem = ({ movie }) => (
    <li>
        <div><Link to={`movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}></img></Link></div>
        <div><Link to={`movie/${movie.id}`}>{movie.title}</Link> / {movie.original_language}</div>
    </li>



);

