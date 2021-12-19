import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { MovieService } from "../API/MovieService";

export const MovieDetail = () => { 
    const { id } = useParams();

    const [movie, setMovie] = useState({});
  
    const fetchMovie = async () => {
  
        const { data }  = await MovieService.getMovieById(id);
        setMovie(data);
        console.log(data);
  
    }
  
    useEffect(()=> {
      fetchMovie();
    }, []);

    return(
        <>
            <h1>{movie.title}</h1>
            <h1>Average: {movie.vote_average}</h1>
            <article>{movie.overview}</article>
        </>
    )

}