import tmdbIcon from '../images/tmdb.svg';

function PageAbout() {
    window.scrollTo(0, 0);
    
    return (
        <section className="about-page">
            <div className="about-title">
                <h2>Hi there! <i className="fas fa-eye"></i></h2>
            </div>
            <div className="about-text">
                <p>Welcome to Movie Buzz!</p>
                <p>We are an online movie database which allow users to browse movies based on popularity, rating, and release date, and keep track of movies they love. </p>
                <p>Movie Buzz uses the TMDb API but is not endorsed or certified by TMDb.</p>
            </div>
            <img className='tmdb-icon' src={tmdbIcon} alt="TMDB Icon" />
        </section>
    )
}

export default PageAbout;
