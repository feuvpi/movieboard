import { useEffect, useState } from "react";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";
import { MovieService } from "../API/MovieService";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';



export const Home = () => {

    
    const [movies, setMovies] = useState([]);

    const [section, setSection] = useState("movie/upcoming");
  
    const fetchMovies = async (baseURL) => {
  
        const { data }  = await MovieService.getMovies(baseURL);
        console.log("o section foi: " + section);
        setMovies(data.results);
    }

    console.log(movies);

    useEffect(() => {
      fetchMovies(section);
      //console.log("o section foi: " + section);
    }, [section]);


    function handleChange(event) {

      console.log(event.value);
      setSection(`movie/${event.value}`);
      console.log(section);
    }
  

    const options = [
      {value: 'upcoming', label: 'Upcoming'},
      {value: 'latest', label: 'Latest'},
      {value: 'now_playing', label: 'Now Playing'},
      {value: 'top_rated', label: 'Top Rated'},
      {value: 'popular', label: 'Popular'},
    ];
    
    
    
    return (

        <>
    
        <Dropdown options={options} onChange={(event) => handleChange(event)}></Dropdown>

        <MoviesContainer>
          <MoviesList movies={movies} />
        </MoviesContainer>

      </>

        );
    };


