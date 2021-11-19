import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';

function SingleMovie({ movie }) {

    function formatRating (rating){
        if (rating.toString().length === 1){
            return rating.toString()+ ".0";
        } else {
            return rating;
        }
    }

    return (
        <div className="single-movie">
            <div className="movie-poster">
                {movie.poster_path === null ? 
                    <img src={noPoster} alt="No poster available." /> : 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  
            </div>
            
            <div className="movie-info-container">
                <h2>{movie.title}</h2>
                
                <div className="movie-info">
                <p>{movie.release_date ? movie.release_date : "Released date is not available"}</p>
                <p>{movie.runtime !== null && `${movie.runtime} min`}</p>
                {/* {movie.genres.map((genre, i) => <li key={i}> <p>{genre.name}</p> </li>)} */}
                </div>

                <div className="rating-fav-row">
                    <p className='rating'>{movie.vote_average !== null && formatRating(movie.vote_average)}</p>
                    <div className="fav-btn-container">
                        <FavButton movie={movie}/> 
                        <p>Favourite</p>
                    </div>
                </div>

                <div className="overview">
                {movie.overview !== null && <h3>Overview</h3>}
                <p>{movie.overview !== null && movie.overview}</p>
                </div>
                
            </div>
        </div>
    )
}

export default SingleMovie; 