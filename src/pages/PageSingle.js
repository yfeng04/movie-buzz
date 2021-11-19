import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import { API_KEY } from '../globals/globals';
import SingleMovie from '../components/SingleMovie';

const PageSingle = () => {

    const [movie, setMovie] = useState(null);

    let { id } = useParams()

    useEffect(() => {

        const fetchMovies = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`, {
            });
            let movie = await res.json();
            console.log(movie);
        
            setMovie(movie);
          }
      
          fetchMovies();

    }, [id]);


    return (
      <main>
       
       {movie !== null && <SingleMovie movie={movie} />}
      </main>
    );
  }
  
  export default PageSingle;