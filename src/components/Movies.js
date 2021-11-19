import MovieCard from './MovieCard';

function Movies({ moviesData }) {
    return (
        <div className="movies-container">
           {moviesData.map(movie => <MovieCard key={movie.id} movie={movie} isFav={true} />)}
        </div>
    )
}

export default Movies;
