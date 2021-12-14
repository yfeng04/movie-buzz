import MovieCard from './MovieCard';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { API_TOKEN } from '../globals/globals';

function Movies({ sort, pageNum, resetMovies }) {
    const [movies, setMovies] = useState([]);
    const [previousPage, setPreviousPage] = useState("");
    let currentPage  = useLocation();

    useEffect(()=>{
        const fetchMovies = async () => {

            const result = await fetch(`https://api.themoviedb.org/3/movie/${sort}?language=en-US&page=${pageNum}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + API_TOKEN
                    }
            });
            const data = await result.json();

            if(currentPage.pathname !== previousPage.pathname){
                resetMovies();
                setMovies(data.results);
                setPreviousPage(currentPage);

            } else {
                const moreMovies = [...movies, ...data.results];
                setMovies(moreMovies);
                setPreviousPage(currentPage);
            }

            //console.log(data.results)
        }
      
        fetchMovies();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageNum, sort]);

    return (
        <>
        {movies !== null && movies.map(movie => <MovieCard key={movie.id} movie={movie} isFav={false} />)}
        </>
    )
}

export default Movies;
