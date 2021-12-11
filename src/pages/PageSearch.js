import { useState, useEffect } from 'react';
import { API_KEY } from '../globals/globals';
import MovieCard from '../components/MovieCard';

const PageSearch = () => {
    const [text, setText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(()=>{
        const fetchResults = async () => {

            const result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}&page=1`);
            const data = await result.json();
            // console.log(data.results)

            if (text!== ''){
                setSearchResults(data.results);
            } else {
                setSearchResults([]);
            }
        }
      
        fetchResults();

    }, [text]);

    const onChange = (e) => {
        e.preventDefault();
        setText(e.target.value);
    }

    return (
        <section className="search">
            <form>
                <input type="text" className="form-control" 
                placeholder="Search Movies..."
                value={text}
                onChange={onChange}
                autoFocus/>
            </form>   

            {searchResults.length === 0 ? 
                (<p className="no-results">No results</p>) : 
                (<section className="movies-container"> 
                    {searchResults.map(movie => <MovieCard key={movie.id} movie={movie} isFav={false} />)} 
                </section>)
            }
           
        </section>
        
    )
}

export default PageSearch

