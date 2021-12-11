import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { formatDate, formatRating, convertTime } from '../utilities/Format';

function SingleMovie({ movie }) {

    // const getGenres = (genres) => {
    //     return genres.map((genre, i) => {
    //      if(i === genre.length - 1){
    //        return (<span className="make-genres-arr" key={i}>{genre.name}</span>);
    //      }else {
    //        return (<span className="make-genres-arr" key={i}>{genre.name}, </span>);
    //      }
    //     });
    //   }

    return (
        <div className="single-movie">
            <div className="movie-images">
                {movie.poster_path === null ? 
                    <img className="poster" src={noPoster} alt="No poster available." /> : 
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  

                <img className="backdrop" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>
            </div>
            
            <div className="movie-info-container">
                <h2>{movie.title} ({movie.release_date.slice(0,4)})</h2>
                
                <div className="movie-info">
                    <p>{movie.release_date ? formatDate(movie.release_date) : "Released date is not available"}</p>
                    <p>{movie.runtime !== null && `${convertTime(movie.runtime)}`}</p>
                </div>
                
                <div className="genres">
                    <ul>
                        {movie.genres.map((genre, i) => <li key={i}>{genre.name}</li>)}
                    </ul>
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