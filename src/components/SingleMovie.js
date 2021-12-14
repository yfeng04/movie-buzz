import noPoster from '../images/no-movie-poster.jpg';
import noProfilePic from '../images/no-profile-holder.jpg';
import noBackdrop from '../images/backdrop-placeholder.png'
import FavButton from '../components/FavButton';
import { formatDate, formatRating, convertTime, getStars } from '../utilities/Format';
import ReactStars from 'react-rating-stars-component';

function SingleMovie({ movie }) {

    const displayCast = (castList) => {

        const top15 = castList.filter(cast => cast.order < 15);
    
        return top15.map((cast, i) => {  
          return (
                <div className="cast-info" key={i}> 
                    { cast.profile_path !== null ? 
                    <img className="cast-photo" key={i} src={`https://image.tmdb.org/t/p/w300/${cast.profile_path}`} alt={cast.name} /> :          
                    <img className="placeholder" src={noProfilePic} alt="profile placeholder" />
                    }
                    <div className='cast-text'> 
                        <p className='cast-name'>{cast.name}</p>
                        <p className='cast-char'>{cast.character}</p>
                    </div>
                </div>    
            ) }
        );
    }

    return (
        <section className="single-movie">
            <section className="movie-images">
                {movie.poster_path === null ? 
                    <img className="poster" src={noPoster} alt="No poster available." /> : 
                    <img className="poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                }  

                {movie.backdrop_path === null ?
                 <img className="backdrop" src={noBackdrop} alt="No backdrop available." /> : 
                 <img className="backdrop" src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title}/>}
               
            </section>
            
            <section className="movie-info-container">
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

                    <div className='rating-group'>
                        <p className='rating'>{movie.vote_average !== null && formatRating(movie.vote_average)}</p>

                        <ReactStars 
                            count={5}
                            value={getStars(movie.vote_average)}
                            isHalf={true}
                            edit={false}
                            size={16}
                            char={""}
                            activeColor="#FFCC00"
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            filledIcon={<i className="fa fa-star"></i>}
                        />
                    </div>

                    <div className="fav-btn-container">
                        <FavButton movie={movie}/> 
                        <p>Favourite</p>
                    </div>
                </div>

                {movie.overview !== "" && (
                    <div className="overview">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>
                )}

                {movie.credits.cast.length !== 0 && (
                    <div className="cast">
                        <h3>Cast</h3>
                        <div className="cast-info-container">
                            {displayCast(movie.credits.cast)}
                        </div>
                    </div>
                )}

                
                
            </section>
        </section>
    )
}

export default SingleMovie; 