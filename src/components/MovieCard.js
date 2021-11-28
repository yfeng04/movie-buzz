import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';

function MovieCard({ movie }) {

    function formatRating (rating){
        if (rating.toString().length === 1){
            return rating.toString()+ ".0";
        } else {
            return rating;
        }
        
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <Link to={`/single-movie/${movie.id}`}><img src={noPoster} alt="No poster available." /></Link> : 
                    <Link to={`/single-movie/${movie.id}`}><img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} /></Link>
                }
                <div className="btn-favourite">
                <FavButton movie={movie}/>
                </div>
            </div>

            <div className="movie-info-container">
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <div className="date-rating-row">
                        <p>{movie.release_date ? movie.release_date : "Released date is not available"}</p>
                        <p className="rating">{movie.vote_average !== null && formatRating(movie.vote_average)}</p>
                    </div>
                   
                </div>

                <div className="overlay">
                    <div className="overlay-text">
                        <p>{movie.overview.length > 280 ?
                        `${movie.overview.split(' ').slice(0, 50).join(' ')}...` : movie.overview}</p>
                        <Link className ="more-info-btn" to={`/single-movie/${movie.id}`}><p>More Info</p></Link>
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default MovieCard; 
