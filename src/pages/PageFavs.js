import { Link } from 'react-router-dom';
import useGlobal from '../store/globalAppState';
import MovieCard from '../components/MovieCard';

function PageFavs() {
    window.scrollTo(0, 0);
    
    const globalStateAndActions = useGlobal();
    const globalState = globalStateAndActions[0];

    return (
       
        <section className="fav-page">
            <h2>My Favourites</h2>
            {globalState.favs.length < 1 ? 
            <p>No favourite movies. Return to the <Link to="/">home</Link> page to add some favourite movies.</p> : 
            <div className="fav-movie-grid movies-container">
                {globalState.favs.map((movie, i) => {
                    return <MovieCard key={i} 
                                    movie={movie} />
                })}
            </div>}
        </section>
	   
    );
}

export default PageFavs;
