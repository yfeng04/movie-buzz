import React from "react";
import { Link } from 'react-router-dom';
import noPoster from '../images/no-movie-poster.jpg';
import FavButton from '../components/FavButton';
import { formatDate, formatRating, getStars } from '../utilities/Format';
import ReactStars from 'react-rating-stars-component';
import { useMediaQuery } from 'react-responsive'

function MovieCard({ movie }) {

    const isTabletOrDesktop = useMediaQuery({ query: '(min-width: 768px)'});

    const overviewExcerpt = (overview) => {

        if (isTabletOrDesktop){
            if (overview.length > 210) {
                return <p>{overview.split(' ').slice(0, 50).join(' ')}...</p>;
            } else {
                return <p>{overview}</p>;
            }
        } else {
            return <p>{overview.split(' ').slice(0, 15).join(' ')}...</p>;
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
                    <p>{movie.release_date ? formatDate(movie.release_date) : "Released date is not available"}</p>

                    <div className="rating-row">
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
                        <p className="rating">{movie.vote_average !== null && formatRating(movie.vote_average)}</p>
                    </div>
                   
                </div>

                <div className="overlay">
                    <div className="overlay-text">
                        {overviewExcerpt(movie.overview)}
                        <Link className ="more-info-btn" to={`/single-movie/${movie.id}`}><p>More Info</p></Link>
                    </div>
                </div>
            </div>

           
        </div>
    )
}

export default MovieCard; 
